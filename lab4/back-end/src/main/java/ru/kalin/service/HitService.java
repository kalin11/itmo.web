package ru.kalin.service;

import io.jsonwebtoken.JwtException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import ru.kalin.dto.HitDTO;
import ru.kalin.model.Hit;
import ru.kalin.model.Person;
import ru.kalin.repository.HitRepository;
import ru.kalin.repository.PersonRepository;
import ru.kalin.request.HitRequest;
import ru.kalin.response.ClearHitsResponse;
import ru.kalin.response.CreatingHitResponse;
import ru.kalin.response.GetHitsResponse;

import java.util.List;

@Service
@Transactional
public class HitService {
    private final JwtService jwtService;
    private final HitRepository hitRepository;
    private final CreationHitService hitService;
    private final ConverterToDtoService converter;
    private final PersonRepository personRepository;


    public HitService(JwtService jwtService, HitRepository hitRepository, CreationHitService hitService, ConverterToDtoService converter, PersonRepository personRepository) {
        this.jwtService = jwtService;
        this.hitRepository = hitRepository;
        this.hitService = hitService;
        this.converter = converter;
        this.personRepository = personRepository;
    }

    public CreatingHitResponse add(HitRequest request, String token){
        try{
            Person person = personRepository.findPersonById(Integer.parseInt(jwtService.getPersonIdFromToken(token)));

            Hit hit = hitService.createHit(
                    person.getUsername(),
                    request.getX(),
                    request.getY(),
                    request.getR()
            );
            hitRepository.save(hit);
            return new CreatingHitResponse(true);
        }catch (JwtException e){
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

    }

    public ClearHitsResponse clearing(String token){
        try{
            Person person = personRepository.findPersonById(Integer.parseInt(jwtService.getPersonIdFromToken(token)));
            hitRepository.deleteAllByOwner(hitService.getPerson(person.getUsername()));
            return new ClearHitsResponse(person.getId(), true);
        }catch (JwtException e){
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }
    }

    public GetHitsResponse getHits(String token, int offset, int pageSize){
        try {
            Person person = personRepository.findPersonById(Integer.parseInt(jwtService.getPersonIdFromToken(token)));
            int countOfHits = hitRepository.findAllByOwner(person).size();
            List<HitDTO> dtoList = converter.parseList(hitRepository.findAllByOwner(person, PageRequest.of(offset, pageSize)));
            return new GetHitsResponse(countOfHits, dtoList);
        }catch (JwtException e){
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

    }

}

package ru.kalin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.kalin.model.Hit;
import ru.kalin.model.Person;
import ru.kalin.repository.PersonRepository;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@Service
public class CreationHitService {
    private final PersonRepository repository;
    private final AreaCheckerService checker;

    @Autowired
    public CreationHitService(PersonRepository repository, AreaCheckerService checker){
        this.repository = repository;
        this.checker = checker;
    }

    public Hit createHit(String username, double x, double y, double r){
        Hit hit = new Hit();
        hit.setX(x);
        hit.setY(y);
        hit.setR(r);
        long time = System.nanoTime();
        hit.setHitted(checker.checkArea(x,y,r));
        hit.setTime((System.nanoTime() - time) / 1000.0);
        hit.setDate(ZonedDateTime.now(ZoneId.of("UTC")));
        hit.setOwner(repository.findPersonByUsername(username));
        return hit;
    }

    public Person getPerson(String username){
        return repository.findPersonByUsername(username);
    }
}

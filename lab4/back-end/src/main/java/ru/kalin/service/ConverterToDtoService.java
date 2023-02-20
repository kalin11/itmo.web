package ru.kalin.service;

import org.springframework.stereotype.Service;
import ru.kalin.dto.HitDTO;
import ru.kalin.model.Hit;

import java.util.ArrayList;
import java.util.List;

@Service
public class ConverterToDtoService {

    public List<HitDTO> parseList(List<Hit> hits){
        List<HitDTO> list = new ArrayList<>();
        for (Hit hit : hits){
            list.add(new HitDTO(
                    hit.getX(),
                    hit.getY(),
                    hit.getR(),
                    hit.isHitted(),
                    hit.getTime(),
                    hit.getDate()
            ));
        }
        return list;
    }
}

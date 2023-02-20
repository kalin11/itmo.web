package ru.kalin.repository;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kalin.model.Hit;
import ru.kalin.model.Person;

import java.util.List;


@Repository
public interface HitRepository extends JpaRepository<Hit, Integer> {
    List<Hit> findAllByOwner(Person person);
    List<Hit> findAllByOwner(Person person, PageRequest pageRequest);
    void deleteAllByOwner(Person person);
}

package ru.kalin.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kalin.model.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {
    Person findPersonByUsername(String username);
    Person findPersonById(int id);
}

package ru.kalin.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import ru.kalin.model.Person;
import ru.kalin.repository.PersonRepository;
import ru.kalin.response.AuthorizationResponse;
import ru.kalin.response.RegisterResponse;

@Service
@Transactional
public class PersonService {
    private final PersonRepository personRepo;
    private final JwtService jwtService;


    @Autowired
    public PersonService(PersonRepository personRepo, JwtService jwtService) {
        this.personRepo = personRepo;
        this.jwtService = jwtService;
    }

    public AuthorizationResponse authorization(String username, String password){
        Person person = personRepo.findPersonByUsername(username);
        AuthorizationResponse response = new AuthorizationResponse();
        if (person != null && BCrypt.checkpw(password, person.getPassword())){
            response.setUserId(person.getId());
            String token = jwtService.createWebToken(String.valueOf(person.getId()));
            response.setToken(token);
            response.setMessage("Вы успешно авторизовались");
            response.setWasSuccessfully(true);
            return response;
        }

        response.setToken("");
        response.setWasSuccessfully(false);
        response.setMessage("Введенные данные неверны");

        return response;
    }

    public RegisterResponse register(String username, String password){
        RegisterResponse response = new RegisterResponse();
        response.setUsername(username);
        if (personRepo.findPersonByUsername(username) == null){
            Person person = new Person();
            person.setUsername(username);
            person.setPassword(password);
            personRepo.save(person);
            response.setWasSuccessfully(true);
            response.setMessage("Регистрация прошла успешно");
            return response;
        }
        response.setWasSuccessfully(false);
        response.setMessage("Пользователь с таким именем уже есть");

        return response;
    }

}

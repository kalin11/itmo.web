package ru.kalin.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import ru.kalin.model.Person;
import ru.kalin.response.AuthorizationResponse;
import ru.kalin.response.RegisterResponse;
import ru.kalin.service.PersonService;

@RestController
@RequestMapping("v1/users")

public class PersonController {
    private final PersonService service;

    @Autowired
    public PersonController(PersonService service){
        this.service = service;
    }

    @PostMapping("/login")
    public AuthorizationResponse authorize(@RequestBody @Validated Person person){
        return service.authorization(person.getUsername().trim(), person.getPassword());
    }

    @PostMapping("/register")
    public RegisterResponse register(@RequestBody @Validated Person person){
        String hashPassword = BCrypt.hashpw(person.getPassword(), BCrypt.gensalt(10));
        return service.register(person.getUsername().trim(), hashPassword);
    }
}

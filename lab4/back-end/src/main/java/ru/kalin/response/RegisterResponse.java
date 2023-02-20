package ru.kalin.response;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class RegisterResponse {
    private String username;
    private String message;
    private boolean wasSuccessfully;
}

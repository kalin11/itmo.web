package ru.kalin.response;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AuthorizationResponse {
    private String message;
    private String token;
    private int userId;
    private boolean wasSuccessfully;
}

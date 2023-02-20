package ru.kalin.response;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ClearHitsResponse {
    private int userid;
    private boolean wasSuccessfully;
}

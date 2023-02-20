package ru.kalin.response;
import lombok.*;
import ru.kalin.dto.HitDTO;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class GetHitsResponse {
    private int count;
    private List<HitDTO> list;

}

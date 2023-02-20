package ru.kalin.request;


import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class HitRequest {
    @NotNull
    @Min(-2)
    @Max(2)
    private double x;
    @NotNull
    @DecimalMin(value = "-2.999")
    @DecimalMax(value = "4.999")
    private double y;
    @NotNull
    @Min(0)
    @Max(2)
    private double r;
}

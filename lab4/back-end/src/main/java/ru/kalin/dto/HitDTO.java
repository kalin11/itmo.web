package ru.kalin.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.ZonedDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HitDTO {
    private double x;
    private double y;
    private double r;
    private boolean hitted;
    private double time;
    private ZonedDateTime date;
}

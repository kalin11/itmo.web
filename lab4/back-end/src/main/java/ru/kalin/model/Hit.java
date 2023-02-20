package ru.kalin.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.ZonedDateTime;


@Entity
@Table(name = "hits")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Hit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "x")
    private double x;
    @Column(name = "y")
    private double y;
    @Column(name = "r")
    private double r;
    @Column(name = "hitted")
    private boolean hitted;
    @Column(name = "execute_time")
    private double time;
    @Column(name = "date")
    private ZonedDateTime date;
    @ManyToOne @JoinColumn (name = "owner")
    private Person owner;

}
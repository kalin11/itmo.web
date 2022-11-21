package com.example.web3test;

import javax.persistence.*;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Entity
@Table(name = "shoots")
public class Hit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "x")
    private Double x;
    @Column(name = "y")
    private Double y;
    @Column(name = "radius")
    private Integer radius = 1;
    @Column(name = "execute_time")
    private Long time;
    @Column(name = "was_hitted")
    private Boolean hitted;
    @Column(name = "date")
    private ZonedDateTime date;

    public int getId(){
        return id;
    }

    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Integer getRadius() {
        return radius;
    }

    public void setRadius(Integer radius) {
        this.radius = radius;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }

    public Boolean getHitted() {
        return hitted;
    }

    public void setHitted(Boolean hitted) {
        this.hitted = hitted;
    }

    public ZonedDateTime getDate() {
        return date;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    public String getStringDate(){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        return formatter.format(date);
    }

    public String toString(){
        return "Hit{" +
                "id = " + id +
                " ,x = " + x +
                ", y = " + y +
                ", r = " + radius +
                ", time " + time +
                ", was_hitted = " + hitted +
                ", date = " + date + "}";
    }
}

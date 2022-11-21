package com.example.web3test;

import javax.enterprise.context.SessionScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;
@ManagedBean(name = "shot")
@SessionScoped
public class ShotBean implements Serializable {
    private Double x;
    private Double y;
    private Integer radius = 1;
    private String offset;

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

    public String getOffset() {
        return offset;
    }

    public void setOffset(String offset) {
        this.offset = offset;
    }

    @Override
    public String toString(){
        return "ShotBean{" +
                "x = " + x +
                ", y = " + y +
                ", radius = " + radius + "}";
    }


}

package com.example.web3test;

public class ShootCreator {
    public Hit createHit(Double x, Double y, Integer radius){
        Hit hit = new Hit();
        hit.setX(x);
        hit.setY(y);
        hit.setRadius(radius);
        return hit;
    }
}

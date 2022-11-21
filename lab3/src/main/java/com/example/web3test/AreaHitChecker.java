package com.example.web3test;

public class AreaHitChecker {
    public void checkArea(Hit hit){
        try {
            long start = System.nanoTime();
            double x = hit.getX();
            double y = hit.getY();
            double r = hit.getRadius();

            if (x >= 0 && y >= 0) {
                hit.setHitted(y <= (-x + r / 2));
            } else if (x > 0 && y < 0) {
                hit.setHitted(Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2));
            } else if (x < 0 && y > 0) {
                hit.setHitted((y <= (r / 2)) && (x >= -r));
            } else hit.setHitted(false);

            hit.setTime((System.nanoTime() - start) / 1000);
        }catch (NullPointerException e){
            System.out.println("поля не заполнили");
        }
    }
}

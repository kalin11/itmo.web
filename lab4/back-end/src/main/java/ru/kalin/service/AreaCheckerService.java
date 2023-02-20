package ru.kalin.service;

import org.springframework.stereotype.Service;

@Service
public class AreaCheckerService {

    public boolean checkArea(double x, double y, double r){
        if (x >= 0 && y >= 0) {
            return (y <= r) && (x <= (r / 2));
        } else if (x < 0 && y > 0) {
            return y <= (0.5 * x + r / 2);
        } else if (x < 0 && y < 0) {
            return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2);
        }
        return false;
    }

}

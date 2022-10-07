package myTools;

public class AreaHitChecker {
    private Double x;
    private Double y;
    private Double[] radii;

    public AreaHitChecker(Double x, Double y, Double[] radii){
        this.x = x;
        this.y = y;
        this.radii = radii;
    }

    public boolean wasHitted(Double x, Double y, Double radius){
        // 1 четверть
        if (x > 0 && y > 0) {
            return false;
        }
        // 2 четверть
        else if (x <= 0 && y >=0) {
            return y <= (x + radius);
        }
        // 3 четверть
        else if (x <= 0 && y <=0) {
            return (y >= (-radius / 2)) && (x >= -radius);
        }
        //4 четверть
        else {
            return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(radius, 2);
        }
    }



}

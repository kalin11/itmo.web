package myBeanComponent;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.Objects;

public class Data {
    private Double x;
    private Double y;
    private Double[] radii;
    private long time;
    private boolean hitted;
    private Date date;

    public boolean isHitted() {
        return hitted;
    }

    public void setHitted(boolean hitted) {
        this.hitted = hitted;
    }

    public Data(){}

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

    public Double[] getRadius() {
        return radii;
    }

    public void setRadius(Double[] radius) {
        this.radii = radius;
    }

    public long getTime(){
        return this.time;
    }

    public void setTime(long time){
        this.time = time;
    }

    @Override
    public String toString(){
        return "Data{" +
                "x = " + x +
                ", y = " + y +
                ", radius = " + Arrays.toString(radii) + "}";
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Data data = (Data) o;
        return time == data.time && x.equals(data.x) && y.equals(data.y) && Arrays.equals(radii, data.radii);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(x, y, time);
        result = 31 * result + Arrays.hashCode(radii);
        return result;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setTime(Date date){
        DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
        String str = dateFormat.format(date);
    }
}

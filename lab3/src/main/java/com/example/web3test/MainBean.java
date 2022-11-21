package com.example.web3test;

import com.example.web3test.DAO.MyDAO;
import javax.enterprise.context.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.inject.Inject;
import java.io.Serializable;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Collections;
import java.util.List;

@ManagedBean(name="main")
@ApplicationScoped
public class MainBean implements Serializable {
    private String offset = "0";
    private List<Hit> list;
    @Inject
    MyDAO manager;
    public void add(Double x, Double y, Integer r, String offset){
        setOffset(offset);
        Hit hit = new ShootCreator().createHit(x,y,r);
        AreaHitChecker checker = new AreaHitChecker();
        checker.checkArea(hit);
        hit.setDate(ZonedDateTime.now(ZoneId.of("UTC")));
        System.out.println(hit);
        manager.add(hit);
        System.out.println(hit.getHitted());
        System.out.println(hit.getTime() + " мкс");
        System.out.println("x = " + x + ", y = " + y + ", r = " + r);
    }

    public void clearTable(){
        manager.clear();
    }

    public List<Hit> getList(){
        String pattern = "UTC";
        if (Integer.parseInt(getOffset()) > 0) pattern += "+" + getOffset();
        else if (Integer.parseInt(getOffset()) < 0) pattern += getOffset();
        list = manager.getAll();
        Collections.reverse(list);
        for (Hit hit : list){
            if (pattern.equals("UTC")){
                hit.setDate(hit.getDate().withZoneSameInstant(ZoneId.systemDefault()));
            }
            else {
                hit.setDate(hit.getDate().withZoneSameInstant(ZoneId.of(pattern)));
            }
        }
        return list;
    }

    public void setOffset(String offset) {
        this.offset = offset;
    }

    public String getOffset() {
        return offset;
    }
}

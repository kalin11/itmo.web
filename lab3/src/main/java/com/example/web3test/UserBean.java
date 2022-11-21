package com.example.web3test;

import javax.enterprise.context.SessionScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;

@ManagedBean(name = "user")
@SessionScoped
public class UserBean implements Serializable {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String username) {
        this.name = username;
    }

    @Override
    public String toString(){
        return "User{"+
                "name = " + name + "}";
    }
}

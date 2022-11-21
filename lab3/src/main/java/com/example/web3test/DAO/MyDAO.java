package com.example.web3test.DAO;

import com.example.web3test.Hit;

import javax.annotation.ManagedBean;
import java.io.Serializable;

@ManagedBean
public class MyDAO extends AbstractDAO<Hit> implements Serializable {
    protected MyDAO() {
        super(Hit.class);
    }
}

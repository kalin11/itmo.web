package com.example.web3test.DAO;

import java.util.List;

public interface DAO <T>{
    void clear();
    List<T> getAll();
    void add(T entity);
    boolean isEmpty();
}

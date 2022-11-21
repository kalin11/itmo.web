package com.example.web3test.DAO;


import com.example.web3test.Hit;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaDelete;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;
import java.util.List;

public abstract class AbstractDAO<T> implements DAO<T> {
    @PersistenceContext
    EntityManager manager;

    private final Class<T> clazz;
    private List<T> hits;

    protected AbstractDAO(Class<T> clazz){
        this.clazz = clazz;
    }

    @Override
    @Transactional
    public void clear() {
        CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
        CriteriaDelete<T> delete = criteriaBuilder.createCriteriaDelete(clazz);
        delete.from(clazz);
        manager.createQuery(delete).executeUpdate();
    }

    @Override
    public List<T> getAll() {
        CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
        CriteriaQuery<T> query = criteriaBuilder.createQuery(clazz);
        query.select(query.from(clazz));
        hits = manager.createQuery(query).getResultList();
        return hits;
    }

    @Override
    @Transactional
    public void add(T entity) {
        manager.persist(entity);
    }

    @Override
    public boolean isEmpty() {
        List<T> list = getAll();
        return list.isEmpty();
    }
}

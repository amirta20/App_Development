package com.example.demo.service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Reach;
import com.example.demo.repository.ReachRepo;


@Service
public class ReachService {
    @Autowired
    private ReachRepo rr;

    public Reach create(Reach r) {
        return rr.save(r);
    }

    public List<Reach> getAll() {
        return rr.findAll();
    }

    public Reach getById(int userId) {
        return rr.findById(userId).orElse(null);
    }

    public List<Reach> getByRate(String ratings)
    {
        return rr.getReachByRating(ratings);
    }
    public boolean updateDetails(int userId, Reach r) {
        if (!rr.findById(userId).isPresent()) {
            return false;
        }
        try {
            rr.save(r);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean deleteEmployee(int userId) {
        if (!rr.findById(userId).isPresent()) {
            return false;
        }
        rr.deleteById(userId);
        return true;
    }
}


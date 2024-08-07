package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Sign;
import com.example.demo.repository.SignRepo;

@Service
public class SignService {
    @Autowired
    SignRepo sr;
    public Sign create(Sign s) {
        return sr.save(s);
    }

    public List<Sign> getAll() {
        return sr.findAll();
    }

    public Sign getById(int userId) {
        return sr.findById(userId).orElse(null);
    }

    public boolean updateDetails(int userId, Sign s) {
        if (!sr.findById(userId).isPresent()) {
            return false;
        }
        try {
            sr.save(s);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean deleteEmployee(int userId) {
        if (!sr.findById(userId).isPresent()) {
            return false;
        }
        sr.deleteById(userId);
        return true;
    }

    
}


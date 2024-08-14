package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.Sign;
import com.example.demo.repository.SignRepo;

@Service
public class SignService {
    @Autowired
    SignRepo sr;
    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    public Sign create(Sign s) {
        s.setPassword(passwordEncoder.encode(s.getPassword()));
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
    public Optional<Sign> findByEmail(String email) {
        return sr.findByEmail(email);
    }

    public boolean checkPassword(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }

    
    
}


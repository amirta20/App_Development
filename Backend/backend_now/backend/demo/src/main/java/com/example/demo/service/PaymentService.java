package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.model.Payment;
import com.example.demo.repository.PaymentRepo;



@Service

public class PaymentService {
    @Autowired
    PaymentRepo pr;
    public Payment create(Payment p) {
        return pr.save(p);
    }

    public List<Payment> getAll() {
        return pr.findAll();
    }

    public Payment getById(int userId) {
        return pr.findById(userId).orElse(null);
    }

    public boolean deleteDetails(int userId) {
        if(pr.findById(userId)==null)
        {
            return false;
        }
        else
        {
            pr.deleteById(userId);
            return true;
        }
    }
    
}

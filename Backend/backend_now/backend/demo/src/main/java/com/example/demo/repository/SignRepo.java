package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Sign;


@Repository
public interface SignRepo extends JpaRepository<Sign,Integer> {
    
}

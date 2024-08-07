package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Login;
@Repository
public interface LoginRepo extends JpaRepository<Login,Integer>{

    Optional<Login> findByUsername(String username);
} 

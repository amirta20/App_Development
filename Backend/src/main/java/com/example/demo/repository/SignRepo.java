package com.example.demo.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Sign;


@Repository
public interface SignRepo extends JpaRepository<Sign,Integer> {
    Optional<Sign> findByEmail(String email);

    boolean existsByEmail(String email);

    
}

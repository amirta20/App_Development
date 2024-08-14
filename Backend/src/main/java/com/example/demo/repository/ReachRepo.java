package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Reach;

@Repository
public interface ReachRepo extends JpaRepository<Reach, Integer> {
    @Query("select r from Reach r where r.ratings=:ratings")
    List<Reach> getReachByRating(@Param("ratings") String ratings);
}

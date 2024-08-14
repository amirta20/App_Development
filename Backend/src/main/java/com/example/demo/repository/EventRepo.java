package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Event;

@Repository
public interface EventRepo extends JpaRepository<Event,Integer> {

     @Query("select e from Event e where e.location=:location")
    List<Event> getEventbyLocation(@Param("location") String location);
    
}

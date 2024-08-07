package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Event;
import com.example.demo.service.EventService;

@RestController
@RequestMapping("/Event")
public class EventController {
    @Autowired
    EventService es;
     @PostMapping("/details")
    public ResponseEntity<Event> addData(@RequestBody Event c)
    {
        Event obj=es.create(c);
        return new ResponseEntity<>(obj,HttpStatus.CREATED);

    }
   @GetMapping("/getall")
    public ResponseEntity<List<Event>>getAll()
    {
        try{
            List<Event> obj=es.getAll();
            return new ResponseEntity<>(obj,HttpStatus.OK);
        }
        catch(Exception e)
         {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
         }
    }
    @GetMapping("/id/{userId}")
    public ResponseEntity<Event> getById(@PathVariable("userId")int userId)
    {
        try
        {
            return new ResponseEntity<>(es.getByid(userId),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/loc/{location}")
    public ResponseEntity<List<Event>> getLoaction(@PathVariable ("location") String location)
    {
        try{
            List<Event> obj=es.getByLocation(location);
            return new ResponseEntity<>(obj,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/up/{userId}")
    public ResponseEntity<Event> putMethod(@PathVariable("userId") int userId,@RequestBody Event c)
    {
        if(es.updateDetails(userId,c) == true)
        {
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<Boolean> delete(@PathVariable("userId") int userId)
    {
        if(es.deleteEmployee(userId) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
    
}


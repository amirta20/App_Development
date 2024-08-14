package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Event;
import com.example.demo.service.EventService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {
    @Autowired
    EventService es;
     @PostMapping("/manage/details")
    public ResponseEntity<Event> addData(@RequestBody Event c)
    {
        Event obj=es.create(c);
        return new ResponseEntity<>(obj,HttpStatus.CREATED);

    }
   @GetMapping("/manage/getall")
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
    @GetMapping("/manage/Event/id/{eventId}")
    public ResponseEntity<Event> getById(@PathVariable("eventId")int eventId)
    {
        try
        {
            return new ResponseEntity<>(es.getByid(eventId),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/manage/Event/loc/{location}")
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
    @PutMapping("/manage/Event/up/{eventId}")
    public ResponseEntity<Event> putMethod(@PathVariable("eventId") int eventId,@RequestBody Event c)
    {
        if(es.updateDetails(eventId,c) == true)
        {
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/manage/{eventId}")
public ResponseEntity<Boolean> delete(@PathVariable("eventId") int eventId) {
    boolean isDeleted = es.deleteEmployee(eventId);
    if (isDeleted) {
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
    return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
}
}


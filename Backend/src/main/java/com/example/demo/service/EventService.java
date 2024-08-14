package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Event;
import com.example.demo.repository.EventRepo;



@Service
public class EventService {
    @Autowired
    EventRepo er;
    
    public Event create(Event c)
    {
        return er.save(c);
    }
    public List<Event> getAll()
    {
        return er.findAll();
    }
    public Event getByid(int eventId)
    {
        return er.findById(eventId).orElse(null);
    }
    public List<Event> getByLocation(String location)
    {
        return er.getEventbyLocation(location);
    }
    public boolean updateDetails(int eventId,Event c)
    {
        if(er.findById(eventId)==null)
        {
            return false;
        }
        try{
            er.save(c);
        }
        catch(Exception e)
        {
            return false;
        }
        return true;
    }
    public boolean deleteEmployee(int eventId) {
        if (!er.existsById(eventId)) {
            return false;
        }
        er.deleteById(eventId);
        return true;
}
}

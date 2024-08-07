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
    public Event getByid(int userId)
    {
        return er.findById(userId).orElse(null);
    }
    public List<Event> getByLocation(String location)
    {
        return er.getEventbyLocation(location);
    }
    public boolean updateDetails(int userId,Event c)
    {
        if(er.findById(userId)==null)
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
    public boolean deleteEmployee(int userId)
        {
            if(this.getByid(userId) == null)
            {
                return false;
            }
            er.deleteById(userId);
            return true;
        }

}

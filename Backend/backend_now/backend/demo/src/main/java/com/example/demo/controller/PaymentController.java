package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Payment;
import com.example.demo.service.PaymentService;

@RestController
@RequestMapping("/pay")
public class PaymentController {
    @Autowired
    PaymentService ps;
    @PostMapping("/details")
    public ResponseEntity<Payment> adddetails(@RequestBody Payment p)
    {
        Payment pay=ps.create(p);
        return new ResponseEntity<>(pay,HttpStatus.CREATED);
    }
    @GetMapping("/getall")
    public ResponseEntity<List<Payment>> getAll()
    {
        try
        {
            List<Payment> pay=ps.getAll();
            return new ResponseEntity<>(pay,HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);   
        }
        
    }
    @GetMapping("/up/{userId}")
    public ResponseEntity<Payment> get(@PathVariable("userId") int userId)
    {
        try
        {
            Payment pay=ps.getById(userId);
            return new ResponseEntity<>(pay,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<Boolean> deleteMethod(@PathVariable( "userId" )int userId)
    {
        if(ps.deleteDetails(userId)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);

        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);

    }
}

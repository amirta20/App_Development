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
import com.example.demo.model.Login;
import com.example.demo.service.LoginService;

@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    LoginService ls;
    @PostMapping("/login/add")
    public ResponseEntity<Login> addLogin(@RequestBody Login l) {
        Login obj = ls.create(l);
        String username = obj.getUsername(); // Ensure this method exists in Login class
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }
    @GetMapping("/getadd")
    public ResponseEntity<List<Login>> getAll()
    {
        try{
            return new ResponseEntity<>(ls.getAll(),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/id/{userId}")
    public ResponseEntity<Login> getId(@PathVariable ("userId") int userId)
    {
         try
         {
            return new ResponseEntity<>(ls.getById(userId),HttpStatus.OK);
         }
         catch(Exception e)
         {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
         }
    }
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<Boolean> deleteMethod(@PathVariable( "userId" )int userId)
    {
        if(ls.deleteLogin(userId)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);

        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);

    }

    
}

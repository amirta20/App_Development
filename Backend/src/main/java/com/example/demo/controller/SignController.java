package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Sign;
import com.example.demo.service.SignService;

@RestController
@RequestMapping("/sign")
public class SignController {
    @Autowired
    SignService ss;
    @CrossOrigin(origins = "http://localhost:3000") 
    @PostMapping("/details")
    public ResponseEntity<Sign> addData(@RequestBody Sign s) {
        Sign obj = ss.create(s);
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Sign loginRequest) {
        Optional<Sign> existingUser = ss.findByEmail(loginRequest.getEmail().toLowerCase());
    
        if (existingUser.isPresent()) {
            Sign user = existingUser.get();
            if (ss.checkPassword(loginRequest.getPassword(), user.getPassword())) {
                // if (!user.getRole().equalsIgnoreCase(loginRequest.getRole())) {
                //     return new ResponseEntity<>("Incorrect role selected", HttpStatus.FORBIDDEN);
                // }
    
                String generatedKey = UUID.randomUUID().toString();
                return new ResponseEntity<>(generatedKey, HttpStatus.CREATED);
    
            } else {
                return new ResponseEntity<>("Incorrect password", HttpStatus.UNAUTHORIZED);
            }
        } else {
            return new ResponseEntity<>("Email not found", HttpStatus.NOT_FOUND);
        }
    }
    @CrossOrigin(origins = "http://localhost:3000") 

    @GetMapping("/getall")
    public ResponseEntity<List<Sign>> getAll() {
        try {
            List<Sign> obj = ss.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
    @CrossOrigin(origins = "http://localhost:3000") 

    @GetMapping("/id/{userId}")
    public ResponseEntity<Sign> getById(@PathVariable("userId") int userId) {
        Sign sign = ss.getById(userId);
        if (sign != null) {
            return new ResponseEntity<>(sign, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
    @CrossOrigin(origins = "http://localhost:3000") 

    @DeleteMapping("/del/{userId}")
    public ResponseEntity<Void> delete(@PathVariable("userId") int userId) {
        if (ss.deleteEmployee(userId)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

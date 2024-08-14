package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Reach;
import com.example.demo.service.ReachService;

@RestController
@RequestMapping("/reachus")
@CrossOrigin(origins = "http://localhost:3000") 
public class ReachController {
    @Autowired
    private ReachService rs;

    @PostMapping("/details")
    public ResponseEntity<Reach> addData(@RequestBody Reach r) {
        Reach obj = rs.create(r);
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Reach>> getAll() {
        try {
            List<Reach> obj = rs.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/id/{userId}")
    public ResponseEntity<Reach> getById(@PathVariable("userId") int userId) {
        Reach reach = rs.getById(userId);
        if (reach != null) {
            return new ResponseEntity<>(reach, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/rate/{ratings}")
    public ResponseEntity<List<Reach>> getRate(@PathVariable("ratings") String ratings) {
        try {
            List<Reach> obj = rs.getByRate(ratings);
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/up/{userId}")
    public ResponseEntity<Reach> update(@PathVariable("userId") int userId, @RequestBody Reach r) {
        if (rs.updateDetails(userId, r)) {
            return new ResponseEntity<>(r, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/del/{userId}")
    public ResponseEntity<Void> delete(@PathVariable("userId") int userId) {
        if (rs.deleteEmployee(userId)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

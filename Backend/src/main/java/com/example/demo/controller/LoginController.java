// package com.example.demo.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;

// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;
// import com.example.demo.model.Sign;
// import com.example.demo.service.SignService;



// @RestController
// // @RequestMapping("/login")
// public class LoginController {
//     // @Autowired
//     // LoginService ls;
//     @Autowired
//     private SignService signService;

//     @CrossOrigin(origins = "http://localhost:3000")
//     @PostMapping("/login")
//     public ResponseEntity<String> validateLogin(@RequestBody Sign loginDetails) {
//         System.out.println("Received login request: " + loginDetails.getEmail() + ", " + loginDetails.getPassword());
//         Sign user = signService.findByEmail(loginDetails.getEmail());
//         if (user != null && user.getPassword().equals(loginDetails.getPassword())) {
//             return new ResponseEntity<>("Login successful", HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>("Invalid Email or password", HttpStatus.UNAUTHORIZED);
//         }
//     }
    // @CrossOrigin(origins = "http://localhost:3000") 
    // @PostMapping("/add")
    // public ResponseEntity<Login> addLogin(@RequestBody Login l) {
    //     Login obj = ls.create(l);
    //     return new ResponseEntity<>(obj, HttpStatus.CREATED);
    // }
    // @CrossOrigin(origins = "http://localhost:3000") 

    // @GetMapping("/getadd")
    // public ResponseEntity<List<Login>> getAll()
    // {
    //     try{
    //         return new ResponseEntity<>(ls.getAll(),HttpStatus.OK);
    //     }
    //     catch(Exception e)
    //     {
    //         return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    //     }
    // }
    // @CrossOrigin(origins = "http://localhost:3000") 

    // @GetMapping("/id/{userId}")
    // public ResponseEntity<Login> getId(@PathVariable ("userId") int userId)
    // {
    //      try
    //      {
    //         return new ResponseEntity<>(ls.getById(userId),HttpStatus.OK);
    //      }
    //      catch(Exception e)
    //      {
    //         return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    //      }
    // }
    // @CrossOrigin(origins = "http://localhost:3000") 

    // @DeleteMapping("/delete/{userId}")
    // public ResponseEntity<Boolean> deleteMethod(@PathVariable( "userId" )int userId)
    // {
    //     if(ls.deleteLogin(userId)==true)
    //     {
    //         return new ResponseEntity<>(true,HttpStatus.OK);

    //     }
    //     return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);

    // }  


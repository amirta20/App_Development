// package com.example.demo.service;

// import java.util.List;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.model.Login;
// import com.example.demo.model.Sign;
// import com.example.demo.repository.SignRepo;

// @Service
// public class LoginService {
//       @Autowired
//     private SignRepo signRepo; // Use SignRepo for login validation

//     public Sign validateLogin(String email, String password) {
//         Sign user = signRepo.findByEmail(email);
//         if (user != null && user.getPassword().equals(password)) {
//             return user;
//         }
//         return null;
//     }
//     // @Autowired
//     // LoginRepo lr;

//     // public Login create(Login l) {
//     //     return lr.save(l);
//     // }

//     // public Login getById(int userId) {
//     //     return lr.findById(userId).orElse(null);
//     // }

//     // public List<Login> getAll() {
//     //     return lr.findAll();
//     // }

//     // public Boolean updateLogin(int userId, Login l) {
//     //     if (lr.findById(userId).isEmpty()) {
//     //         return false;
//     //     }
//     //     try {
//     //         lr.save(l);
//     //     } catch (Exception e) {
//     //         return false;
//     //     }
//     //     return true;
//     // }

//     // public boolean deleteLogin(int userId) {
//     //     if (this.getById(userId) == null) {
//     //         return false;
//     //     }
//     //     lr.deleteById(userId);
//     //     return true;
//     // }

//  }

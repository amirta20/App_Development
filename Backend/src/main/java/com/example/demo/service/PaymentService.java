// package com.example.demo.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import com.example.demo.model.Payment;
// import com.example.demo.repository.PaymentRepo;

// import java.util.List;

// @Service
// public class PaymentService {

//     @Autowired
//     private PaymentRepo paymentRepo;

//     public Payment create(Payment payment) {
//         return paymentRepo.save(payment);
//     }

//     public List<Payment> getAll() {
//         return paymentRepo.findAll();
//     }

//     public Payment getById(int userId) {
//         return paymentRepo.findById(userId).orElse(null);
//     }

//     public boolean updateDetails(int userId, Payment payment) {
//         if (paymentRepo.existsById(userId)) {
//             Payment existingPayment = paymentRepo.findById(userId).orElse(null);
//             if (existingPayment != null) {
//                 // existingPayment.setReceived(payment.getReceived());
//                 paymentRepo.save(existingPayment);
//                 return true;
//             }
//         }
//         return false;
//     }

//     public boolean deleteDetails(int userId) {
//         if (paymentRepo.existsById(userId)) {
//             paymentRepo.deleteById(userId);
//             return true;
//         }
//         return false;
//     }
// }

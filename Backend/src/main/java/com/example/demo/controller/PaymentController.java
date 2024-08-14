package com.example.demo.controller;

import com.example.demo.model.Payment;
import com.example.demo.service.RazorpayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Adjust origin as necessary
public class PaymentController {

    @Autowired
    private RazorpayService razorpayService;

    @PostMapping("/paymentadmin/details")
    public ResponseEntity<Map<String, Object>> createOrder(@RequestBody Map<String, Object> data) {
        
        try {
            int amount = (int) data.get("amount");
            String currency = "INR";
            Map<String, Object> response = razorpayService.createOrder(amount, currency);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @PostMapping("/paymentadmin/verify")
    public ResponseEntity<Map<String, Boolean>> verifyPayment(@RequestBody Map<String, String> data) {
        String paymentId = data.get("paymentId");
        boolean isValid = razorpayService.verifyPayment(paymentId);
        Map<String, Boolean> response = Map.of("verified", isValid);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/paymentadmin/save")
    public ResponseEntity<Payment> savePaymentDetails(@RequestBody Payment payment) {
    try {
        System.out.println("Received Payment: " + payment);  // Log the received payment
        Payment savedPayment = razorpayService.savePaymentDetails(payment);
        System.out.println("Saved Payment: " + savedPayment);  // Log the saved payment
        return ResponseEntity.ok(savedPayment);
    } catch (Exception e) {
        e.printStackTrace(); // Log the exception
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
}
@GetMapping("/paymentadmin/all")
    public ResponseEntity<List<Payment>> getAllPayments() {
        try {
            List<Payment> payments = razorpayService.getAllPayments();
            return ResponseEntity.ok(payments);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}

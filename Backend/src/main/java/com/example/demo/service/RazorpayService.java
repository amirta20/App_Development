package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import com.example.demo.model.Payment;
import com.example.demo.repository.PaymentRepo;
import com.example.demo.util.HMACUtil;

import org.springframework.http.*;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RazorpayService {

    @Autowired
    private PaymentRepo pr;


    @Value("${razorpay.key.id}")
    private String razorpayKey;

    @Value("${razorpay.key.secret}")
    private String razorpaySecret;

    private RestTemplate restTemplate = new RestTemplate();

    public Map<String, Object> createOrder(int amount, String eventName) throws Exception {
        String url = "https://api.razorpay.com/v1/orders";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBasicAuth(razorpayKey, razorpaySecret);

        Map<String, Object> request = new HashMap<>();
        request.put("amount", amount); // amount in paise
        request.put("currency", "INR");
        request.put("receipt", "receipt#1");
        request.put("payment_capture", 1);

        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(request, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(url, requestEntity, String.class);

        // Check if response is successful
        if (response.getStatusCode() == HttpStatus.OK || response.getStatusCode() == HttpStatus.CREATED) {
            JSONObject jsonResponse = new JSONObject(response.getBody());
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("orderId", jsonResponse.getString("id"));
            responseMap.put("currency", jsonResponse.getString("currency"));
            responseMap.put("amount", jsonResponse.getLong("amount"));
            

            return responseMap;
        } else {
            throw new Exception("Failed to create order with Razorpay");
        }
    }

    public boolean verifyPayment(String paymentId) {
        try {
            // Simulated verification for paymentId only
            if (paymentId != null && !paymentId.isEmpty()) {
                // Simulated successful verification
                return true; // Assuming the paymentId is valid
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
    }

    public Payment savePaymentDetails(Payment payment) {
        return pr.save(payment);
    }

    public List<Payment> getAllPayments() {
        return pr.findAll();
    }
   
}

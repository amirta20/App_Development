package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Reach {
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
     int userId;

   
     String name;

    
     String emailId;

  
     String mobileNo;

     String reviews;
    String ratings;

    public Reach() {}

    public Reach(int userId, String name, String emailId, String mobileNo, String ratings, String reviews) {
        this.userId = userId;
        this.name = name;
        this.emailId = emailId;
        this.mobileNo = mobileNo;
        this.ratings = ratings;
        this.reviews = reviews;
    }

    // Getters and Setters
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getRatings() {
        return ratings;
    }

    public void setRatings(String ratings) {
        this.ratings = ratings;
    }

    public String getReviews() {
        return reviews;
    }

    public void setReviews(String reviews) {
        this.reviews = reviews;
    }
}
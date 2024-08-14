package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventId;
    private String eventName;
    private String name;
    private String attendees;
    private String emailId;
    private String location;
    private String venue;
    private String food;
    private String foodType;
    private String theme;
    private String date;
    private String time;
    private String additionalDetails;
    
    public Event() {}
    
    public Event(int eventId, String eventName, String location, String venue,
    String food, String foodType, String theme, String date, String time, String additionalDetails,String attendees,String emailId,String name) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.location = location;
        this.venue = venue;
        this.food = food;
        this.foodType = foodType;
        this.theme = theme;
        this.date = date;
        this.time = time;
        this.additionalDetails = additionalDetails;
        this.attendees=attendees;
        this.emailId=emailId;
        this.name=name;
        
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String getContactNo() {
        return emailId;
    }

    public void setContactNo(String emailId) {
        this.emailId = emailId;
    }

    public int getEventId() {
        return eventId;
    }
    
    public void setEventId(int eventId) {
        this.eventId = eventId;
    }
    
    
    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }
    
    public String getLocation() {
        return location;
    }
    
    public void setLocation(String location) {
        this.location = location;
    }
    
    public String getVenue() {
        return venue;
    }
    public String getAttendees() {
        return attendees;
    }

    public void setAttendees(String attendees) {
        this.attendees = attendees;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public String getFoodType() {
        return foodType;
    }

    public void setFoodType(String foodType) {
        this.foodType = foodType;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getAdditionalDetails() {
        return additionalDetails;
    }

    public void setAdditionalDetails(String additionalDetails) {
        this.additionalDetails = additionalDetails;
    }

    // public Payment getPayment() {
    //     return payment;
    // }

    // public void setPayment(Payment payment) {
    //     this.payment = payment;
    //     if (payment != null) {
    //         payment.setEvent(this);
    //     }
    // }
}

package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventId;
    private String name;
    private String contactNo;
    private String eventName;
    private String location;
    private String venue;
    private String food;
    private String foodType;
    private String theme;
    private Date date;
    private Time time;
    private String additionalDetails;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "userId")
    private Login login;

    @OneToOne(mappedBy = "event", cascade = CascadeType.ALL)
    @JsonBackReference
    private Payment payment;

    public Event() {}

    public Event(int eventId, String name, String contactNo, String eventName, String location, String venue,
                 String food, String foodType, String theme, Date date, Time time, String additionalDetails, Login login) {
        this.eventId = eventId;
        this.name = name;
        this.contactNo = contactNo;
        this.eventName = eventName;
        this.location = location;
        this.venue = venue;
        this.food = food;
        this.foodType = foodType;
        this.theme = theme;
        this.date = date;
        this.time = time;
        this.additionalDetails = additionalDetails;
        this.login = login;
    }

    // Getters and Setters
    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public String getAdditionalDetails() {
        return additionalDetails;
    }

    public void setAdditionalDetails(String additionalDetails) {
        this.additionalDetails = additionalDetails;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
        if (payment != null) {
            payment.setEvent(this);
        }
    }
}

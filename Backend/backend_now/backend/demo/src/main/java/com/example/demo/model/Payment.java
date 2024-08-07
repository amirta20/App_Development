package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int userId;
    String card_holder;
    String card_no;
    String expiry_date;
    @OneToOne
    @JsonManagedReference
    @JoinColumn(name = "userId")
    private Event event;
    public Payment()
    {
        
    }
    public Payment(String card_holder, String card_no, String expiry_date, Event event) {
        this.card_holder = card_holder;
        this.card_no = card_no;
        this.expiry_date = expiry_date;
        this.event = event;
    }
    public String getCard_holder() {
        return card_holder;
    }
    public void setCard_holder(String card_holder) {
        this.card_holder = card_holder;
    }
    public String getCard_no() {
        return card_no;
    }
    public void setCard_no(String card_no) {
        this.card_no = card_no;
    }
    public String getExpiry_date() {
        return expiry_date;
    }
    public void setExpiry_date(String expiry_date) {
        this.expiry_date = expiry_date;
    } 
    
    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}
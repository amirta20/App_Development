package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int loginId;
    private String username;
    private String password;
    public Login()
    {

    }
    public Login(int loginId, String username, String password) {
        this.loginId = loginId;
        this.username = username;
        this.password = password;
    }
    public int getLoginId() 
    {
        return loginId;
    }
    public void setLoginId(int loginId) 
    {
        this.loginId = loginId;
    }
    public String getUsername() 
    {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class Sign {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String fName,lName;
    private String email;
    private String password;
    public Sign()
    {
        
    }

    public Sign(int userId, String fName, String lName, String email, String password) {
        this.userId = userId;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;
    }
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // public Login getLogin() {
    //     return login;
    // }

    // public void setLogin(Login login) {
    //     this.login = login;
    //     if (login != null) {
    //         login.setRegister(this);
    //     }
    // }
    // public Collection<String> getRoles() {
    //     return roles;
    // }

    // public void setRoles(Collection<String> roles) {
    //     this.roles = roles;
    // }
}
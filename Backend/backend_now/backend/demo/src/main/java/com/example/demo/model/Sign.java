package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class Sign {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String fName,lName;
    private String emailId;
    private String password;

    // @OneToOne(mappedBy = "sign", cascade = CascadeType.ALL)
    // @JsonBackReference
    // private Login login;


    public Sign(int userId, String fName, String lName, String emailId, String password) {
        this.userId = userId;
        this.fName = fName;
        this.lName = lName;
        this.emailId = emailId;
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

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
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
}
package com.bianchi.server.model;

import jakarta.persistence.*;

import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "booking_name", nullable = false)
    private String name;

    @Column(name = "booking_date", nullable = false)
    private Date date;

    @Column(name = "booking_time", nullable = false)
    private Time time;

    @Column(name = "booking_phone", nullable = false)
    private String phone;

    public Booking() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}

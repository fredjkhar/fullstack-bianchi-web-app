package com.bianchi.server.controller;

import com.bianchi.server.model.Booking;
import com.bianchi.server.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/post")
    public String saveBooking(@RequestBody Booking booking) {
        bookingService.saveBooking(booking);
        return "Message saved successfully";
    }

    @GetMapping("/getAll")
    public List<Booking> getAllMessages() {
        return bookingService.getAllBookings();
    }
}

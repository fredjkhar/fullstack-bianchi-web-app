package com.bianchi.server.service;

import com.bianchi.server.model.Booking;

import java.util.List;

public interface BookingService {
    public Booking saveBooking(Booking booking);
    public List<Booking> getAllBookings();
}

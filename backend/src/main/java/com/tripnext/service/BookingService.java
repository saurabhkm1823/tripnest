package com.tripnext.service;

import com.tripnext.model.Booking;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class BookingService {
    private final Map<Long, Booking> bookings = new HashMap<>();
    private Long idCounter = 1L;

    public List<Booking> getAllBookings() {
        return new ArrayList<>(bookings.values());
    }

    public Booking createBooking(Booking booking) {
        booking.setId(idCounter++);
        bookings.put(booking.getId(), booking);
        return booking;
    }

    public void cancelBooking(Long id) {
        bookings.remove(id);
    }
}

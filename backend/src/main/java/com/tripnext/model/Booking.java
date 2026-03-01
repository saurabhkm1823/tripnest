package com.tripnext.model;

public class Booking {
    private Long id;
    private String customerName;
    private String hotelName;
    private String location;

    public Booking() {}

    public Booking(Long id, String customerName, String hotelName, String location) {
        this.id = id;
        this.customerName = customerName;
        this.hotelName = hotelName;
        this.location = location;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getHotelName() { return hotelName; }
    public void setHotelName(String hotelName) { this.hotelName = hotelName; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
}

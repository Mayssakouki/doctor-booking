import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '../config.js';


export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
 const [bookings, setBookings] = useState([]);

 useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/api/bookings`);
        if (response.status !== 200) {
          throw new Error('Failed to fetch bookings');
        }
        setBookings(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
 }, []);

 return (
    <BookingContext.Provider value={{ bookings, setBookings }}>
      {children}
    </BookingContext.Provider>
 );
};
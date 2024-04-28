import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {API_ENDPOINT} from '../config.js'
import DoctorAvailability from '../pages/DoctorAvailibilty.jsx';



const dashboardStyle = {
  maxWidth: '700px', // Augmentez cette valeur pour une taille plus grande
  padding: '20px', // Ajustez le padding selon vos besoins
 };



const PatientDashboard = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingStatus, setBookingStatus] = useState(null);

  
  const handleDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setAppointmentTime(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_ENDPOINT}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          appointmentDate,
          appointmentTime,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }
      setBookingStatus('success');
      // Clear form fields after successful booking
      setFirstName('');
      setLastName('');
      setEmail('');
      setAppointmentDate('');
      setAppointmentTime('');
    } catch (error) {
      console.error('Error booking appointment:', error);
      setBookingStatus('error');
    }
  };

  return (
    <div style={dashboardStyle}  className="mx-auto mt-8 border rounded-lg shadow-md">
    <h2 className="mb-4 text-2xl font-semibold">Patient Dashboard</h2>
    <div className="mb-6">
      <Link to="/bookings" className="px-4 py-2 mr-4 text-white bg-blue-500 rounded-md">
        My Appointments
      </Link>
    </div>
    <div className="flex" style={{ gap: '20px' }}>
      <div className="w-1/2">
        <h3 className="mb-4 text-lg font-semibold">Schedule an Appointment</h3>
        <form onSubmit={handleAppointmentSubmit}>
          <div className="flex items-center mb-4">
            <label htmlFor="firstName" className="mr-4">First Name :</label>
            <input type="text" required id="firstName" value={firstName} onChange={handleFirstNameChange} className="px-2 py-1 border rounded-md" />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="lastName" className="mr-4">Last Name :</label>
            <input type="text" required id="lastName" value={lastName} onChange={handleLastNameChange} className="px-2 py-1 border rounded-md" />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="email" className="mr-4">Email :</label>
            <input type="email" required id="email" value={email} onChange={handleEmailChange} className="px-2 py-1 border rounded-md" />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="date" className="mr-4">Date :</label>
            <input type="date" required id="date" value={appointmentDate} onChange={handleDateChange} className="px-2 py-1 border rounded-md" />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="time" className="mr-4">Time :</label>
            <input type="time" required id="time" value={appointmentTime} onChange={handleTimeChange} className="px-2 py-1 border rounded-md" />
          </div>
         
          <button type="submit" className="px-4 py-2 mr-4 text-white bg-blue-500 rounded-md">Book</button>
         
        </form>
      </div>
      <div className="w-1/2 ml-4 ">
 <DoctorAvailability />
</div>
    </div>
  </div>
);
};

export default PatientDashboard;


// fel code hedha nahit fazet l bouton link to="/bookings"
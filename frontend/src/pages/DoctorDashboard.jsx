import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { authContext } from '../context/AuthContext';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments when the component mounts
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const doctorId = "6612a547b4029af332628f0c"; 
      const response = await axios.get(`${API_ENDPOINT}/api/bookings?doctorId=${doctorId}`); // Replace '/api/appointments' with your backend API endpoint
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleAcceptAppointment = async (appointmentId) => {
    try {
      // Logic to accept appointment
      // Example: await axios.put(/api/appointments/${appointmentId}/accept);
      console.log('Appointment accepted:', appointmentId);
    } catch (error) {
      console.error('Error accepting appointment:', error);
    }
  };

  const handleRejectAppointment = async (appointmentId) => {
    try {
      // Logic to reject appointment
      // Example: await axios.put(/api/appointments/${appointmentId}/reject);
      console.log('Appointment rejected:', appointmentId);
    } catch (error) {
      console.error('Error rejecting appointment:', error);
    }
  };

  

  return (
    <div className="max-w-3xl p-8 mx-auto mt-8 border rounded-lg shadow-md">
    <h2 className="mb-4 text-2xl font-semibold">Doctor Dashboard</h2>
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Patient Name
          </th>
          <th className="px-4 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Appointment Date
          </th>
          <th className="px-4 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => (
          <tr key={appointment.id} className="border-b border-gray-200">
            <td className="px-4 py-3 text-gray-900 whitespace-nowrap">{appointment.patientName}</td>
            <td className="px-4 py-3 text-gray-900 whitespace-nowrap">{appointment.appointmentDate}</td>
            <td className="px-4 py-3 text-gray-900 whitespace-nowrap">
              <button
                onClick={() => handleAcceptAppointment(appointment.id)}
                className="px-3 py-1 mr-2 text-sm text-white bg-green-500 rounded-md"
              >
                Accept
              </button>
              <button
               onClick={() => handleRejectAppointment(appointment.id)}
                className="px-3 py-1 text-sm text-white bg-red-500 rounded-md"
              >
                Reject
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default DoctorDashboard;
import React, { useState, useEffect, useContext } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '../config.js';
import { authContext } from '../context/AuthContext.jsx';
import axios from 'axios'; // Importez axios
import BookingUpdateForm from './BookingUpdateForm.jsx'; // Importez le composant de formulaire de mise à jour

const MyBookingsPage = () => {
  const { user } = useContext(authContext);
  const loggedInPatientId = user ? user._id : null;
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate(); // Ajout de useNavigate


  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/api/bookings`);
        if (response.status !== 200) {
          throw new Error('Failed to fetch bookings');
        }
        
        const data = response.data.data;
        // Filtrer les réservations pour n'afficher que celles associées à l'utilisateur connecté
        const userBookings = data.filter(booking => booking.patientId === loggedInPatientId);
        // Formater les dates pour les afficher au format "YYYY-MM-DD"
        userBookings.forEach(booking => {
          booking.date = new Date(booking.date).toISOString().split('T')[0];
        });
        
        setBookings(userBookings);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, [loggedInPatientId]);

  

  const handleEditBooking = async (bookingId) => {
    try {
      // Récupérer les nouvelles données de réservation à partir d'un formulaire ou d'un état local
      const newBookingData = {
        // données de mise à jour de la réservation
      };

      // Envoyez une requête PUT pour mettre à jour la réservation avec l'ID donné
      const response = await axios.put(`${API_ENDPOINT}/api/bookings/${bookingId}`, newBookingData);
      if (response.status !== 200) {
        throw new Error('Failed to update booking');
      }
      // Mettez à jour l'état des réservations localement si nécessaire
      // (par exemple, en re-récupérant les réservations mises à jour)
      // ...
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      const confirmation = window.confirm("Are you sure ?");
      if (!confirmation) {
        return; // Annulation de l'opération si l'utilisateur choisit "Annuler" dans l'alerte
      }
        const response = await axios.delete(`${API_ENDPOINT}/api/bookings/${bookingId}`);
      if (response.status !== 200) {
        throw new Error('Failed to cancel booking');
      }
      // Mettre à jour l'état local en supprimant le rendez-vous annulé de la liste
    setBookings(prevBookings => prevBookings.filter(booking => booking._id !== bookingId));
      // Mettez à jour l'état des réservations localement si nécessaire
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="max-w-4xl p-8 mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">My Appointments</h2>
        <div>
          <Link to="/dashboard" className="px-4 py-2 mr-4 text-white bg-blue-500 rounded-md">Back</Link>
          <Link to="/" className="px-4 py-2 text-white bg-red-500 rounded-md">Logout</Link>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-400">Date</th>
            <th className="px-4 py-2 border border-gray-400">Time</th>
            <th className="px-4 py-2 border border-gray-400">Status</th>
            <th className="px-4 py-2 border border-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td className="px-4 py-2 border border-gray-400">{booking.date}</td>
              <td className="px-4 py-2 border border-gray-400">{booking.time}</td>
              <td className="px-4 py-2 border border-gray-400">{booking.status === 'Accepted' ? 'Accepted' : booking.status === 'Rejected' ? 'Rejected' : 'Pending'}</td>
              <td className="px-4 py-2 border border-gray-400 px-30">
              <Link to={`/api/update/${booking._id}`} state={{ date: booking.date, time: booking.time }}>
                <button onClick={() => handleEditBooking(booking._id)} className="px-3 py-1 mr-2 text-white bg-blue-500 rounded-md">Update</button>
               </Link>
                <button onClick={() => handleCancelBooking(booking._id)} className="px-3 py-1 text-white bg-red-500 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingsPage;
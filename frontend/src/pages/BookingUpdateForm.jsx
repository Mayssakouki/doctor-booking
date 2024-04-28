import React, { useState } from 'react';
import axios from 'axios';
import { useParams , useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '../config.js';





  const BookingUpdateForm = () => {
    const { id } = useParams();
    const [updatedDate, setUpdatedDate] = useState('');
    const [updatedTime, setUpdatedTime] = useState('');
    const navigate = useNavigate(); // Ajout de useNavigate
  
    const handleUpdatedDateChange = (e) => {
      setUpdatedDate(e.target.value);
    };
  
    const handleUpdatedTimeChange = (e) => {
      setUpdatedTime(e.target.value);
    };
  
    const handleUpdateBooking = async (e) => {
      e.preventDefault();
      try {
        if (!updatedDate || !updatedTime) {
          alert('Veuillez saisir à la fois la date et l\'heure');
          return;
        }
  
        const response = await axios.put(`${API_ENDPOINT}/api/bookings/${id}`, {
          date: updatedDate,
          time: updatedTime,
        });
        if (response.status === 200) {
          alert('Rendez-vous mis à jour avec succès');
          navigate('/bookings'); // Redirection vers la page des réservations
        } else {
          throw new Error('Échec de la mise à jour du rendez-vous');
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour du rendez-vous:', error);
      }
    };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleUpdateBooking} className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date">
            Date
          </label>
          <input
            id="date"
            type="date"
            value={updatedDate}
            onChange={handleUpdatedDateChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="time">
            Heure
          </label>
          <input
            id="time"
            type="time"
            value={updatedTime}
            onChange={handleUpdatedTimeChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
           Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingUpdateForm;
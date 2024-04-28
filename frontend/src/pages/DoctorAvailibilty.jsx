// DoctorAvailability.js
import React from 'react';

const DoctorAvailability = () => {
 // Liste des disponibilités du docteur
 const availabilities = [
    'Lundi 9:00 - 17:00',
    'Mardi 9:00 - 17:00',
    'Mercredi 9:00 - 17:00',
    'Jeudi 9:00 - 17:00',
    'Vendredi 9:00 - 17:00',
 ];

 return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">availability of doctor</h3>
      <ul>
        {availabilities.map((availability, index) => (
          <li key={index} className="mb-2">
            {availability}
          </li>
        ))}
      </ul>
    </div>
 );
};

export default DoctorAvailability;

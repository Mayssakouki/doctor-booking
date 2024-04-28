// Reviews.jsx
import React from 'react';
//import { Carousel } from "@material-tailwind/react";

// Exemple de données pour les avis
const reviews = [
 {
    id: 1,
    name: 'Jean Dupont',
    rating: 5,
    comment: 'Très professionnel et efficace.',
    profileImage: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 },
 {
    id: 2,
    name: 'Marie Durand',
    rating: 4,
    comment: 'Bon service.',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 },
 {
    id: 3,
    name: 'Paul Martin',
    rating: 5,
    comment: 'Excellente expérience, je recommande vivement.',
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 },
 {
    id: 4,
    name: 'Claire Dupont',
    rating: 4,
    comment: 'J"adore.',
    profileImage: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 },
 // Ajoutez plus d'avis ici
];

const Reviews = () => {
 return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-3xl font-bold text-center">Reviews</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 bg-white rounded-md shadow-md">
            <div className="flex items-center mb-2">
              <img src={review.profileImage} alt={`Avis de ${review.name}`} className="w-16 h-16 mr-4 rounded-full" />
              <div>
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <div className="flex items-center mb-2">
                 {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`text-sm ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
 );
};

export default Reviews;

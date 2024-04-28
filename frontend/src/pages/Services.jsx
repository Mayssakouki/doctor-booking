// Services.jsx
import React from 'react';

// Exemple de données pour les services
const services = [
 {
    id: 1,
    title: 'Facilité de prise de rendez-vous',
    description: 'Une interface simple et intuitive pour planifier vos rendez-vous.',
    image: 'https://media.istockphoto.com/id/1689003176/fr/photo/technologie-m%C3%A9dicale-m%C3%A9decin-tenant-lic%C3%B4ne-de-la-sant%C3%A9-avec-adn-dossier-m%C3%A9dical-%C3%A9lectronique.webp?b=1&s=170667a&w=0&k=20&c=rhaY86ujf-OjqiyW2sGyHVECb7HLWWIbaLT4c8gtN8Y=',
 },
 {
    id: 2,
    title: 'Service client réactif',
    description: 'Un service client disponible 24/7 pour répondre à vos questions et préoccupations.',
    image: 'https://media.istockphoto.com/id/1437830105/fr/photo/plan-coup%C3%A9-dune-infirmi%C3%A8re-tenant-la-main-de-son-patient-%C3%A2g%C3%A9-apporter-son-soutien-m%C3%A9decin.webp?b=1&s=170667a&w=0&k=20&c=YVDeshBoS1akUIZFmlDFc-nQAqdYoZKJ5QxKDrVaLJ0=',
 },
 // Ajoutez plus de services ici
];

const Services = () => {
 return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-3xl font-bold text-center">Our services</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="p-4 bg-white rounded-md shadow-md">
            <img src={service.image} alt={service.title} className="object-cover w-full h-48 mb-4 rounded-md" />
            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
 );
};

export default Services;

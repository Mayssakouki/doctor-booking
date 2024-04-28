//import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import Contact from '../pages/Contact';
import {Routes,Route} from 'react-router-dom';
import Reviews from '../pages/Reviews';
import PatientDashboard from '../pages/PatientDashboard.jsx'
import MyBookingsPage from '../pages/MyBookingsPage.jsx';
import DoctorDashboard from '../pages/DoctorDashboard.jsx';  
import BookingUpdateForm from '../pages/BookingUpdateForm.jsx';







const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Reviews" element={<Reviews/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route  path="/register" element={<SignUp/>} />
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path="/bookings" element={<MyBookingsPage />} />
        <Route path="/api/appointments" element={<DoctorDashboard/>}/>
        <Route path="/api/update/:id" element={<BookingUpdateForm />} />

       
       
       

      


      </Routes>
  );
};

export default Routers;

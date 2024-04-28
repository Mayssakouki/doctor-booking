//import React from 'react'
import signupImg from "../assets/images/signup.gif"
import {Link , useNavigate } from 'react-router-dom'
import { useState } from "react"
import {toast}  from 'react-toastify';
import HashLoader from  "react-spinners/HashLoader";
import { BASE_URL } from "../config.js";



const Signup = () => {

  const[loading,setLoading] = useState(false)


  const[formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    gender:"",
    role:"patient",
    
  })

  const  navigate = useNavigate()


  const handleInputChange = e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const isValidPassword = password => {
    // Critères de force du mot de passe
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Vérifier si le mot de passe satisfait à tous les critères
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };


  const submitHandler=async event=>{
    console.log(formData)
    event.preventDefault() 
    setLoading(true)
    try {
      
        // Vérifier la force du mot de passe
        if (!isValidPassword(formData.password)) {
          throw new Error("Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.");
        }
      const res = await fetch (`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({...formData,role:'patient'})
       } )

       const {message} = await res.json()

      if(!res.ok){
        throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/login')
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  };

  
  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='hidden rounded lg:block bg-primaryColor-l-lg '>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>

      <div className='py-10 rounded-l-lg lg:pl-16'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Create an <span className='text-primaryColor'>account</span></h3>
        
        
        <form onSubmit={submitHandler} >
        
        <div className="mb-5">
              <input
              type="text" 
              placeholder="Full Name" 
              onChange={handleInputChange}
              name="name" 
              value={formData.name} 
              className="w-full pr-4 py-3 border border-b-solid-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer required rounded-md px-4" required />
            </div>

            
        <div className="mb-5">
              <input
              type="email" 
              placeholder="Enter your email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border border-b-solid-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer required rounded-md px-4"     required   />
                  
            </div>

            
        <div className="mb-5">
              <input
              type="password" 
              placeholder="Password" 
              name="password" 
              value={formData.password} 
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border border-b-solid-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer required rounded-md px-4" required />
            </div>

        <div className='flex items-center justify-between mb-5'>
          <label className='font-bold text-headingColor text-[16px] leading-7'>
            Are you a : 
            <select
            name="role"
            value={formData.role} 
            onChange={handleInputChange}
            className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
              <option value="patient">Patient</option>
             
            </select>
          </label>

          <label  className='font-bold text-headingColor text-[16px] leading-7 ' >
           Gender : 
            <select
            name="gender"
            value={formData.gender} 
            onChange={handleInputChange}
            className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none' >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>

            </select>
          </label>
          </div>
        
        <div className="mt-7" >
          <button
          disabled={loading && true } type="submit" className="w-full text-white bg-primaryColor text-[18px] leading-[30px] rounded-lg px-4 py-3">{ loading ? <HashLoader size={35} color='#ffffff'/> : 'Sign Up'}</button>
        </div>
      <p className='mt-5 text-center text-textColor'>
        Already have an account?
        <Link
        to="/login"
        className='ml-1 font-medium text-primaryColor'>Login</Link>
      </p>

      
        
      
      </form>
      </div>
          
        </div>
      </div>
    </section>
  )
}

export default Signup




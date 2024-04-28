import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import { Link } from 'react-router-dom';




const Home = () => {
  return (
    <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] '>A doctor's appointment in the blink of an eye!</h1>
              <p className='text__para'>No more long waits on the phone or in the waiting room. With our service, you can book your medical consultations anytime, anywhere, and manage your schedule in the blink of an eye.</p>
              <Link to="/login">
            <button className='btn'>Make an appointment</button>
            </Link>
            </div>
      
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row: lg:items-center gap-5 lg:gap-[30px]'>

            <div>
              
            </div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]'></h2>
              
            </div>

            
          </div>


      <div className='flex gap-[30px] justify-end'>
        <div>
          <img className='w-full' src={heroImg01} alt=""/>
        </div>

      <div className='mt-[30px]'>
        <img src={heroImg02} alt="" className='w-full mb-[30px]'/>
        <img src={heroImg03} alt="" className='w-full'/>

      </div>
        
      </div>

          
        </div>
        </div>
    </section>
  )
}

export default Home

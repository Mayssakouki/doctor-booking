import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'


const socialLinks=[
  { 
    path:"https://github.com/Mayssakouki/Doctor-appointment-app",
    icon:<AiFillGithub className='w-4 h-5 group-hover:text-white'/>
  },
  {
    path:"https://www.linkedin.com/in/mayssa-kouki-346781246/",
    icon:<RiLinkedinFill className='w-4 h-5 group-hover:text-white'/>

  },
  {
    path:"https://www.instagram.com",
    icon:<AiOutlineInstagram className='w-4 h-5 group-hover:text-white'/>
    
  },
];

const quickLinks01 = [
  {
    path:"/home",
    display:"Home",
  },
  {
    path:'/Services',
    display:'Services'
  },
  {
    path:'/Contact',
    display:'Contact'
  },
  {
    path:'/Reviews',
    display:'Reviews'
  },
];


const quickLinks02 = [
  {
    path:"/",
    display:"Contact",
  },

];




const Footer = () => {

  const year  = new Date().getFullYear() 
  return (
    <footer className='pt-10 pb-16'>
        <div className='container'>
        <div className="flex flex-col flex-wrap justify-between md:flex-row gap-[30px]">
          <div>
            <img src={logo} alt=''/>
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Developed by Mayssa Kouki</p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link,index)=><Link
              to={link.path} 
              key={index} 
              className=' w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>{link.icon}</Link>)}
            </div>
          </div>

            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick links</h2>
            <ul>
              {quickLinks01.map((item,index)=><li key={index} className='mb-4'>
                <Link to ={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
            </ul>
            
            
            </div>

          
            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick links</h2>
            <ul>
              {quickLinks01.map((item,index)=><li key={index} className='mb-4'>
                <Link to ={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
            </ul>
            
            
            </div>


            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>
            <ul>
              {quickLinks02.map((item,index)=><li key={index} className='mb-4'>
                <Link to ={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
            </ul>
            
            
            </div>



          
        </div>
        </div>
       
    </footer>
  )
};

export default Footer


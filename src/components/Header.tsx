import React from 'react';
import { NavLink } from 'react-router-dom';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Logo } from '../assets/export';

const Header: React.FunctionComponent = () => {
  return (
    <div className='fixed left-0 top-0 w-full header-shadow flex flex-col z-40 font-sans'>
      <div className='h-[30px] w-full px-[50px] bg-[#16171A] flex justify-between items-center gap-[40px]'>
        <div className='flex items-center gap-[30px]'>
          <div className='flex items-center gap-[5px] cursor-pointer group'>
            <FaLocationDot className='text-[#DD0733] text-[12px]' />
            <div className='flex items-center text-[#BDB3B3] group-hover:text-[#FFFFFF] text-[10px] font-medium transition-all duration-300 group'>
              <p className='w-[140px] group-hover:w-[270px] whitespace-nowrap text-ellipsis overflow-hidden transition-all duration-1000'>Infront of NTPC Gate No. 01, Amiliha ka Purwa, Unchahar, </p>
              <p>Raebareli, Uttar Pradesh - 229406</p>
            </div>
          </div>

          <div className='flex items-center gap-[5px] cursor-pointer group'>
            <IoIosMail className='text-[#DD0733] text-[14px]' />
            <p className='text-[#BDB3B3] group-hover:text-[#FFFFFF] text-[10px] font-medium transition-all duration-300'>sales@hirdayram.com</p>
          </div>
        </div>

        <div className='flex items-center gap-[20px]'>
          <FaFacebookSquare className='text-[#FFFFFF] hover:text-[#BDB3B3] text-[14px] transition-all duration-300 cursor-pointer' />
          <FaTwitter className='text-[#FFFFFF] hover:text-[#BDB3B3] text-[14px] transition-all duration-300 cursor-pointer' />
          <FaInstagram className='text-[#FFFFFF] hover:text-[#BDB3B3] text-[14px] transition-all duration-300 cursor-pointer' />
          <FaLinkedin className='text-[#FFFFFF] hover:text-[#BDB3B3] text-[14px] transition-all duration-300 cursor-pointer' />
        </div>
      </div>

      <div className='h-[70px] w-full px-[50px] bg-[#FFFFFF] flex justify-between items-center gap-[40px]'>
        <NavLink to='/' className='flex items-center gap-[7px]'>
          <img src={Logo} alt="Hirdayram-Logo" className='h-[30px] w-[30px]' />
          <p className='text-[#16171A] text-[26px] font-bold'>Hirdayram</p>
        </NavLink>

        <div className='flex items-center gap-[40px] relative top-[5px]'>
          <NavLink to='/' className='text-[#727272] hover:text-[#16171A] text-[14px] font-medium transition-all duration-300'>Home</NavLink>
          <NavLink to='/about' className='text-[#727272] hover:text-[#16171A] text-[14px] font-medium transition-all duration-300'>About</NavLink>
          <NavLink to='/services' className='text-[#727272] hover:text-[#16171A] text-[14px] font-medium transition-all duration-300'>Services</NavLink>
          <NavLink to='/projects' className='text-[#727272] hover:text-[#16171A] text-[14px] font-medium transition-all duration-300'>Projects</NavLink>
          <NavLink to='/contact' className='text-[#727272] hover:text-[#16171A] text-[14px] font-medium transition-all duration-300'>Contact</NavLink>
        </div>

        <div className='flex items-center gap-[15px]'>
          <div className='h-[45px] w-[45px] bg-[#F2EDEB] rounded-full flex justify-center items-center'>
            <LiaPhoneVolumeSolid className='text-[#DD0733] text-[22px] rotate-6' />
          </div>

          <div className='flex flex-col cursor-pointer group'>
            <p className='text-[#727272] text-[12px]'>Talk to an expert</p>
            <p className='text-[#727272] text-[12px]'>Free <span className='text-[#16171A] group-hover:text-[#DD0733] text-[12px] transition-all duration-300'>+91 8126637448</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
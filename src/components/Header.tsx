import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoIosMail, IoMdMenu, IoMdClose } from 'react-icons/io';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Logo, LogoWhite } from '../assets/export';

const Header: React.FunctionComponent = () => {
  const [showNavigationMenu, setShowNavigationMenu] = useState<boolean>(false);
  const navigationMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = (e: Event) => {
      if (navigationMenuRef.current && !navigationMenuRef.current.contains(e.target as Node)) {
        setShowNavigationMenu(false);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    }
  }, []);

  useEffect(() => {
    setShowNavigationMenu(false);
  }, [location.pathname]);

  return (
    <div className='fixed left-0 top-0 w-full header-shadow flex flex-col z-40 font-sans'>
      <div className='h-[30px] w-full px-[30px] sm:px-[50px] bg-[#16171A] flex justify-between items-center gap-[40px]'>
        <div className='flex items-center gap-[30px]'>
          <div className='hidden sm:flex items-center gap-[5px] cursor-pointer group'>
            <FaLocationDot className='text-[#DD0733] text-[12px]' />
            <div className='flex items-center text-[#BDB3B3] group-hover:text-[#FFFFFF] text-[10px] font-medium transition-all duration-300 group'>
              <a href="https://www.google.com/maps/place/NTPC+Unchahar,+Gate+No.1/@25.9132065,81.3082062,15z/data=!4m10!1m2!2m1!1sInfront+of+NTPC+Gate+No.+01,+Amiliha+ka+Purwa,+Unchahar,++Raebareli,+Uttar+Pradesh+-+229406!3m6!1s0x399b11604e048157:0x70b1143aa306ae92!8m2!3d25.9185247!4d81.3225771!15sCltJbmZyb250IG9mIE5UUEMgR2F0ZSBOby4gMDEsIEFtaWxpaGEga2EgUHVyd2EsIFVuY2hhaGFyLCAgUmFlYmFyZWxpLCBVdHRhciBQcmFkZXNoIC0gMjI5NDA2IgOIAQGSARFnb3Zlcm5tZW50X29mZmljZaoBxwEKDS9nLzExYmM1azl5czIKCS9tLzBieTR0YxABKi8iK2luZnJvbnQgb2YgbnRwYyBnYXRlIG5vIDAxIGFtaWxpaGEga2EgcHVyd2EoADIfEAEiG4XW_U1g0NXDwV3m81SGVQ0gcBm09IgCBS_hVTJXEAIiU2luZnJvbnQgb2YgbnRwYyBnYXRlIG5vIDAxIGFtaWxpaGEga2EgcHVyd2EgdW5jaGFoYXIgcmFlYmFyZWxpIHV0dGFyIHByYWRlc2ggMjI5NDA24AEA!16s%2Fg%2F11t_hpn3r3?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" target='_blank' className='w-[140px] group-hover:w-[270px] whitespace-nowrap text-ellipsis overflow-hidden transition-all duration-1000'>Infront of NTPC Gate No. 01, Amiliha ka Purwa, Unchahar, </a>
              <p>Raebareli, Uttar Pradesh - 229406</p>
            </div>
          </div>

          <div className='flex items-center gap-[5px] cursor-pointer group'>
            <IoIosMail className='text-[#DD0733] text-[14px]' />
            <a href="mailto:sales@hirdayram.com" target='_blank' className='text-[#BDB3B3] group-hover:text-[#FFFFFF] text-[10px] font-medium transition-all duration-300'>sales@hirdayram.com</a>
          </div>

          <div className='flex sm:hidden items-center gap-[5px] cursor-pointer group'>
            <FaPhone className='text-[#DD0733] text-[14px]' />
            <p className='text-[#BDB3B3] group-hover:text-[#FFFFFF] text-[10px] font-medium transition-all duration-300'>+91 ----------</p>
          </div>
        </div>

        <div className='hidden md:flex items-center gap-[20px]'>
          <FaFacebookSquare className='text-[#FFFFFF] hover:text-[#BDB3B3] text-[14px] transition-all duration-300 cursor-pointer' />
          <FaTwitter className='text-[#FFFFFF] hover:text-[#BDB3B3] text-[14px] transition-all duration-300 cursor-pointer' />
          <FaInstagram className='text-[#FFFFFF] hover:text-[#BDB3B3] text-[14px] transition-all duration-300 cursor-pointer' />
          <FaLinkedin className='text-[#FFFFFF] hover:text-[#BDB3B3] text-[14px] transition-all duration-300 cursor-pointer' />
        </div>
      </div>

      <div className='h-[50px] sm:h-[70px] w-full px-[30px] sm:px-[50px] bg-[#FFFFFF] flex justify-between items-center gap-[40px]'>
        <NavLink to='/' className='flex items-center gap-[7px]'>
          <img src={Logo} alt="Hirdayram-Logo" className='h-[25px] sm:h-[30px] w-[25px] sm:w-[30px]' />
          <p className='text-[#16171A] text-[22px] sm:text-[26px] font-bold'>Hirdayram</p>
        </NavLink>

        <div className='hidden lg:flex items-center gap-[40px] relative top-[5px]'>
          <NavLink to='/' className='text-[#727272] hover:text-[#16171A] text-[14px] font-medium transition-all duration-300'>Home</NavLink>
          <NavLink to='/about' className='text-[#727272] hover:text-[#16171A] text-[14px] font-medium transition-all duration-300'>About</NavLink>
          <NavLink to='/services' className='text-[#727272] hover:text-[#16171A] text-[14px] font-medium transition-all duration-300'>Services</NavLink>
          <NavLink to='/projects' className='text-[#727272] hover:text-[#16171A] text-[14px] font-medium transition-all duration-300'>Projects</NavLink>
          <NavLink to='/contact' className='text-[#727272] hover:text-[#16171A] text-[14px] font-medium transition-all duration-300'>Contact</NavLink>
        </div>

        <div className='hidden lg:flex items-center gap-[15px]'>
          <div className='h-[45px] w-[45px] bg-[#F2EDEB] rounded-full flex justify-center items-center'>
            <LiaPhoneVolumeSolid className='text-[#DD0733] text-[22px] rotate-6' />
          </div>

          <div className='flex flex-col cursor-pointer group'>
            <p className='text-[#727272] text-[12px]'>Talk to an expert</p>
            <p className='text-[#727272] text-[12px]'>Free <span className='text-[#16171A] group-hover:text-[#DD0733] text-[12px] transition-all duration-300'>+91 ----------</span></p>
          </div>
        </div>

        <div className='lg:hidden h-[35px] w-[35px] bg-[#DD0733] rounded-[5px] flex justify-center items-center cursor-pointer' onClick={() => setShowNavigationMenu(!showNavigationMenu)}>
          <IoMdMenu className='text-[#FFFFFF] text-[26px]' />
        </div>

        <div className={`lg:hidden absolute right-0 top-0 h-screen w-[300px] p-[20px] bg-[#16171A] flex flex-col gap-[30px] z-20 transition-all duration-300 ${showNavigationMenu ? 'translate-x-0' : 'translate-x-full'}`} ref={navigationMenuRef}>
          <div className='flex justify-between items-center gap-[20px]'>
            <NavLink to='/' className='flex items-center gap-[7px]'>
              <img src={LogoWhite} alt="Hirdayram-Logo" className='h-[25px] w-[25px]' />
              <p className='text-[#FFFFFF] text-[22px] font-bold'>Hirdayram</p>
            </NavLink>

            <div className='h-[30px] w-[30px] bg-[#FFFFFF] rounded-[5px] flex justify-center items-center cursor-pointer' onClick={() => setShowNavigationMenu(false)}>
              <IoMdClose className='text-[#16171A] text-[24px]' />
            </div>
          </div>

          <p className='text-[#68696C] text-[12px] font-medium'>Expert & Experienced Electrician for Residential to Commercial to Service with 100% satisfaction guarantee</p>

          <div className='flex flex-col gap-[15px]'>
            <NavLink to='/' className='text-[#FFFFFF] text-[14px] font-medium transition-all duration-300'>Home</NavLink>
            <NavLink to='/about' className='text-[#FFFFFF] text-[14px] font-medium transition-all duration-300'>About</NavLink>
            <NavLink to='/services' className='text-[#FFFFFF] text-[14px] font-medium transition-all duration-300'>Services</NavLink>
            <NavLink to='/projects' className='text-[#FFFFFF] text-[14px] font-medium transition-all duration-300'>Projects</NavLink>
            <NavLink to='/contact' className='text-[#FFFFFF] text-[14px] font-medium transition-all duration-300'>Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import type { FooterComponentProps } from '../utils/types';
import { LogoWhite, InstaPost1, InstaPost2, InstaPost3, InstaPost4, InstaPost5, InstaPost6 } from '../assets/export';

const Footer: React.FunctionComponent<FooterComponentProps> = ({ setSelectedServiceDetail }) => {
  const navigate = useNavigate();

  const handleServiceDetails = (selectedIndex: number) => {
    setSelectedServiceDetail(selectedIndex);
    navigate('/services');
  };

  return (
    <div className='flex flex-col z-10 font-sans'>
      <div className='min-h-[350px] w-full py-[30px] sm:py-[50px] px-[30px] footer-bg flex lg:justify-center items-center'>
        <div className='h-full w-[500px] lg:w-full max-w-[800px] grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-[20px] sm:gap-[40px]'>
          <div className='min-h-[150px] w-full sm:w-[220px] flex flex-col gap-[20px]'>
            <div className='flex items-center gap-[5px]'>
              <img src={LogoWhite} alt="Hirdayram-Logo" className='h-[25px] w-[25px]' />
              <p className='text-[#FFFFFF] text-[20px] font-semibold'>Hirdayram</p>
            </div>

            <p className='w-full sm:w-[220px] text-[#727272] text-[10px]'>Expert & Experienced Electrician for Residential to Commercial to Service with 100% satisfaction guarantee</p>

            <div className='flex flex-col gap-[5px]'>
              <div className='flex items-center gap-[5px] cursor-pointer group'>
                <IoIosMail className='text-[#DD0733] text-[14px]' />
                <a href="mailto:sales@hirdayram.com" target='_blank' className='text-[#727272] group-hover:text-[#FFFFFF] text-[10px] font-medium transition-all duration-300'>sales@hirdayram.com</a>
              </div>

              <a href="https://www.google.com/maps/place/NTPC+Unchahar,+Gate+No.1/@25.9132065,81.3082062,15z/data=!4m10!1m2!2m1!1sInfront+of+NTPC+Gate+No.+01,+Amiliha+ka+Purwa,+Unchahar,++Raebareli,+Uttar+Pradesh+-+229406!3m6!1s0x399b11604e048157:0x70b1143aa306ae92!8m2!3d25.9185247!4d81.3225771!15sCltJbmZyb250IG9mIE5UUEMgR2F0ZSBOby4gMDEsIEFtaWxpaGEga2EgUHVyd2EsIFVuY2hhaGFyLCAgUmFlYmFyZWxpLCBVdHRhciBQcmFkZXNoIC0gMjI5NDA2IgOIAQGSARFnb3Zlcm5tZW50X29mZmljZaoBxwEKDS9nLzExYmM1azl5czIKCS9tLzBieTR0YxABKi8iK2luZnJvbnQgb2YgbnRwYyBnYXRlIG5vIDAxIGFtaWxpaGEga2EgcHVyd2EoADIfEAEiG4XW_U1g0NXDwV3m81SGVQ0gcBm09IgCBS_hVTJXEAIiU2luZnJvbnQgb2YgbnRwYyBnYXRlIG5vIDAxIGFtaWxpaGEga2EgcHVyd2EgdW5jaGFoYXIgcmFlYmFyZWxpIHV0dGFyIHByYWRlc2ggMjI5NDA24AEA!16s%2Fg%2F11t_hpn3r3?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" target='_blank' className='flex items-center gap-[5px] cursor-pointer group'>
                <FaLocationDot className='text-[#DD0733] text-[12px]' />
                <p className='text-[#727272] group-hover:text-[#FFFFFF] text-[10px] font-medium transition-all duration-300 relative left-[2px]'>Unchahar, Uttar Pradesh</p>
              </a>
            </div>
          </div>

          <div className='min-h-[172px] w-full sm:w-[105px] flex flex-col gap-[15px]'>
            <h4 className='text-[#FFFFFF] text-[18px] font-semibold'>Useful Links</h4>

            <div className='flex flex-col gap-[10px]'>
              <NavLink to='/' className='text-[#68696C] hover:text-[#FFFFFF] text-[12px] transition-all duration-300 cursor-pointer'>Home Page</NavLink>
              <NavLink to='/about' className='text-[#68696C] hover:text-[#FFFFFF] text-[12px] transition-all duration-300 cursor-pointer'>About Hirdayram</NavLink>
              <NavLink to='/projects' className='text-[#68696C] hover:text-[#FFFFFF] text-[12px] transition-all duration-300 cursor-pointer'>Our Portfolio</NavLink>
              <NavLink to='/services' className='text-[#68696C] hover:text-[#FFFFFF] text-[12px] transition-all duration-300 cursor-pointer'>Our Services</NavLink>
              <NavLink to='/contact' className='text-[#68696C] hover:text-[#FFFFFF] text-[12px] transition-all duration-300 cursor-pointer'>Contact Us</NavLink>
            </div>
          </div>

          <div className='min-h-[172px] w-full sm:w-[145px] flex flex-col gap-[15px]'>
            <h4 className='text-[#FFFFFF] text-[18px] font-semibold'>Services</h4>

            <div className='flex flex-col gap-[10px]'>
              <p className='text-[#68696C] hover:text-[#FFFFFF] text-[12px] transition-all duration-300 cursor-pointer' onClick={() => handleServiceDetails(0)}>Design & Engineering</p>
              <p className='text-[#68696C] hover:text-[#FFFFFF] text-[12px] transition-all duration-300 cursor-pointer' onClick={() => handleServiceDetails(2)}>Operation & Maintenance</p>
              <p className='text-[#68696C] hover:text-[#FFFFFF] text-[12px] transition-all duration-300 cursor-pointer' onClick={() => handleServiceDetails(7)}>Earthing Solution</p>
              <p className='text-[#68696C] hover:text-[#FFFFFF] text-[12px] transition-all duration-300 cursor-pointer' onClick={() => handleServiceDetails(4)}>LT & HT Panels</p>
              <p className='text-[#68696C] hover:text-[#FFFFFF] text-[12px] transition-all duration-300 cursor-pointer' onClick={() => handleServiceDetails(12)}>Lighting Mast</p>
            </div>
          </div>

          <div className='min-h-[150px] w-full sm:w-[170px] flex flex-col gap-[15px]'>
            <h4 className='text-[#FFFFFF] text-[18px] font-semibold'>Instagram</h4>

            <div className='w-[170px] flex items-center gap-[10px] flex-wrap'>
              <img src={InstaPost1} alt="InstaPost-1" className='h-[50px] w-[50px] hover:brightness-90 transition-all duration-300 cursor-pointer' />
              <img src={InstaPost2} alt="InstaPost-2" className='h-[50px] w-[50px] hover:brightness-90 transition-all duration-300 cursor-pointer' />
              <img src={InstaPost3} alt="InstaPost-3" className='h-[50px] w-[50px] hover:brightness-90 transition-all duration-300 cursor-pointer' />
              <img src={InstaPost4} alt="InstaPost-4" className='h-[50px] w-[50px] hover:brightness-90 transition-all duration-300 cursor-pointer' />
              <img src={InstaPost5} alt="InstaPost-5" className='h-[50px] w-[50px] hover:brightness-90 transition-all duration-300 cursor-pointer' />
              <img src={InstaPost6} alt="InstaPost-6" className='h-[50px] w-[50px] hover:brightness-90 transition-all duration-300 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>

      <div className='min-h-[50px] sm:min-h-[60px] w-full px-[30px] lg:px-[50px] bg-[#1D1E22] flex justify-center sm:justify-between items-center gap-[40px]'>
        <p className='text-[#727272] text-[12px] font-medium'>Copyright &copy; 2025 <span className='text-[#FFFFFF]'>Hirdayram</span> | All Rights Reserved</p>

        <div className='hidden sm:flex items-center gap-[10px]'>
          <div className='h-[30px] w-[30px] bg-[#16171A] hover:bg-[#DD0733] transition-all duration-300 cursor-pointer flex justify-center items-center'>
            <FaFacebookF className='text-[#FFFFFF] text-[14px]' />
          </div>

          <div className='h-[30px] w-[30px] bg-[#16171A] hover:bg-[#DD0733] transition-all duration-300 cursor-pointer flex justify-center items-center'>
            <FaInstagram className='text-[#FFFFFF] text-[14px]' />
          </div>

          <div className='h-[30px] w-[30px] bg-[#16171A] hover:bg-[#DD0733] transition-all duration-300 cursor-pointer flex justify-center items-center'>
            <FaLinkedin className='text-[#FFFFFF] text-[14px]' />
          </div>

          <div className='h-[30px] w-[30px] bg-[#16171A] hover:bg-[#DD0733] transition-all duration-300 cursor-pointer flex justify-center items-center'>
            <FaTwitter className='text-[#FFFFFF] text-[14px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
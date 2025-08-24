import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { supabase } from '../utils/supabase';
import { ClockIcon, LocationIcon, MailIcon } from '../assets/export';

const Contact: React.FunctionComponent = () => {
  const [contactFormData, setContactFormData] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase.from('Contact Form').insert([
        { 'First Name': contactFormData.firstName, 'Last Name': contactFormData.lastName, 'Email': contactFormData.email, 'Phone Number': contactFormData.phoneNumber, 'Message': contactFormData.message },
      ]).select();

      if (data) {
        toast.success('Form Submitted Successfully', { duration: 4000 });
      }
      else if (error) {
        console.error('Error inserting data:', error);
        toast.error('Something went Wrong', { duration: 4000 });
      }
    } catch (error) {
      console.error('Error inserting data:', error);
      toast.error('Something went Wrong', { duration: 4000 });
    } finally {
      setContactFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' });
    }
  };

  return (
    <div className='flex flex-col font-sans'>
      <div className='h-[330px] sm:h-[450px] w-full pt-[100px] not-found-bg flex flex-col justify-center items-center gap-[10px] relative'>
        <div className='absolute left-0 top-0 h-full w-full bg-[#16171A] opacity-85'></div>
        <h2 className='text-[#FFFFFF] text-[30px] font-semibold leading-none z-10'>Contact</h2>
        <div className='text-[#FFFFFF] text-[10px] z-10'><NavLink to='/'>Hirdayram</NavLink> / Contact</div>
      </div>

      <div className='flex justify-center items-center py-[30px] sm:py-[50px] bg-[#FFFFFF]'>
        <div className='w-full lg:max-w-[970px] px-[30px] sm:px-[50px] flex flex-col gap-[30px] sm:gap-[50px]'>
          <div className='w-full grid grid-cols-1 sm:flex sm:items-center sm:flex-wrap gap-[15px]'>
            <div className='h-[200px] w-full sm:w-[48%] lg:w-[280px] bg-[#FFFFFF] contact-box-shadow flex flex-col justify-center items-center gap-[20px]'>
              <div className='h-[55px] w-[55px] bg-[#F5F5F8] rounded-full flex justify-center items-center'>
                <img src={LocationIcon} alt="Location-Icon" className='h-[25px] w-[21px]' />
              </div>

              <a href="https://www.google.com/maps/place/NTPC+Unchahar,+Gate+No.1/@25.9132065,81.3082062,15z/data=!4m10!1m2!2m1!1sInfront+of+NTPC+Gate+No.+01,+Amiliha+ka+Purwa,+Unchahar,++Raebareli,+Uttar+Pradesh+-+229406!3m6!1s0x399b11604e048157:0x70b1143aa306ae92!8m2!3d25.9185247!4d81.3225771!15sCltJbmZyb250IG9mIE5UUEMgR2F0ZSBOby4gMDEsIEFtaWxpaGEga2EgUHVyd2EsIFVuY2hhaGFyLCAgUmFlYmFyZWxpLCBVdHRhciBQcmFkZXNoIC0gMjI5NDA2IgOIAQGSARFnb3Zlcm5tZW50X29mZmljZaoBxwEKDS9nLzExYmM1azl5czIKCS9tLzBieTR0YxABKi8iK2luZnJvbnQgb2YgbnRwYyBnYXRlIG5vIDAxIGFtaWxpaGEga2EgcHVyd2EoADIfEAEiG4XW_U1g0NXDwV3m81SGVQ0gcBm09IgCBS_hVTJXEAIiU2luZnJvbnQgb2YgbnRwYyBnYXRlIG5vIDAxIGFtaWxpaGEga2EgcHVyd2EgdW5jaGFoYXIgcmFlYmFyZWxpIHV0dGFyIHByYWRlc2ggMjI5NDA24AEA!16s%2Fg%2F11t_hpn3r3?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" target='_blank' className='flex flex-col items-center'>
                <p className='text-[#16171A] text-[16px] font-semibold'>Visit our place</p>
                <p className='text-[#727272] text-[11px] font-medium'>W864+8CC त्रिवेणी अलमीरा, Unchahar Rd,</p>
                <p className='text-[#727272] text-[11px] font-medium'>Unchahar, Uttar Pradesh</p>
              </a>
            </div>

            <div className='h-[200px] w-full sm:w-[48%] lg:w-[280px] bg-[#FFFFFF] contact-box-shadow flex flex-col justify-center items-center gap-[20px]'>
              <div className='h-[55px] w-[55px] bg-[#F5F5F8] rounded-full flex justify-center items-center'>
                <img src={MailIcon} alt="Mail-Icon" className='h-[25px] w-[27px]' />
              </div>

              <div className='flex flex-col items-center'>
                <p className='text-[#16171A] text-[16px] font-semibold'>Contact us</p>
                <a href="mailto:sales@hirdayram.com" target='_blank' className='text-[#727272] text-[11px] font-medium'>sales@hirdayram.com</a>
                <a href="tel:9140993955" className='text-[#727272] text-[11px] font-medium'>+91 9140993955</a>
              </div>
            </div>

            <div className='h-[200px] w-full sm:w-[48%] lg:w-[280px] bg-[#FFFFFF] contact-box-shadow flex flex-col justify-center items-center gap-[20px]'>
              <div className='h-[55px] w-[55px] bg-[#F5F5F8] rounded-full flex justify-center items-center'>
                <img src={ClockIcon} alt="Clock-Icon" className='h-[25px] w-[25px]' />
              </div>

              <div className='flex flex-col items-center'>
                <p className='text-[#16171A] text-[16px] font-semibold'>Office time</p>
                <p className='text-[#727272] text-[11px] font-medium'>Six days 9:00 am - 6:00 pm</p>
                <p className='text-[#727272] text-[11px] font-medium'>Sunday is closed</p>
              </div>
            </div>
          </div>

          <div className='h-full w-full p-[20px] sm:p-[50px] bg-[#FFFFFF] border border-solid border-[#DCDCDC] flex flex-col gap-[25px]'>
            <p className='text-[#16171A] text-[22px] sm:text-[26px] font-bold'>Send your message</p>

            <div className='flex flex-col gap-[15px] md:gap-[25px]'>
              <div className='flex flex-col md:flex-row items-center gap-[15px]'>
                <div className='h-[42px] w-full md:w-[50%] bg-[#F5F5F8] px-[15px] flex items-center border border-solid border-transparent focus-within:border-[#DD0733] rounded-[3px] transition-all duration-300'>
                  <input type="text" name='firstName' placeholder='Enter your First-Name' className='h-full w-full text-[#16171A] text-[12px] outline-none' value={contactFormData.firstName} onChange={handleChange} />
                </div>

                <div className='h-[42px] w-full md:w-[50%] bg-[#F5F5F8] px-[15px] flex items-center border border-solid border-transparent focus-within:border-[#DD0733] rounded-[3px] transition-all duration-300'>
                  <input type="text" name='lastName' placeholder='Enter your Last-Name' className='h-full w-full text-[#16171A] text-[12px] outline-none' value={contactFormData.lastName} onChange={handleChange} />
                </div>
              </div>

              <div className='flex flex-col md:flex-row items-center gap-[15px]'>
                <div className='h-[42px] w-full md:w-[50%] bg-[#F5F5F8] px-[15px] flex items-center border border-solid border-transparent focus-within:border-[#DD0733] rounded-[3px] transition-all duration-300'>
                  <input type="email" name='email' placeholder='Enter your Email' className='h-full w-full text-[#16171A] text-[12px] outline-none' value={contactFormData.email} onChange={handleChange} />
                </div>

                <div className='h-[42px] w-full md:w-[50%] bg-[#F5F5F8] px-[15px] flex items-center border border-solid border-transparent focus-within:border-[#DD0733] rounded-[3px] transition-all duration-300'>
                  <input type="number" name='phoneNumber' placeholder='Enter your Phone-Number' className='h-full w-full text-[#16171A] text-[12px] outline-none' value={contactFormData.phoneNumber} onChange={handleChange} />
                </div>
              </div>

              <div className='h-[100px] w-full bg-[#F5F5F8] border border-solid border-transparent focus-within:border-[#DD0733] rounded-[3px]'>
                <textarea name='message' placeholder='Enter your Message' className='h-full w-full p-[15px] text-[#16171A] text-[12px] outline-none resize-none' value={contactFormData.message} onChange={handleChange}></textarea>
              </div>

              <button className='h-[40px] w-[140px] bg-[#DD0733] btn-hover flex justify-center items-center relative cursor-pointer' onClick={handleSubmit}>
                <span className='text-[#FFFFFF] text-[10px] uppercase font-medium z-10'>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[280px] sm:h-[450px] w-full flex justify-center'>
        <div className='h-[250px] sm:h-[400px] w-full lg:max-w-[970px] px-[30px] sm:px-[50px] flex justify-center items-center'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.0247805472045!2d81.2858099737144!3d25.934411101450088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b0360dfc073eb%3A0xf835fb5c7e1dab09!2sUnchahar%20Rd%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1756015969979!5m2!1sen!2sin" style={{ height: '100%', width: '100%', border: 'none' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;
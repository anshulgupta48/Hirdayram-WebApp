import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { servicesData } from '../utils/constants';
import type { ServicesPageProps } from '../utils/types';

const Services: React.FunctionComponent<ServicesPageProps> = ({ selectedServiceDetail, setSelectedServiceDetail }) => {
  return (
    <div className='flex flex-col font-sans'>
      <div className='h-[330px] sm:h-[450px] w-full pt-[100px] not-found-bg flex flex-col justify-center items-center gap-[10px] relative'>
        <div className='absolute left-0 top-0 h-full w-full bg-[#16171A] opacity-85'></div>
        <h2 className='text-[#FFFFFF] text-[30px] font-semibold leading-none z-10'>Services</h2>
        <div className='text-[#FFFFFF] text-[10px] z-10'><NavLink to='/'>Hirdayram</NavLink> / Services</div>
      </div>

      <div className='min-h-[600px] w-full px-[30px] py-[30px] sm:py-[50px] lg:py-[70px] bg-[#FFFFFF] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[40px] lg:gap-[80px] overflow-hidden'>
        <div className='h-full w-[80%] lg:w-[40%] flex justify-center lg:justify-end'>
          <div className='w-full lg:w-[270px] flex flex-col gap-[20px]'>
            <h3 className='text-[#16171A] text-[22px] font-semibold'>Our Services</h3>

            <div className='h-[360px] overflow-y-auto flex flex-col gap-[8px]'>
              {servicesData.map((item, index) => (
                <div className={`min-h-[35px] w-full px-[20px] border border-solid border-[#F4F4F4] hover:border-[#FBFBFB] rounded-[2px] flex justify-between items-center gap-[20px] transition-all duration-300 cursor-pointer group ${selectedServiceDetail === index ? 'services-box-shadow' : 'services-box-shadow-hover'}`} key={index} onClick={() => setSelectedServiceDetail(index)}>
                  <p className={`group-hover:text-[#DD0733] text-[12px] font-medium whitespace-nowrap text-ellipsis overflow-hidden transition-all duration-300 ${selectedServiceDetail === index ? 'text-[#DD0733]' : 'text-[#16171A]'}`}>{item.title}</p>
                  <BsArrowRight className={`group-hover:text-[#DD0733] text-[16px] transition-all duration-300 ${selectedServiceDetail === index ? 'text-[#DD0733]' : 'text-[#16171A]'}`} />
                </div>
              ))}
            </div>

            <div className='h-[84px] w-full mt-[10px] pl-[20px] bg-[#F5F5F8] flex items-center gap-[12px]'>
              <div className='h-[50px] w-[50px] bg-[#FFFFFF] rounded-full flex justify-center items-center'>
                <LiaPhoneVolumeSolid className='text-[#DD0733] text-[22px] rotate-6' />
              </div>

              <div className='flex flex-col cursor-pointer group'>
                <p className='text-[#727272] text-[12px]'>Talk to an expert</p>
                <a href="tel:9140993955" className='text-[#727272] text-[12px]'>Free <span className='text-[#16171A] group-hover:text-[#DD0733] text-[12px] transition-all duration-300'>+91 9140993955</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className='h-full w-full lg:w-[60%] flex flex-col items-center lg:items-start gap-[15px]'>
          <div className='flex flex-col items-center lg:items-start gap-[3px]'>
            <p className='text-[#16171A] text-[16px] sm:text-[20px] font-semibold'>{servicesData[selectedServiceDetail].title}</p>
            <p className='w-full lg:w-[535px] text-[#16171A] text-[28px] sm:text-[34px] font-bold leading-[32px] sm:leading-[40px] text-center sm:text-left'>{servicesData[selectedServiceDetail].heading}</p>
          </div>

          <p className='w-full lg:w-[550px] text-[#727272] text-[12px] text-center sm:text-left'>{servicesData[selectedServiceDetail].description}</p>
          <div className='h-[250px] sm:h-[348px] w-[350px] sm:w-[550px] overflow-hidden'>
            <img src={servicesData[selectedServiceDetail].banner} alt="ServicesDetail-Banner" className='h-full w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
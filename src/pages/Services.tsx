import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { servicesData } from '../utils/constants';
import type { ServicesPageProps } from '../utils/types';

const Services: React.FunctionComponent<ServicesPageProps> = ({ selectedServiceDetail, setSelectedServiceDetail }) => {
  return (
    <div className='flex flex-col font-sans'>
      <div className='h-[450px] w-full pt-[100px] not-found-bg flex flex-col justify-center items-center gap-[10px] relative'>
        <div className='absolute left-0 top-0 h-full w-full bg-[#16171A] opacity-85'></div>
        <h2 className='text-[#FFFFFF] text-[30px] font-semibold leading-none z-10'>Services</h2>
        <div className='text-[#FFFFFF] text-[10px] z-10'><NavLink to='/'>Hirdayram</NavLink> / Services</div>
      </div>

      <div className='min-h-[600px] w-full py-[70px] bg-[#FFFFFF] flex justify-center gap-[80px]'>
        <div className='h-full w-[40%] flex justify-end'>
          <div className='w-[270px] flex flex-col gap-[20px]'>
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
                <p className='text-[#727272] text-[12px]'>Free <span className='text-[#16171A] group-hover:text-[#DD0733] text-[12px] transition-all duration-300'>+91 8126637448</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className='h-full w-[60%] flex flex-col gap-[15px]'>
          <div className='flex flex-col gap-[3px]'>
            <p className='text-[#16171A] text-[20px] font-semibold'>{servicesData[selectedServiceDetail].title}</p>
            <p className='w-[535px] text-[#16171A] text-[34px] font-bold leading-[40px]'>{servicesData[selectedServiceDetail].heading}</p>
          </div>

          <p className='w-[550px] text-[#727272] text-[12px]'>{servicesData[selectedServiceDetail].description}</p>
          <div className='h-[348px] w-[550px] overflow-hidden'>
            <img src={servicesData[selectedServiceDetail].banner} alt="ServicesDetail-Banner" className='h-full w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
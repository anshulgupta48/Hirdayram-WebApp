import React from 'react';
import { NavLink } from 'react-router-dom';
import { NotFoundBanner } from '../assets/export';

const NotFound: React.FunctionComponent = () => {
  return (
    <div className='flex flex-col font-sans'>
      <div className='h-[330px] sm:h-[450px] w-full pt-[100px] not-found-bg flex flex-col justify-center items-center gap-[10px] relative'>
        <div className='absolute left-0 top-0 h-full w-full bg-[#16171A] opacity-85'></div>
        <h2 className='text-[#FFFFFF] text-[30px] font-semibold leading-none z-10'>Page Not Found</h2>
        <div className='text-[#FFFFFF] text-[10px] z-10'><NavLink to='/'>Hirdayram</NavLink> / 404</div>
      </div>

      <div className='min-h-[360px] sm:min-h-[460px] w-full bg-[#FFFFFF] flex flex-col justify-center items-center gap-[25px]'>
        <img src={NotFoundBanner} alt="NotFound-Banner" className='h-[100px] sm:h-[140px] md:h-[200px] w-[250px] sm:w-[300px] md:w-[500px]' />
        <h3 className='mt-[10px] text-[#16171A] text-[20px] sm:text-[24px] md:text-[30px] font-bold leading-none'>Sorry We Can't Find That Page!</h3>

        <NavLink to='/' className='h-[40px] w-[155px] bg-[#DD0733] btn-hover flex justify-center items-center relative'>
          <span className='text-[#FFFFFF] text-[10px] uppercase font-medium z-10'>Back to Home</span>
        </NavLink>
      </div>
    </div>
  )
}

export default NotFound;
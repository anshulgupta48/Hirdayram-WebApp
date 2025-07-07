import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { HiOutlineCheckBadge } from 'react-icons/hi2';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoIosFlash } from 'react-icons/io';
import { servicesData } from '../utils/constants';
import type { HomePageProps } from '../utils/types';
import { AboutOverlay1, AboutOverlay2, AboutBanner4, AboutBanner5, ExpertElectricianIcon, TriangleShapeIcon, SafetyAssuranceIcon, ServicesOverlay, CustomSupportIcon, InsuredExpertIcon, FlatRateIcon, AvailableIcon } from '../assets/export';

const About: React.FunctionComponent<HomePageProps> = ({ setSelectedServiceDetail }) => {
  const servicesCarouselRef = useRef<SwiperCore | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (servicesCarouselRef.current) {
      interval = setInterval(() => {
        servicesCarouselRef.current?.slideNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, []);

  const handleServiceDetails = (selectedIndex: number) => {
    setSelectedServiceDetail(selectedIndex);
    navigate('/services');
  };

  return (
    <div className='flex flex-col font-sans'>
      <div className='h-[450px] w-full pt-[100px] not-found-bg flex flex-col justify-center items-center gap-[10px] relative'>
        <div className='absolute left-0 top-0 h-full w-full bg-[#16171A] opacity-85'></div>
        <h2 className='text-[#FFFFFF] text-[30px] font-semibold leading-none z-10'>About</h2>
        <div className='text-[#FFFFFF] text-[10px] z-10'><NavLink to='/'>Hirdayram</NavLink> / About</div>
      </div>

      <div className='min-h-[600px] w-full bg-[#FFFFFF] flex items-center'>
        <div className='min-h-[600px] w-[48%] py-[100px] flex justify-end relative'>
          <img src={AboutOverlay1} alt="About-Overlay-1" className='absolute left-0 top-[50px] h-[450px] w-[300px] topToDownAnimation' />

          <div className='relative'>
            <img src={AboutBanner4} alt="About-Banner-4" className='h-[350px] w-[300px] relative z-20' />
            <img src={AboutBanner5} alt="About-Banner-5" className='absolute left-[-50px] bottom-[-25px] h-[280px] w-[220px] z-20' />
            <img src={AboutOverlay2} alt="About-Overlay-2" className='absolute right-[-23px] top-[-20px] h-[160px] w-[160px] z-10' />

            <div className='absolute right-[50px] bottom-[15px] h-[70px] w-[200px] pl-[20px] experience-btn-bg flex flex-col justify-center items-center pulseAnimation z-30'>
              <h4 className='text-[#16171A] text-[28px] font-semibold leading-none'>35+</h4>
              <p className='text-[#727272] text-[10px]'>Years of experience</p>
            </div>
          </div>
        </div>

        <div className='min-h-[600px] w-[50%] flex justify-center items-center'>
          <div className='max-w-[400px] flex flex-col gap-[10px] relative right-[50px]'>
            <p className='text-[#727272] text-[11px] font-medium uppercase'>We are Hirdayram Electric Company</p>

            <h3 className='text-[#16171A] text-[35px] font-bold leading-[38px]'>Produce your own clean save the environment</h3>
            <p className='mt-[5px] text-[#727272] text-[11px]'>Hirdayram deals in all type of Electrical Installations in Commercial and Industrial Projects. We Design, Supply and Install the electrical Installations as per the requirements of client. We have experience in all facets of electrical service from large Commercial / Industrial projects to Installing light fixtures and its maintenance.</p>

            <div className='mt-[10px] pb-[15px] border-b border-solid border-[#F0F0F0] flex items-center gap-[30px]'>
              <div className='flex items-center gap-[15px]'>
                <img src={ExpertElectricianIcon} alt="Expert-Electrician-Icon" className='h-[60px] w-[60px]' />
                <p className='text-[#16171A] text-[15px] font-bold'>Expert <br /> electrician</p>
              </div>

              <img src={TriangleShapeIcon} alt="Triangle-Icon" className='h-[15px] w-[20px]' />

              <div className='flex items-center gap-[15px]'>
                <img src={SafetyAssuranceIcon} alt="Safety-Assurance-Icon" className='h-[60px] w-[60px]' />
                <p className='text-[#16171A] text-[15px] font-bold'>Safety <br /> assurance</p>
              </div>
            </div>

            <div className='mt-[15px] flex flex-col gap-[7px]'>
              <div className='flex items-center gap-[5px]'>
                <HiOutlineCheckBadge className='text-[#DD0733] text-[18px]' />
                <p className='text-[#727272] text-[11px]'>Designing as per CBIP, IEEE & Govt. Norms</p>
              </div>

              <div className='flex items-center gap-[5px]'>
                <HiOutlineCheckBadge className='text-[#DD0733] text-[18px]' />
                <p className='text-[#727272] text-[11px]'>Best Industrial Safety Practice.</p>
              </div>

              <div className='flex items-center gap-[5px]'>
                <HiOutlineCheckBadge className='text-[#DD0733] text-[18px]' />
                <p className='text-[#727272] text-[11px]'>Best Quality Material used for Projects.</p>
              </div>
            </div>

            <div className='pt-[15px] flex items-center gap-[80px]'>
              <button className='h-[36px] w-[125px] bg-[#16171A] btn-hover-reverse flex justify-center items-center relative'>
                <span className='text-[#FFFFFF] text-[11px] uppercase font-medium z-10'>Know More</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='min-h-[600px] w-full services-bg flex flex-col justify-center items-center gap-[40px] relative services-container'>
        <img src={ServicesOverlay} alt="Services-Overlay" className='absolute right-0 top-[40px] h-[125px] w-[125px] topToDownAnimation' />

        <div className='flex flex-col gap-[5px]'>
          <div className='flex justify-center items-center gap-[3px]'>
            <IoIosFlash className='text-[#DD0733] text-[16px]' />
            <p className='text-[#727272] text-[12px] font-medium uppercase'>Our Hirdayram Services</p>
          </div>

          <h3 className='w-[560px] text-[#16171A] text-[36px] font-bold text-center leading-[40px]'>Outstanding power plant, engineering & residential services</h3>
        </div>

        <div className='w-full flex justify-between items-center gap-[30px]'>
          <Swiper onSwiper={(swiper) => (servicesCarouselRef.current = swiper)} slidesPerView={3} spaceBetween={30} speed={1200} loop={true} modules={[Pagination, Navigation]} className='mySwiper'>
            {servicesData.map((item, index) => (
              <SwiperSlide className='w-[260px]' key={index}>
                <div className='h-[310px] w-[260px] bg-[#FFFFFF] flex flex-col group'>
                  <div className='h-[190px] w-[260px] overflow-hidden'>
                    <img src={item.banner} alt="Services-Banner" className='h-[175px] w-full' />
                  </div>

                  <h4 className='h-[24px] w-full px-[30px] text-[#16171A] text-[16px] font-bold whitespace-nowrap text-ellipsis overflow-hidden'>{item.title}</h4>
                  <p className='h-[33px] w-[260px] mt-[10px] px-[30px] text-[#727272] text-[11px] line-clamp-2 text-ellipsis overflow-hidden'>{item.description}</p>

                  <div className='w-max mt-[15px] mx-[30px] flex items-center gap-[5px] cursor-pointer' onClick={() => handleServiceDetails(index)}>
                    <p className='text-[#DD0733] text-[10px] font-semibold uppercase'>Read More</p>
                    <FaArrowRightLong className='text-[#DD0733] text-[12px] relative left-0 bottom-[1px] group-hover:left-[5px] transition-all duration-300' />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className='min-h-[500px] w-full bg-[#1D1E22] flex items-center'>
        <div className='min-h-[500px] h-full w-[45%] choose-us-bg-2 relative'>
          <div className='absolute right-[100px] bottom-[120px] h-[100px] w-[250px] bg-[#FFFFFF] flex flex-col justify-center items-center pulseAnimation z-10'>
            <p className='text-[#16171A] text-[14px]'>For Emergency</p>
            <p className='text-[#DD0733] text-[18px]'>+91 8126637448</p>
          </div>
        </div>

        <div className='min-h-[500px] h-full w-[55%] pl-[70px] flex items-center'>
          <div className='max-w-[450px] flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-[3px]'>
              <p className='text-[#9F9F9F] text-[12px] uppercase font-medium'>Why Choose our Buddit</p>
              <h3 className='text-[#FFFFFF] text-[35px] font-semibold leading-[35px]'>Great reason for the people choose our Hirdayram</h3>
            </div>

            <p className='text-[#FFFFFFA3] text-[12px]'>Professional, reliable, accountable, experienced, on time work completion, in house engineering and designing, fully customer centric.</p>

            <div className='w-[450px] flex items-center gap-[15px] flex-wrap'>
              <div className='h-[60px] w-[200px] px-[15px] bg-[#212226] flex items-center gap-[10px]'>
                <img src={CustomSupportIcon} alt="CustomSupport-Icon" className='h-[45px] w-[45px] rounded-full' />
                <p className='text-[#FFFFFF] text-[14px] font-bold leading-[17px]'>Custom support</p>
              </div>

              <div className='h-[60px] w-[200px] px-[15px] bg-[#212226] flex items-center gap-[10px]'>
                <img src={InsuredExpertIcon} alt="InsuredExpert-Icon" className='h-[45px] w-[45px] rounded-full' />
                <p className='text-[#FFFFFF] text-[14px] font-bold leading-[17px]'>Insured expert</p>
              </div>

              <div className='h-[60px] w-[200px] px-[15px] bg-[#212226] flex items-center gap-[10px]'>
                <img src={FlatRateIcon} alt="FlatRate-Icon" className='h-[45px] w-[45px] rounded-full' />
                <p className='text-[#FFFFFF] text-[14px] font-bold leading-[17px]'>Flat rate</p>
              </div>

              <div className='h-[60px] w-[200px] px-[15px] bg-[#212226] flex items-center gap-[10px]'>
                <img src={AvailableIcon} alt="Available-Icon" className='h-[45px] w-[45px] rounded-full' />
                <p className='text-[#FFFFFF] text-[14px] font-bold leading-[17px]'>24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
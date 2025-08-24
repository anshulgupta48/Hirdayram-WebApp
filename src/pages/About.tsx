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
      <div className='h-[330px] sm:h-[450px] w-full pt-[100px] not-found-bg flex flex-col justify-center items-center gap-[10px] relative'>
        <div className='absolute left-0 top-0 h-full w-full bg-[#16171A] opacity-85'></div>
        <h2 className='text-[#FFFFFF] text-[30px] font-semibold leading-none z-10'>About</h2>
        <div className='text-[#FFFFFF] text-[10px] z-10'><NavLink to='/'>Hirdayram</NavLink> / About</div>
      </div>

      <div className='min-h-[600px] w-full px-[30px] py-[50px] lg:p-0 bg-[#FFFFFF] flex flex-col lg:flex-row items-center sm:gap-[70px] lg:gap-[40px] overflow-hidden'>
        <div className='min-h-[400px] sm:min-h-[400px] lg:min-h-[600px] w-full lg:w-[40%] xl:w-[48%] lg:py-[100px] flex justify-center lg:justify-end relative'>
          <img src={AboutOverlay1} alt="About-Overlay-1" className='absolute left-0 top-[-105px] sm:top-[50px] h-[450px] w-[300px] topToDownAnimation' />

          <div className='relative'>
            <img src={AboutBanner4} alt="About-Banner-4" className='h-[300px] sm:h-[350px] w-[250px] sm:w-[300px] relative z-20' />
            <img src={AboutBanner5} alt="About-Banner-5" className='absolute left-[-40px] sm:left-[-50px] bottom-[50px] sm:bottom-[-25px] h-[180px] sm:h-[280px] w-[170px] sm:w-[220px] z-20' />
            <img src={AboutOverlay2} alt="About-Overlay-2" className='absolute right-[-23px] top-[-20px] h-[160px] w-[160px] z-10' />

            <div className='absolute right-[50px] bottom-[80px] sm:bottom-[15px] h-[70px] w-[200px] pl-[20px] experience-btn-bg flex flex-col justify-center items-center pulseAnimation z-30'>
              <h4 className='text-[#16171A] text-[28px] font-semibold leading-none'>35+</h4>
              <p className='text-[#727272] text-[10px]'>Years of experience</p>
            </div>
          </div>
        </div>

        <div className='min-h-[400px] lg:min-h-[600px] w-full lg:w-[58%] xl:w-[50%] flex justify-center lg:justify-end xl:justify-center items-center relative left-[40px] sm:left-0'>
          <div className='max-w-[320px] sm:max-w-[440px] flex flex-col gap-[10px] relative right-[50px]'>
            <p className='text-[#727272] text-[11px] font-medium uppercase'>We are Hirdayram Electric Company</p>

            <h3 className='text-[#16171A] text-[28px] sm:text-[32px] font-bold leading-[32px] sm:leading-[38px]'>Empowering Tomorrow With Smarter Electrical Solutions</h3>
            <p className='mt-[5px] text-[#727272] text-[11px]'>Hirdayram deals in all type of Electrical Installations in Commercial and Industrial Projects. We Design, Supply and Install the electrical Installations as per the requirements of client. We have experience in all facets of electrical service from large Commercial / Industrial projects to Installing light fixtures and its maintenance.</p>

            <div className='mt-[10px] pb-[15px] border-b border-solid border-[#F0F0F0] flex flex-col sm:flex-row sm:items-center gap-[30px]'>
              <div className='flex items-center gap-[15px]'>
                <img src={ExpertElectricianIcon} alt="Expert-Electrician-Icon" className='h-[60px] w-[60px]' />
                <p className='text-[#16171A] text-[15px] font-bold'>Expert <br /> electrician</p>
              </div>

              <img src={TriangleShapeIcon} alt="Triangle-Icon" className='hidden sm:flex h-[15px] w-[20px]' />

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
              <NavLink to='/contact' className='h-[36px] w-[125px] bg-[#16171A] btn-hover-reverse flex justify-center items-center relative'>
                <span className='text-[#FFFFFF] text-[11px] uppercase font-medium z-10'>Know More</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className='min-h-[550px] lg:min-h-[600px] w-full services-bg flex flex-col justify-center items-center gap-[40px] relative services-container'>
        <img src={ServicesOverlay} alt="Services-Overlay" className='hidden lg:flex absolute right-0 top-[40px] h-[125px] w-[125px] topToDownAnimation' />

        <div className='px-[10px] sm:px-0 flex flex-col gap-[5px]'>
          <div className='flex justify-center items-center gap-[3px]'>
            <IoIosFlash className='text-[#DD0733] text-[16px]' />
            <p className='text-[#727272] text-[12px] font-medium uppercase'>Hirdayram Services</p>
          </div>

          <h3 className='w-full sm:w-[560px] text-[#16171A] text-[30px] sm:text-[36px] font-bold text-center leading-[34px] sm:leading-[40px]'>Outstanding power plant, engineering & residential services</h3>
        </div>

        <div className='w-[80%] flex justify-between items-center gap-[30px] relative left-[20px] sm:left-0'>
          <Swiper onSwiper={(swiper) => (servicesCarouselRef.current = swiper)} slidesPerView={window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1} spaceBetween={30} speed={1200} loop={true} modules={[Pagination, Navigation]} className='mySwiper' style={{ width: window.innerWidth > 1024 ? '840px' : window.innerWidth > 640 ? '550px' : '300px' }}>
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

      <div className='min-h-[500px] w-full pt-[30px] sm:pt-[50px] lg:pt-0 bg-[#1D1E22] flex flex-col lg:flex-row items-center gap-[30px] lg:gap-0'>
        <div className='min-h-[250px] sm:min-h-[400px] lg:min-h-[500px] h-full w-[80%] sm:w-[70%] md:w-[70%] lg:w-[48%] choose-us-bg-2 relative'>
          <div className='absolute right-[100px] bottom-[120px] h-[100px] w-[250px] bg-[#FFFFFF] hidden sm:flex flex-col justify-center items-center pulseAnimation z-10'>
            <p className='text-[#16171A] text-[14px]'>For Emergency</p>
            <a href="tel:9140993955" className='text-[#DD0733] text-[18px]'>+91 9140993955</a>
          </div>
        </div>

        <div className='min-h-[580px] sm:min-h-[400px] lg:min-h-[500px] h-full w-full sm:w-auto lg:pl-[70px] flex justify-center md:justify-start items-center'>
          <div className='w-[80%] sm:max-w-[450px] flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-[3px]'>
              <p className='text-[#9F9F9F] text-[12px] uppercase font-medium'>Why Choose our Hirdayram</p>
              <h3 className='text-[#FFFFFF] text-[30px] sm:text-[35px] font-semibold leading-[35px]'>Great reason for the people choose Hirdayram</h3>
            </div>

            <p className='text-[#FFFFFFA3] text-[12px]'>Professional, reliable, accountable, experienced, on time work completion, in house engineering and designing, fully customer centric.</p>

            <div className='w-full sm:w-[450px] flex flex-col sm:flex-row sm:items-center gap-[15px] flex-wrap'>
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
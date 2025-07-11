import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosFlash } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import { ImQuotesRight } from 'react-icons/im';
import { FaArrowRightLong } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import { supabase } from '../utils/supabase';
import { blogsData, clientReviewsData, servicesData } from '../utils/constants';
import type { HomePageProps } from '../utils/types';
import { HeroOverlay, AboutBanner1, AboutBanner2, AboutBanner3, ExpertElectricianIcon, SafetyAssuranceIcon, TriangleShapeIcon, ServicesOverlay, ChooseUsBanner1, ChooseUsOverlay1, ChooseUsOverlay2, CustomSupportIcon, InsuredExpertIcon, FlatRateIcon, AvailableIcon } from '../assets/export';

const Home: React.FunctionComponent<HomePageProps> = ({ setSelectedServiceDetail }) => {
  const servicesCarouselRef = useRef<SwiperCore | null>(null);
  const clientReviewsCarouselRef = useRef<SwiperCore | null>(null);
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (servicesCarouselRef.current && clientReviewsCarouselRef.current) {
      interval = setInterval(() => {
        servicesCarouselRef.current?.slideNext();
        clientReviewsCarouselRef.current?.slideNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, []);

  const handleServiceDetails = (selectedIndex: number) => {
    setSelectedServiceDetail(selectedIndex);
    navigate('/services');
  };

  const handleEmailSubmit = async () => {
    try {
      const { data, error } = await supabase.from('Contact Form').insert([
        { 'Email': email },
      ]).select();

      if (data) {
        toast.success('Email Submitted Successfully', { duration: 4000 });
      }
      else if (error) {
        console.error('Error inserting data:', error);
        toast.error('Something went Wrong', { duration: 4000 });
      }
    } catch (error) {
      console.error('Error inserting data:', error);
      toast.error('Something went Wrong', { duration: 4000 });
    } finally {
      setEmail('');
    }
  };

  return (
    <div className='flex flex-col font-sans'>
      <div className='min-h-[600px] w-full pt-[200px] pb-[100p] px-[200px] hero-bg flex flex-col gap-[30px] relative'>
        <img src={HeroOverlay} alt="Hero-Overlay" className='absolute right-0 bottom-0 w-[50%]' />
        <h2 className='w-[470px] text-[#16171A] text-[65px] font-bold leading-[65px]'>Electricity is really organized just ligh<span className='text-[#DD0733]'>ting</span></h2>
        <p className='w-[520px] text-[#727272] text-[14px]'>Expert & Experienced Electrician for Residential to Commercial to Service with 100% satisfaction guarantee</p>

        <button className='h-[40px] w-[155px] bg-[#DD0733] btn-hover flex justify-center items-center relative'>
          <span className='text-[#FFFFFF] text-[12px] uppercase font-medium z-10'>Discover More</span>
        </button>
      </div>

      <div className='min-h-[600px] mx-[10px] about-bg flex items-center gap-[40px] overflow-hidden' style={{ width: 'calc(100% - 20px)' }}>
        <div className='h-full w-[50%] flex justify-end items-center'>
          <div className='max-w-[385px] flex flex-col gap-[10px] relative right-[50px]'>
            <div className='flex items-center gap-[3px]'>
              <IoIosFlash className='text-[#DD0733] text-[16px]' />
              <p className='text-[#727272] text-[12px] font-medium uppercase'>We are Hirdayram Engineering Organization</p>
            </div>

            <h3 className='text-[#16171A] text-[35px] font-bold leading-[38px]'>One Stop Electrical & Renewable Energy Solutions</h3>
            <p className='mt-[5px] text-[#727272] text-[12px]'>We provide electrical maintenance, motor rewinding, electrical EPC, lighting & CCTV camera, cabling and transmission line erection and commissioning services. </p>
            <p className='mt-[5px] text-[#DD0733] text-[14px]'>We create experience and build products that make business grow</p>

            <div className='mt-[10px] pb-[15px] border-b border-solid border-[#F0F0F0] flex items-center gap-[30px]'>
              <div className='flex items-center gap-[15px]'>
                <img src={ExpertElectricianIcon} alt="Expert-Electrician-Icon" className='h-[60px] w-[60px]' />
                <p className='w-[80px] text-[#16171A] text-[15px] font-bold'>Expert electrician</p>
              </div>

              <img src={TriangleShapeIcon} alt="Triangle-Icon" className='h-[15px] w-[20px]' />

              <div className='flex items-center gap-[15px]'>
                <img src={SafetyAssuranceIcon} alt="Safety-Assurance-Icon" className='h-[60px] w-[60px]' />
                <p className='w-[80px] text-[#16171A] text-[15px] font-bold'>Safety assurance</p>
              </div>
            </div>

            <div className='pt-[15px] flex items-center gap-[80px]'>
              <button className='h-[36px] w-[125px] bg-[#16171A] btn-hover-reverse flex justify-center items-center relative'>
                <span className='text-[#FFFFFF] text-[11px] uppercase font-medium z-10'>Know More</span>
              </button>
            </div>
          </div>
        </div>

        <div className='h-full w-[50%] flex justify-center relative'>
          <img src={AboutBanner1} alt="About-Banner3" className='absolute left-[-20px] top-[50px] h-[120px] w-[120px] animate-spin z-10' style={{ animationDuration: '10s' }} />
          <img src={AboutBanner2} alt="About-Banner2" className='h-[358px] w-[334px]' />
          <img src={AboutBanner3} alt="About-Banner3" className='absolute left-0 top-[220px] h-[188px] w-[284px] z-10' />
        </div>
      </div>

      <div className='min-h-[600px] w-full services-bg flex flex-col justify-center items-center gap-[40px] relative services-container'>
        <img src={ServicesOverlay} alt="Services-Overlay" className='absolute right-0 top-[40px] h-[125px] w-[125px] topToDownAnimation' />

        <div className='flex flex-col gap-[5px]'>
          <div className='flex justify-center items-center gap-[3px]'>
            <IoIosFlash className='text-[#DD0733] text-[16px]' />
            <p className='text-[#727272] text-[12px] font-medium uppercase'>Hirdayram Services</p>
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

      <div className='min-h-[600px] w-full choose-us-bg flex gap-[30px] relative'>
        <div className='h-full w-[50%] pt-[80px] flex justify-end'>
          <div className='max-w-[450px] flex flex-col gap-[30px]'>
            <img src={ChooseUsOverlay1} alt="ChooseUs-Overlay-1" className='absolute left-[50px] bottom-[50px] h-[90px] w-[170px] leftToRightAnimation z-10' />

            <div className='flex flex-col gap-[3px]'>
              <p className='text-[#9F9F9F] text-[12px] uppercase font-medium'>Why Choose our Hirdayram</p>
              <h3 className='text-[#FFFFFF] text-[35px] font-semibold leading-[35px]'>Great reason for the people choose Hirdayram</h3>
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

        <div className='w-[50%] flex justify-end overflow-hidden relative'>
          <img src={ChooseUsBanner1} alt="ChooseUs-Banner-1" className='h-[417px] w-[497px]' />
          <img src={ChooseUsOverlay2} alt="ChooseUs-Overlay-2" className='absolute right-0 bottom-0 h-[337px] w-[617px] leftToRightAnimation z-10' />
          <div className='absolute right-[-150px] bottom-[-60px] h-[500px] w-[350px] bg-[#16171A] rotate-[47deg] z-20'></div>
        </div>
      </div>

      <div className='min-h-[460px] w-full px-[70px] clients-review-bg flex flex-col justify-center items-center gap-[40px] clients-review-container'>
        <div className='flex flex-col gap-[5px]'>
          <div className='flex justify-center items-center gap-[3px]'>
            <IoIosFlash className='text-[#DD0733] text-[16px]' />
            <p className='text-[#727272] text-[12px] font-medium uppercase'>Our Clients Review</p>
          </div>

          <h3 className='w-[450px] text-[#16171A] text-[36px] font-bold text-center leading-[40px]'>What they're talking about Hirdayram Services</h3>
        </div>

        <div className='w-full flex items-center gap-[80px]'>
          <Swiper onSwiper={(swiper) => (clientReviewsCarouselRef.current = swiper)} slidesPerView={2} spaceBetween={80} speed={1200} loop={true} modules={[Pagination, Navigation]} className='mySwiper'>
            {clientReviewsData.map((item, index) => (
              <SwiperSlide className='max-w-[350px]' key={index}>
                <div className='h-[180px] w-[350px] pl-[60px] pr-[10px] clients-review-box-bg flex flex-col justify-center gap-[20px] relative'>
                  <p className='w-[270px] text-[#727272] text-[12px] leading-[18px]'>{item.description}</p>

                  <div className='flex justify-between items-center gap-[40px]'>
                    <div className='absolute left-[-45px] top-[40px] h-[100px] w-[100px]'>
                      <img src={item.image} alt={`Client-${index}`} className='h-[90px] w-[90px] rounded-full z-10' />
                      <div className='absolute left-[25px] top-[65px] h-[40px] w-[40px] bg-[#DD0733] rounded-full flex justify-center items-center z-20'>
                        <ImQuotesRight className='text-[#FFFFFF] text-[14px]' />
                      </div>
                    </div>

                    <div className='flex flex-col gap-[3px]'>
                      <h5 className='text-[#16171A] text-[14px] font-bold leading-none'>{item.name}</h5>
                      <p className='text-[#727272] text-[11px] font-medium'>{item.role}</p>
                    </div>

                    <div className='flex items-center gap-[3px]'>
                      <FaStar className='text-[#DD0733] text-[12px]' />
                      <FaStar className='text-[#DD0733] text-[12px]' />
                      <FaStar className='text-[#DD0733] text-[12px]' />
                      <FaStar className='text-[#DD0733] text-[12px]' />
                      <FaStar className='text-[#DD0733] text-[12px]' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className='min-h-[600px] w-full pt-[70px] bg-[#FFFFFF] flex flex-col items-center gap-[40px] relative'>
        <div className='flex flex-col gap-[5px]'>
          <div className='flex justify-center items-center gap-[3px]'>
            <IoIosFlash className='text-[#DD0733] text-[16px]' />
            <p className='text-[#727272] text-[12px] font-medium uppercase'>Our Article and Blog</p>
          </div>

          <h3 className='w-[400px] text-[#16171A] text-[32px] font-bold text-center leading-[40px]'>Latest news & articles from the blog</h3>
        </div>

        <div className='w-[840px] flex justify-between items-center gap-[30px]'>
          {blogsData.map((item, index) => (
            <div className='h-[280px] w-[260px] bg-[#FFFFFF] flex flex-col blogs-box-shadow group' key={index}>
              <img src={item.banner} alt="Blog-Banner" className='h-[170px] w-[260px]' />
              <h4 className='px-[15px] pt-[15px] text-[#16171A] text-[16px] font-bold'>{item.title}</h4>

              <div className='mt-[15px] px-[15px] flex items-center gap-[5px]'>
                <p className='text-[#DD0733] text-[10px] font-semibold uppercase'>Read More</p>
                <FaArrowRightLong className='text-[#DD0733] text-[12px] relative left-0 bottom-[1px] group-hover:left-[5px] transition-all duration-300' />
              </div>
            </div>
          ))}
        </div>

        <div className='absolute bottom-[-50px] left-[50%] translate-x-[-50%] h-[100px] w-[800px] px-[40px] bg-[#DD0733] flex justify-between items-center gap-[60px] z-20'>
          <h3 className='w-[400px] text-[#FFFFFF] text-[22px] font-bold leading-[28px]'>Dedicated to bring the world powerful energy solutions</h3>

          <div className='h-[60px] w-[400px] px-[10px] border-1 border-solid border-[#E38B9D] flex items-center gap-[5px]'>
            <input type="text" placeholder='Email address' className='h-full w-full placeholder:text-[#FFFFFF] text-[#FFFFFF] text-[10px] outline-none' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className='h-[40px] min-w-[155px] bg-[#FFFFFF] btn-hover flex justify-center items-center relative group' onClick={handleEmailSubmit}>
              <span className='text-[#16171A] group-hover:text-[#FFFFFF] text-[10px] uppercase font-semibold z-10'>Check Availability</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
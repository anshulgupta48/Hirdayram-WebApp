import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosFlash } from 'react-icons/io';
import { FaFileExcel } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { projectsData } from '../utils/constants';

const Projects: React.FunctionComponent = () => {
  const [selectedPaginationPage, setSelectedPaginationPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(projectsData.length / rowsPerPage);

  const handlePaginationPrevious = () => {
    if (selectedPaginationPage > 1) {
      setSelectedPaginationPage(selectedPaginationPage - 1);
    }
  };

  const handlePaginationClick = (selectedPage: number) => {
    if (selectedPage >= 1 && selectedPage <= totalPages) {
      setSelectedPaginationPage(selectedPage);
    }
  };

  const handlePaginationNext = () => {
    if (selectedPaginationPage < totalPages) {
      setSelectedPaginationPage(selectedPaginationPage + 1);
    }
  };

  return (
    <div className='flex flex-col font-sans'>
      <div className='h-[330px] sm:h-[450px] w-full pt-[100px] not-found-bg flex flex-col justify-center items-center gap-[10px] relative'>
        <div className='absolute left-0 top-0 h-full w-full bg-[#16171A] opacity-85'></div>
        <h2 className='text-[#FFFFFF] text-[30px] font-semibold leading-none z-10'>Projects</h2>
        <div className='text-[#FFFFFF] text-[10px] z-10'><NavLink to='/'>Hirdayram</NavLink> / Projects</div>
      </div>

      <div className='min-h-[500px] lg:min-h-[600px] w-full py-[30px] sm:py-[50px] lg:p-[70px] bg-[#F4F4F4] flex flex-col justify-center items-center gap-[30px]'>
        <div className='flex flex-col gap-[5px]'>
          <div className='flex justify-center items-center gap-[3px]'>
            <IoIosFlash className='text-[#DD0733] text-[16px]' />
            <p className='text-[#727272] text-[12px] font-medium uppercase'>Our Hirdayram Projects</p>
          </div>

          <h3 className='w-full sm:w-[450px] text-[#16171A] text-[26px] sm:text-[30px] md:text-[36px] font-bold text-center leading-[40px]'>Check our latest projects</h3>
        </div>

        <div className='min-h-[348px] w-[92%] lg:w-[80%] bg-[#FFFFFF] border border-solid border-[#E6E6E6] rounded-[5px] services-box-shadow flex flex-col'>
          <div className='min-h-[50px] w-full px-[10px] sm:px-[20px] flex justify-between items-center gap-[40px]'>
            <p className='text-[#16171A] text-[16px] font-medium'>Active Projects</p>

            <div className='h-[30px] w-[121px] bg-[#F2EDEB] hover:bg-[#DD0733] rounded-[7px] text-[#DD0733] hover:text-[#FFFFFF] text-[13px] font-medium transition-all duration-300 flex justify-center items-center gap-[5px] cursor-pointer'>
              <FaFileExcel />
              <p>Export Report</p>
            </div>
          </div>

          <div className='min-h-[252px] sm:min-h-[280px] max-h-[252px] sm:max-h-[280px] w-full overflow-x-auto overflow-y-hidden flex flex-col relative pb-[30px]'>
            <div className='min-h-[42px] min-w-max w-full px-[10px] sm:px-[20px] bg-[#F5F5F5] flex items-center gap-[10px] sm:gap-[20px]'>
              <div className='min-w-[45px] w-[10%] text-[#16171A] text-[14px] font-medium flex justify-start items-center'>S.No.</div>
              <div className='min-w-[110px] w-[20%] text-[#16171A] text-[14px] font-medium flex justify-start items-center'>Client Name</div>
              <div className='min-w-[250px] w-[55%] text-[#16171A] text-[14px] font-medium flex justify-start items-center'>Project Description</div>
              <div className='min-w-[100px] w-[15%] text-[#16171A] text-[14px] font-medium flex justify-center items-center'>Status</div>
            </div>

            {projectsData.map((item, index) => (
              ((index >= (selectedPaginationPage - 1) * rowsPerPage && index < (selectedPaginationPage) * rowsPerPage) && <div className='min-h-[42px] w-full px-[10px] sm:px-[20px] border-b border-solid border-[#E2E2E2] flex items-center gap-[10px] sm:gap-[20px] relative group cursor-default' key={index}>
                <div className='absolute bottom-[-24px] flex justify-center items-center' style={{ width: 'calc(100% - 40px)' }}>
                  <div className='min-h-[30px] h-max w-max max-w-full py-[5px] bg-[#7C7C7C] rounded-[5px] z-10 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <div className='h-full w-full relative'>
                      <p className='h-full w-full text-[#FFFFFF] text-[12px] flex justify-center items-center px-[10px]'>{item.description}</p>
                      <div className='absolute left-[50%] top-[-9px] h-[10px] w-[10px] bg-[#7C7C7C] rotate-45'></div>
                    </div>
                  </div>
                </div>

                <div className='min-w-[45px] w-[10%] text-[#888888] text-[13px] font-medium flex justify-start items-center'>{index + 1}.</div>
                <div className='min-w-[110px] w-[20%] text-[#888888] text-[13px] font-medium flex justify-start items-center'>{item.client}</div>

                <div className='min-w-[250px] w-[55%] text-[#888888] text-[13px] font-medium whitespace-nowrap text-ellipsis overflow-hidden flex justify-start items-center'>
                  <p className='h-full w-full whitespace-nowrap text-ellipsis overflow-hidden'>{item.description}</p>
                </div>

                <div className='w-[15%] min-w-[100px] flex justify-center items-center'>
                  <div className='h-[26px] w-[90px] bg-[#D8F4E4] rounded-[5px] text-[#175030] text-[12px] font-medium flex justify-center items-center'>Completed</div>
                </div>
              </div>)
            ))}
          </div>

          <div className='min-h-[44px] w-full px-[10px] sm:px-[20px] flex justify-end sm:justify-between items-center gap-[20px] sm:gap-[40px]'>
            <p className='hidden sm:flex min-w-[140px] text-[#888888] text-[14px] font-normal'>Showing {(selectedPaginationPage - 1) * rowsPerPage + 1} to {(selectedPaginationPage * rowsPerPage > projectsData.length) ? projectsData.length : selectedPaginationPage * rowsPerPage} of {projectsData.length} entries</p>

            <div className='flex items-center gap-[7px] z-20'>
              <MdOutlineKeyboardArrowLeft className='text-[#666] text-[20px] hover:brightness-75 transition-all duration-300 cursor-pointer' onClick={handlePaginationPrevious} />

              {[1, 2, 3, 4, 5].map((item, index) => (
                (item <= totalPages) && <div className={`h-[26px] w-[26px] rounded-[5px] text-[14px] transition-all duration-300 cursor-pointer flex justify-center items-center ${selectedPaginationPage === item ? 'bg-[#DD0733] text-[#FFFFFF]' : 'text-[#2C2C2C]'}`} key={index} onClick={() => handlePaginationClick(item)}>
                  {item}
                </div>
              ))}

              <MdOutlineKeyboardArrowRight className='text-[#666] text-[20px] hover:brightness-75 transition-all duration-300 cursor-pointer' onClick={handlePaginationNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
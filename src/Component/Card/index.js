import React from "react";
import Netflix from "../../netflix_icon.png";
import Button from "../Button";

const Card = (props) => {
  const { data } = props;
  const {
    title,
    companyName,
    industry,
    location,
    remoteType,
    shift,
    experienceMin,
    experienceMax,
    salaryMin,
    salaryMax,
    totalEmployee,
    applyType,
  } = data;
  return (
    <div className='w-1/2 my-2 max-w-xl lg:w-1/2 md:w-full sm:w-full'>
      <div className='flex flex-row border border-[#DADEDF] py-4 px-6 bg-white shadow-md rounded-md overflow-hidden'>
        <img className='w-12 h-12' src={Netflix} alt='Card image' />
        <div className='pl-2'>
          <div>
            <h2 className='text-2xl font-normal'>{title}</h2>
            <h2 className='text-base font-normal'>{`${companyName} - ${industry}`}</h2>
            <h2 className='text-base font-normal text-gray-400'>{`${location}(${remoteType})`}</h2>
          </div>
          <div className='pt-6'>
            <h2 className='text-base font-normal'>{shift}</h2>
            <h2 className='text-base font-normal'>{`Experience(${experienceMin} - ${experienceMax} years)`}</h2>
            <h2 className='text-base font-normal'>{`INR ${salaryMin} - ${salaryMax} / Month`}</h2>
            <h2 className='text-base font-normal'>{`${totalEmployee} employees`}</h2>
          </div>
          <div className='pt-6'>
            {applyType === 'quick' && <Button variant='contained'>Apply Now</Button>}
            {applyType === 'external' && <Button variant='outlined'>External Apply</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

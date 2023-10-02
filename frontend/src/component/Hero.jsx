import React from 'react';
import image1 from '../assets/images/grayhair.png';
import image2 from '../assets/images/pointing.png';
import image3 from '../assets/images/phonecheck.png';
import pressing2 from '../assets/images/pressing2.png';
import pointer2 from '../assets/images/pointer2.png';

import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className='max-w-[1440px] mx-auto h-[500px] top-[104px] bg-white justify-center py-[4rem] relative'>
      <div className='ml-[5%] grid md:flex'>
        <div className=' p-4'>
          <h3 className='text-3xl md:text-6xl font-bold text-[#120B48]'>
            Show Them, <br /> Dont Just Tell Them.
          </h3>
          <p className='text-[#000000BF] my-6 text-xl'>
            Help your friends and loved ones by creating and sending <br />
            videos on how to get things done on a website.
          </p>

          <button className='bg-[#120B48] w-[194px] h-[50px] cursor-pointer my-6 text-white p-4 rounded-md'>
            Install HelpMeOut
          </button>
          <HiArrowRight className='font-bold z-10 w-[20px] mx-[10.6em] absolute mt-[-3.3rem] text-white' />
        </div>

        <div className='imagesdiv grid relative'>
          <div className='grid grid-cols-2 grid-rows-6 h-[200vh]'>
            <img className='row-span-1 object-cover p-2 w-full h-full z-10' src={image1} alt='/' />
            <img className='row-span-2 object-cover p-2 w-full h-full z-10 relative' src={image3} alt='/' />
            <img className='row-span-1 object-cover p-2 w-full h-full z-10' src={image2} alt='/' />
            <img className='absolute bottom-[72%] left-[18%] transform translate-x-[-50%] translate-y-[50%] z-0' src={pointer2} alt='pointer2' />
            <img className='absolute bottom-[92%] left-[80%] transform translate-x-[-50%] translate-y-[50%] z-0' src={pressing2} alt='pointer2' />
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

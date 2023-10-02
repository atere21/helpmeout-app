import React, { useState } from 'react';
import Logo from "../assets/images/logofull.png";
import { Link, animateScroll as scroll } from 'react-scroll';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(false);

  return (
    <div className='w-full h-[80px] z-[100] bg-white fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between  items-center w-full h-full'>
        <div className='flex items-center mx-12'>
    
          <img className='' src={Logo} alt='/' />
        
        </div>
        <div className='hidden md:flex justify-center items-center'>
          <ul className='flex justify-between gap-16'>
            <li className='text-[#120B48] font-bold cursor-pointer hover:text-[#453b97]'><Link to="features" smooth={true} duration={500}>Features</Link></li>
            <li className='text-[#120B48] font-bold cursor-pointer hover:text-[#453b97]'><Link to="works" smooth={true} duration={500}>How it works</Link></li>
            </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <a href='/getstarted'>
          <p className='px-8 py-3 text-[#120B48] font-bold cursor-pointer hover:text-[#453b97]'>Get Started</p>
          </a>
        </div>
        <div className='md:hidden mr-4 cursor-pointer' onClick={handleClick}>
          {!nav ? <HiMenuAlt2 className='w-5' /> : <AiOutlineCloseCircle className='w-5' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-white p-4 w-full h-[200px] px-8'}>
      <li className='border-b-2 border-zinc-300 w-full p-4 text-[#120B48] '><Link onClick={handleClose} to="features" smooth={true} duration={500}>Features</Link></li>
        <li className='border-b-2 border-zinc-300 w-full p-4 text-[#120B48] '><Link onClick={handleClose} to="works" smooth={true} offset={-200} duration={500}>How it works</Link></li>
    
        <li className='border-b-2 border-zinc-300 w-full p-4 text-[#120B48] '><Link onClick={handleClose} to="/getstarted" smooth={true} offset={-200} duration={500}>Get Started</Link></li>
      
      </ul>
    </div>
  );
};

export default Navbar;

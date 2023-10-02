import React from 'react';
import logo from "../assets/images/logohelp.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div name="footer" className='max-w-[1440px] h-[auto] bg-[#120B48] text-white px-2 mt-[83rem] md:mt-0 relative'>
      <div className=' md:mx-auto grid md:grid-cols-6 py-8 mx-[2rem]'>
        <div className='md:col-span-2 flex items-center justify-center md:justify-start'>
          <img className='my-2 md:my-0 mx-12' src={logo} alt='/' />
        </div>
        <div className='md:col-span-4 flex flex-col md:flex-row md:justify-between w-full md:w-[80%] mt-4 md:mt-0'>
          <div className='mb-6 md:mb-0'>
            <h6 className='font-bold uppercase pt-2 pb-2'>Menu</h6>
            <ul>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Home</li>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Converter</li>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>How it Works</li>
            </ul>
          </div>
          <div className='mb-6 md:mb-0'>
            <h6 className='font-bold uppercase pt-2 pb-2'>About Us</h6>
            <ul>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>About</li>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Contact Us</li>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h6 className='font-bold uppercase pt-2 pb-2'>Screen Record</h6>
            <ul>
              <Link to='/'><li className='py-1 hover:text-gray-300 cursor-pointer'>Browser Window</li></Link>
              <Link to='/'><li className='py-1 hover:text-gray-300 cursor-pointer'>Desktop</li></Link>
              <Link to='/'><li className='py-1 hover:text-gray-300 cursor-pointer'>Application</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;

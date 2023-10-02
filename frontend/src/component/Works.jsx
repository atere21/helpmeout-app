import React from 'react'
import one from "../assets/images/one.png"
import two from "../assets/images/two.png"
import three from "../assets/images/three.png"
import record from "../assets/images/recording.png"

const Works = () => {
  return (
    <div name="works"
    className='max-w-[1440px] mx-auto h-[400px] bg-white justify-center items-center 
          mt-[12rem] md:mt-[8rem] mb-[18rem] relative '>
        <div className='grid w-full h-full mx-auto p-4 my-18'>
        <div className='text-center '>
            <h2 className='text-2xl my-12 md:text-4xl font-bold text-[#141414]'>How it works</h2>
        </div>

        <div className='grid  md:grid-cols-3'>
            <div className='grid text-center justify-center mx-auto'>
                 <img className='w-12 h-12 text-center justify-center mx-auto' src={one} alt='/'/>
                 <h2 className='text-[#1B233D] my-8 font-semibold text-xl'>Record Screen</h2>
                 <p className='w-[400px]'>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                 <img className='' src={record} alt='/'/>
            </div>

            <div className='grid text-center justify-center mx-auto'>
                 <img className='w-12 h-12 text-center justify-center mx-auto' src={two} alt='/'/>
                 <h2 className='text-[#1B233D] my-8 text-xl font-semibold'>Share Your Recording</h2>
                 <p className='w-[400px]'>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                <img src={record} alt='/'/>
              </div>

            <div className='grid text-center justify-center mx-auto'>
                 <img className='w-12 h-12 text-center justify-center mx-auto' src={three} alt='/'/>
                 <h2 className='text-[#1B233D] text-xl my-8 font-semibold'>Learn Effortlessly</h2>
                 <p className='w-[400px]'>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                 <img src={record} alt='/'/>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Works
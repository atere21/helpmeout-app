import React from 'react';
import note from "../assets/images/note.png";
import copy from "../assets/images/copy.png";
import whatsapp from "../assets/images/whatsapp.png";
import telegram from "../assets/images/telegram.png";
import facebook from "../assets/images/face.png";
import video from "../assets/images/videoplay.png";


const Ready = () => {
  return (
    <div className='max-w-[1440px] mx-auto top-[104px] bg-white justify-center py-4 px-4 md:px-0 relative '>
      <div className='justify-center py-4 px-4 md:px-0 relative '>
        <div className='grid md:flex'>
      <div className='md:w-[50%] mx-4 md:mx-16 '>
        <h2 className='text-4xl font-bold text-[#120B48]'>Your Video Is Ready!</h2>
        <div className='my-4'>
          <p>Name</p>
          <div className='flex items-center'>
            <p className='my-2 text-[#413C6D] text-xl'>Untitled_Video_20232509</p>
            <img className='w-6 h-6 my-[9px] ml-2' src={note} alt='Note' />
          </div>
          <div className="flex items-center border border-gray-300 rounded-md w-80">
            <input
              type="email"
              placeholder="Enter email of receiver"
              className="w-full px-4 py-2 focus:outline-none bg-gray-100 rounded-md"
            />
            <div className="bg-[#605C84] text-white px-3 py-2 flex items-center rounded-md cursor-pointer">
              <span className="mr-1">Send</span>
            </div>
          </div>
        </div>

        <div>
          <p className='text-xl text-black mb-6'>Video Url</p>
          <div className="flex items-center border border-gray-300 rounded-lg w-80">
            <input
              type="text"
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
              className="w-full px-4 py-2 focus:outline-none bg-gray-100"
            />
            <div className="bg-transparent border border-gray-700 text-white px-3 py-2 flex items-center rounded-md cursor-pointer">
              <img
                src={copy}
                alt="Share Icon "
                className="w-4 h-4 mr-2 text-[#120B48]"
              />
              <span className="mr-1 text-[#120B48]">Copy</span>
            </div>
          </div>
        </div>

        <div className='my-4 font-bold'>
          Share your video
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 w-[60%]'>
          <button className="flex bg-white text-black font-semibold py-2 px-4 rounded-lg mb-4 border">
            <img className='mr-2' src={facebook} alt='/' />
            Facebook
          </button>

          <button className="flex bg-white border-r-gray-500 text-black font-semibold py-2 px-4 rounded-lg mb-4 border">
            <img className='mr-2' src={whatsapp} alt='/' />
            Whatsapp
          </button>

          <button className="flex bg-white text-black font-semibold py-2 px-4 rounded-lg mb-4 border">
            <img className='mr-2' src={telegram} alt='/' />
            Telegram
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className='md:w-[40%] w-full h-[30%] md:h-auto bg-white grid md:block mx-6'>
        {/* Video Embed Code */}
        
        <img src={video} alt='/'/>
        {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/your_video_id_here"
          title="Video Title"
          frameborder="0"
          allowfullscreen
        ></iframe> */}
        
        {/* Transcript Section */}
        <div className='mt-4 ]'>
          <h1 className='text-2xl font-semibold text-black mb-2'>Transcript</h1>
          {/* Language Selection */}
          <div className="flex items-center">
            <p className='mr-2'>Select Language:</p>
            <select
              className="px-2 py-1 bg-white rounded-md border border-gray-300 focus:outline-none"
              // Add language options here
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              {/* Add more languages */}
            </select>
          </div>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet velit
            eget nisl dignissim pulvinar.
          </p>
          {/* Add more transcript content here */}
        </div>
      </div>
      </div>
      
    </div>
    {/* <CreateAccount/> */}
    </div>
  );
}

export default Ready;

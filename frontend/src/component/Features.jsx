import React from 'react';
import hello from "../assets/images/hello.png";
import share from "../assets/images/share.png";
import revisit from "../assets/images/reshare.png";
import stop from "../assets/images/stop.png";
import { Link } from 'react-scroll';

const Features = () => {
  // Define an array of feature objects for mapping
  const features = [
    {
      image: stop,
      title: 'Simple Screen Recording',
      description: 'Effortless screen recording for everyone. Record with ease, no tech expertise required.',
      link: '/ready',
    },
    {
      image: share,
      title: 'Easy-to-Share URL',
      description: 'Share your recordings instantly with a single link. No attachments, no downloads.',
      link: '/ready',
    },
    {
      image: revisit,
      title: 'Revisit Recordings',
      description: 'Access and review your past content effortlessly. Your recordings, always at your fingertips.',
      link: '/ready',
    },
  ];

  return (
    <div name="features" className='max-w-[1440px] mx-auto h-[577px] bg-white justify-center items-center mt-[32rem] md:mt-[28rem] relative'>
      <div className='text-center '>
        <h2 className='text-2xl md:text-4xl font-bold text-[#120B48] items-center justify-center mx-auto'>Features</h2>
        <p className='my-4'>Key Highlights for our extension</p>
      </div>

      <div className='justify-between w-full gap-4 items-center m-4 grid md:flex'>
        <div className='grid p-4'>
          {/* Map over the features array and generate feature sections */}
          {features.map((feature, index) => (
            <div className='flex p-2' key={index}>
              <img className='w-8 h-8 mr-4 mt-2' src={feature.image} alt='/' />
              <div>
                
                <Link to="/feature.link">
                  <h2 className='text-[#1B233D] cursor-pointer font-bold text-2xl'>{feature.title}</h2>
                </Link>
                <p className='w-[70%]'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='object-cover md:w-[50%] w-full p-4 m-4'>
          <img className='h-[250px] md:h-[400px] w-full rounded-md object-cover' src={hello} alt='/' />
        </div>
      </div>
    </div>
  );
}

export default Features;

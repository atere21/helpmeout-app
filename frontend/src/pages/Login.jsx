import React from 'react';
import logo from "../assets/images/logofull.png";
import facebook from "../assets/images/face.png"
import google from "../assets/images/google.png"

const Login = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col mb-4">
      {/* Logo on the left */}
      <div className="flex justify-start">
        <a href='/'>
          <img src={logo} alt='Logo' className='w-35 h-12 mx-8 mt-8' />
        </a>
      </div>

      <div className="flex justify-center items-center flex-grow">
        <div className="p-8 rounded-lg shadow-lg w-[475px] h-[599px]">
          <div className="py-2">
            <h2 className="text-2xl font-semibold text-black mb-4 text-center">Login or Sign Up</h2>
            <p className='my-6 text-center'>Join millions of others in sharing successful <br/> moves on HelpMeOut.</p>

            {/* Google Login */}
            <button className="border border-gray-300 flex justify-center items-center flex-grow bg-white w-full text-black font-semibold py-2 px-4 rounded-lg mb-4">
              <img className='mr-2' src={google} alt='/'/>
              Continue with Google
            </button>

            {/* Facebook Login */}
            <button className="border border-gray-300 flex justify-center items-center flex-grow bg-white w-full text-black font-semibold py-2 px-4 rounded-lg mb-4">
              <img className='mr-2' src={facebook} alt='/'/>
              Continue with Facebook
            </button>

            <div className="flex items-center my-4">
              <div className="border-t border-gray-300 flex-grow"></div>
              <p className="text-gray-400 mx-2">or</p>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>

            {/* Email and Password */}
            <form>
              <div className="mb-4 my-16 justify-center items-center flex-grow">
                <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-900"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center">
                <button className="bg-[#120B48] hover:bg-blue-900 text-white py-2 px-4 rounded-lg w-full" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

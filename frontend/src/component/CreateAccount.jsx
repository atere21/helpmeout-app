import React from 'react'

const CreateAccount = () => {
  return (
    <div>
    <div className="max-w-[1440px] h-[317px] mx-auto bg-gray-100 py-4 my-[4rem] px-4 md:px-0 flex flex-col items-center justify-center">
      <p className="text-center text-xl font-bold text-gray-600 mb-4 p-4">
        To ensure the availability and privacy of your video,<br/> we recommend saving it to your account.
      </p>
      <button className="bg-[#120B48] hover:bg-blue-900 text-white py-2 px-4 rounded-lg mb-4">
        Save Video
      </button>
      <p className="text-center text-xl text-[#7E7E7E]">  
        Don’t have an account? 
    
        <span className="text-[#120B48] cursor-pointer hover:text-blue-800">Create account</span>
  
      </p>
    </div>
  
    </div>
  )
}

export default CreateAccount
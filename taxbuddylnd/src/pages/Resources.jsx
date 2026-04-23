import React from 'react'
import Dowmloads from '../components/ResourcesComp/Dowmloads'
import UsefulLinks from '../components/ResourcesComp/UsefulLinks'
import { assets } from '../assets/assets'

const Resources = () => {
  return (
    <div className="bg-gray-100">

      <div className="padding py-8 w-full">
      <Dowmloads />
      </div>

     <div className="bg-[#f9fafb] padding py-8 mt-10 w-full">
       <UsefulLinks />
     </div>
     <div className="bg-primary padding w-full py-8 mt-10 text-white flex flex-col items-center">
        
        <img src={assets.resoursesIcon} alt="" />
        <h3 className="text-[24px] font-medium mt-4">Want More Expert Resources?</h3>
        <p className="mt-2 max-w-[780px] text-center text-[16px]">Subscribe to our newsletter and get exclusive tax guides, updates on Nigerian tax law changes, and money-saving tips delivered in your inbox every month.</p>

       <div className="md:flex gap-4 mt-4 w-full max-w-[600px]">
         <input type="email" placeholder='Email Address' className="px-4 py-2 rounded-md text-white bg-[#d9e0ee71] outline-0 border-0 w-[60%]" />
         <button className="bg-white py-2 px-4 rounded-md text-primary text-medium md:mt-0 mt-4 w-full md:w-fit">Subscribe to Newsletter</button>
       </div>
    
        <span className='mt-4 text-[14px] text-medium'>Stay Updated on Nigerian Tax News</span>

     </div>
    </div>
  )
}

export default Resources
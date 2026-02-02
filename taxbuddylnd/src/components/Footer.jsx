import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-one-zero-black py-8 px-6'>
    <div className='grid md:grid-cols-5 grid-cols-2 gap-12 md:gap-6 text-gray-500'>
      <div className='col-span-2 max-w-[420px]'>
        <img src={assets.logo} className='w-52'/>
        <p className='text-gray-500 font-normal md:text-[18px]'>Simplify your Nigeria tax calculation/payment with our intelligent platform.</p>
        <div className='mt-8'>
        <input type="email" placeholder='Email Address' className='bg-white py-4 px-8 rounded mb-3 w-full' />
        <button className='bg-primary py-4 px-8 text-white rounded w-full'>Subscribe to NewsLetter</button>
      </div>
      </div>
      <div>
        <h3 className='text-primary mb-3'>Quick Links</h3>
        <ul>
            <li className='mb-2'>
                <Link to='/'>Home</Link>
            </li>
            <li className='mb-2'>
                <Link to='/services'>Services</Link>
            </li>
            <li className='mb-2'>
                <Link to='/about'>About</Link>
            </li>
            <li className='mb-2'>
                <Link to='/contact'>Contact</Link>
            </li>
            <li className='mb-2'>
                <Link to='/resources'>Resources</Link>
            </li>
        </ul>
      </div>
      <div>
        <h3 className="text-primary mb-3">Services</h3>
        <ul>
            <li className='mb-2'>
                <Link to='/services'>Tax Planning</Link>
            </li>
            <li className='mb-2'>
                <Link to='/services'>Tax Filling & Compliance</Link>
            </li>
            <li className='mb-2'>
                <Link to='/services'>Tax Audit Support</Link>
            </li>
            <li className='mb-2'>
                <Link to='/services'>Personal Tax Consulting</Link>
            </li>
            <li className='mb-2'>
                <Link to='/services'>Business Tax Strategy</Link>
            </li>
            <li className='mb-2'>
                <Link to='/services'>VAT & PAYE Management</Link>
            </li>
        </ul>
      </div>
      <div>
        <h3 className='text-primary mb-3'>Socials</h3>
        <div className="flex gap-4">
            <img src={assets.facebook} className='cursor-pointer' />
            <img src={assets.instagram} className='cursor-pointer' />
            <img src={assets.twitter} className='cursor-pointer' />
        </div>
      </div>
      
    </div>
    <p className='text-center mt-30'>©2025 TaxBuddy. All Rights Reserved. Built for Nigerian Tax Compliance.</p>
    </div>
  )
}

export default Footer

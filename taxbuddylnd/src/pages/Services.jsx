import React from 'react'
import Cards from '../components/ServicesComp/Cards'
import Why from '../components/ServicesComp/Why'

const Services = () => {
  return (
    <div className="bg-[#f9fafb] padding py-8 w-full">
      <h2 className="mb-3">
        Comprehensive Tax Services for Nigerian Businesses
      </h2>
      <p className="text-[#4a5565] md:text-[18px]  max-w-4xl">
        From startups to established corporations, we provide tailored tax solutions that keep you compliant and competitive.
      </p>
      <Cards />
      <Why />
    </div>
  )
}

export default Services
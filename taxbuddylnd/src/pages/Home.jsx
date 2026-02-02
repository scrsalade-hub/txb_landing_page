import React from 'react'
import Hero from '../components/HomeComp/Hero'
import Features from '../components/HomeComp/Features'
import HowItWorks from '../components/HomeComp/HowItWorks'
import Consult from '../components/HomeComp/Consult'
import Faq from '../components/HomeComp/Faq'
import Explore from '../components/HomeComp/Explore'

const Home = () => {
  return (
    <div className='bg-[#f9fafb]'>
      <Hero />
      <Features />
      <HowItWorks />
      <Consult />
      <Faq />
      <Explore />
    </div>
  )
}

export default Home

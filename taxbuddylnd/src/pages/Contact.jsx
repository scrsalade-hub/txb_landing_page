import React from 'react'
import { assets } from '../assets/assets'
import Inputs from '../components/ContactComp/Inputs'

const Contact = () => {
  const mapLocation = {
    address: "1245 Ikoyi Phase 2, Lagos, Nigeria",
    lat: 6.4485,
    lng: 3.4383,
    zoom: 16
  }

  return (
    <div className="h-full bg-white w-full pb-8">
      <img src={assets.contact_bg} className='w-full h-auto' alt="Contact background" />
      <Inputs />
      
      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 md:my-16">
        
        
        {/* Interactive Map Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Map using Google Maps Embed API */}
          <div className="relative h-96 w-full">
            <iframe
              title="TaxBuddy Office Location - Ikoyi Phase 2, Lagos"
              className="absolute top-0 left-0 w-full h-full border-0 text-primary"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Ikoyi+Phase+2,+Lagos,+Nigeria&center=${mapLocation.lat},${mapLocation.lng}&zoom=${mapLocation.zoom}`}
              allowFullScreen
              loading="lazy"
            ></iframe>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary">TaxBuddy Office</h3>
                  <p className="text-sm text-gray-600 mt-1">1245 Ikoyi Phase 2, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          
         </div>
      </div>  
    </div>
  )
}

export default Contact;
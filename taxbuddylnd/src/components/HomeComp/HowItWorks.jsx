import React, { useRef } from 'react';
import { assets } from '../../assets/assets';
import { motion, useInView } from 'framer-motion';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const steps = [
    {
      tittle: 'Create Your Profile',
      img: assets.one,
      text: 'Choose your account type (Individual or Business) and enter your basic information including TIN.'
    },
    {
      tittle: 'Calculate Your Taxes',
      img: assets.two,
      text: 'Choose your account type (Individual or Business) and enter your basic information including TIN.'
    },
    {
      tittle: 'Track & Manage',
      img: assets.three,
      text: 'Choose your account type (Individual or Business) and enter your basic information including TIN.'
    }
  ];

  return (
    <div ref={ref} className='flex justify-center items-center pt-6.5 pb-12'>
      <div className="bg-white p-5">
        <motion.h2 
          className='text-center'
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <div className="mt-5">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-5 mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 + 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <img 
                  src={step.img} 
                  className='max-h-15 max-w-15 md:max-h-25 w-25' 
                  alt={`Step ${index + 1}`}
                />
              </motion.div>
              <div>
                <motion.h3 
                  className='mb-1'
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.2 + 0.3 
                  }}
                >
                  {step.tittle}
                </motion.h3>
                <motion.p 
                  className='text-seven-five-black'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 0.4 
                  }}
                >
                  {step.text}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
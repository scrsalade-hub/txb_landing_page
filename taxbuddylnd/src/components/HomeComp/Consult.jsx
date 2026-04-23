import React, { useRef } from 'react';
import { assets } from '../../assets/assets';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const Consult = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const services = [
    {
        img: assets.orange_clock,
        title: 'Tax Planning',
        texts: 'Tax consultants can help individual and businesses develop effective tax planning strategies to reduce tax liabilities legally.'
    },
    {
        img: assets.orange_clock,
        title: 'Tax Filing & Compliance',
        texts: 'Let us handle the complex filing process for you. From documentation to submission, we ensure you meet every FIRS deadline.'
    },
    {
        img: assets.orange_clock,
        title: 'Tax Audit Support',
        texts: 'Facing a tax review or audit? Our experts will guide you through preparation, documentation, and communication with tax authorities.'
    },
    {
        img: assets.orange_clock,
        title: 'Personal Tax Consulting',
        texts: 'Simplify your tax filing as an individual or freelancer. We\'ll help you understand your obligations and maximize your benefits.'
    },
    {
        img: assets.orange_clock,
        title: 'Business Tax Strategy',
        texts: 'Design efficient tax structures for your business to save costs, stay compliant, and make informed financial decisions.'
    },
    {
        img: assets.orange_clock,
        title: 'VAT & PAYE Management',
        texts: 'Get professional help managing your Value Added Tax and employee PAYE deductions accurately and on time.'
    },
  ]

  return (
    <div ref={ref} className='flex flex-col items-center bg-[#27242409] py-12'>
      <motion.h2 
        className='text-center mb-12'
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Expert Tax Consulting Services
      </motion.h2>
      
      {/* Grid container should wrap ALL cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl w-full">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col gap-1 hover bg-zero-five-black p-4 rounded shadow-md transition-shadow duration-300 md:text-center md:items-center"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 + 0.2 
              }}
            >
              <motion.img 
                src={service.img} 
                alt={service.title} 
                className="w-12 h-12 md:mx-auto mb-4"
                whileHover={{ 
                  rotate: 15,
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              />
              <h4 className='font-semibold text-lg mb-1'>{service.title}</h4>
            </motion.div>
            <motion.p 
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 + 0.3 
              }}
            >
              {service.texts}
            </motion.p>
            <motion.a 
              href="#" 
              className="font-medium"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1 + 0.4 
              }}
              whileHover={{ 
                x: 5,
                transition: { duration: 0.2 }
              }}
            >
              Learn More →
            </motion.a>
          </motion.div>
        ))}
      </div>
      <Link to="/services">
      <motion.button 
        className='btn-primary mt-12 mx-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.5, 
          delay: 0.8,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Our Service
      </motion.button>
      </Link>
    </div>
  )
}

export default Consult
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../../assets/assets';
import { div } from 'framer-motion/client';
import { Link } from 'react-router-dom';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
  question: "What is the current company income tax rate in Nigeria?",
  answer: "Small companies (≤ ₦25m turnover) pay 0%, medium companies (₦25m–₦100m) pay 20%, and large companies (> ₦100m) pay 30% CIT. Large companies also pay a 4% Development Levy on assessable profits under the 2025 tax reforms."
},
{
  question: "How often do I need to file VAT returns?",
  answer: "VAT returns are filed monthly. You must submit your VAT return and payment on or before the 21st of the following month, even if it is a NIL return."
},
{
  question: "What are the penalties for late tax filing in Nigeria?",
  answer: "Late VAT filing attracts ₦50,000 for the first month and ₦25,000 for subsequent months. Late CIT filing attracts ₦25,000 for the first month and ₦5,000 for each extra month. Late WHT remittance attracts 10% of the amount plus interest."
},
{
  question: "Can I claim tax deductions for business expenses?",
  answer: "Yes. Legitimate, wholly and exclusively incurred business expenses are tax deductible when computing taxable profits, as long as you keep proper records and receipts."
},
{
  question: "What is Withholding Tax (WHT) and when does it apply?",
  answer: "WHT is tax deducted at source from payments like rent, contracts, consultancy, dividends, and interest. Rates vary from 5% to 10% depending on the transaction and residency status."
},
{
  question: "Do I need a Tax Identification Number (TIN)?",
  answer: "Yes. A TIN is mandatory for paying taxes, filing returns, obtaining WHT credits, issuing VAT invoices, and doing most official business transactions."
},
{
  question: "What is the Education Tax and who pays it?",
  answer: "Education Tax has been replaced by the 4% Development Levy for companies under the 2025 tax reforms. Only companies paying CIT are required to pay it."
},
{
  question: "How does PAYE work for employees?",
  answer: "PAYE is deducted monthly by employers from employees’ salaries based on the Personal Income Tax rates. Under the 2025 reforms, most low- and mid-income earners will pay reduced or zero PAYE."
},
{
  question: "What tax incentives are available for business in Nigeria?",
  answer: "Incentives include 0% CIT for small companies, sector-specific incentives, capital allowances, pioneer status, and simplified levies under the new reforms."
},
{
  question: "How can i check my compliance status?",
  answer: "Ensure you have a valid TIN, file all CIT, VAT, WHT and PAYE returns when due, keep proper records, and confirm that all payments match FIRS receipts and WHT credit notes."
}
  ];

  return (
    <div className='bg-white pt-8'>
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h2 className="text-center mb-4 mx-auto">Frequently Asked Questions</h2>
      <h3 className="text-gray-500 text-center font-light md:font-medium mb-12">Get answers to common questions about buisness taxes in Nigeria</h3>
      
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={false}
            className="rounded-xl overflow-hidden shadow"
          >
            <motion.button
              className="w-full p-4 text-left flex justify-between items-center bg-[#F9FAFB]"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="font-semibold text-lg pr-4">{faq.question}</span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[18px] text-gray-500"
              >
                <img src={assets.dropDownIcon} alt="" />
              </motion.span>
            </motion.button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-2 bg-white">
                    <p className="text-gray-600 leading-relaxed text-left">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      {/* Additional help */}
      <div className="mt-12 p-6 bg-blue-50 rounded-xl text-center border-2 border-primary mb-4">
        <h2 className='mx-auto mb-4'>Still Have Questions?</h2>
        <p className='font-medium md:text-[18px] text-[#4a5565]'>Our tax experts are ready to provide personalized answers to your specific situayion.</p>
         <Link to="/Contact"><button className="bg-primary font-medium cursor-pointer text-white px-6 py-3 rounded-lg mt-6">
          Contact Out Tax Expert Now 🔥
        </button></Link>
      </div>
    </div>
    </div>
  );
};

export default Faq;
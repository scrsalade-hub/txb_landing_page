import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import {Link} from 'react-router-dom'

const Features = () => {
  // Parent animation
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, staggerChildren: 0.25, ease: "easeOut" },
    },
  };

  // Card animation
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-full bg-white py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="relative h-full bg-[#012b00] py-20 padding overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/50 rounded-full blur-3xl"></div>

        {/* Section Header */}
        <motion.div variants={item} className="head flex flex-col items-center">
          <div className="tittle bg-white tittle mb-3 shadow">
            <p className="regular text-black">🤝 We Are Here For Your Relief.</p>
          </div>
          <h2 className="text-white text-center">
            Everything You Need to Manage Your Taxes
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          className="cards grid md:grid-cols-2 gap-6 mt-16"
        >
          {/* Card Template */}
          {[
            {
              img: assets.calculator,
              title: "Smart Tax Calculator",
              text: "Accurate tax calculations using Nigeria FIRS tax bands for both individuals and businesses.",
            },
            {
              img: assets.history,
              title: "Tax History Tracking",
              text: "Keep detailed records of all your tax calculations with paid/unpaid status tracking.",
            },
            {
              img: assets.notification,
              title: "Smart Reminders",
              text: "Never miss a tax deadline with automated notifications and payment reminders.",
            },
            {
              img: assets.analysis,
              title: "Income Analytics",
              text: "Visualize your income trends and tax obligations with comprehensive analytics.",
            },
            {
              img: assets.badge,
              title: "FIRS Compliant",
              text: "All calculations follow official Nigerian FIRS tax rates and regulations.",
            },
            {
              img: assets.clock,
              title: "Save Time",
              text: "Automated calculations and record keeping save you hours of manual work.",
            },
          ].map((card, index) => (
            <motion.div
              variants={item}
              whileScroll={{ scale: 1.03, translateY: -6 }}
              className="flex items-center gap-5 bg-[#21681f] p-5 rounded-lg shadow-lg cursor-pointer transition"
              key={index}
            >
              <img
                src={card.img}
                className="md:w-[90px] w-[60px] md:h-[90px] h-[60px]"
                alt=""
              />
              <div className="text-white flex flex-col gap-3">
                <h3>{card.title}</h3>
                <p className="font-light opacity-90">{card.text}</p>
                <a href="#" className="underline underline-offset-4 text-white/80 hover:text-white">
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <Link to="/services">
          <motion.div variants={item} className="w-full flex justify-center mt-10">
          <motion.button
            whileScroll={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-white py-3 md:w-[50%] w-full rounded-lg shadow-lg cursor-pointer"
          >
            Explore More Services
          </motion.button>
        </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Features;

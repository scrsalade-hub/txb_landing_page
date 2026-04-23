import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import CountUp from "./CountUp";
import { Link } from "react-router-dom";

const Hero = () => {
  // Staggered animations for hero_left
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25,
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  // Each element enters individually
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="h-full padding pt-16 pb-24 block md:flex gap-8 items-center"
    >
      <motion.div
        variants={container}
        className="hero_left flex flex-col justify-between"
      >
        {/* Tag */}
        <motion.div variants={item} className="tittle mb-6">
          <p className="regular text-black">
            🤝 Award-winnig Tax Consultant in Nigeria
          </p>
        </motion.div>

        {/* Heading */}
        <motion.div variants={container} className="head">
          <motion.h1 variants={item} className="mb-2">
            SIMPLIFY YOUR TAXES
          </motion.h1>

          <motion.p variants={item} className="text-[#4a5565]">
            Simplfy your taxes calculations with our intelligent platform.
            Track income, calculate taxes accurately, and stay compliant with
            FIRS regulations.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="btns md:flex block gap-8 mt-3"
          >

            <Link to="/Register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mr-4"
            >
              Get Started For Free
            </motion.button>
             </Link>

            <Link to="/Services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary hover shadow"
            >
              Learn More
            </motion.button>
             </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          className="rates flex justify-around mt-8"
        >
          {/* 1 - 99% */}
          <motion.div variants={item} whileHover={{ scale: 1.1 }}>
            <h3 className="text-[24px] font-medium text-center text-[#00a63e]">
              <CountUp
                from={0}
                to={99}
                suffix="%"
                duration={10}
                className="count-up-text"
              />
            </h3>
            <p className="regular">Compliance Rate</p>
          </motion.div>

          {/* 2 - 24/7 */}
          <motion.div variants={item} whileHover={{ scale: 1.1 }}>
            <h3 className="text-[24px] font-medium text-center text-[#00a63e]">
              <CountUp
                from={0}
                to={24}
                suffix="/7"
                duration={10}
                className="count-up-text"
              /> /7
            </h3>
            <p className="regular">Support Available</p>
          </motion.div>

          {/* 3 - 15+ */}
          <motion.div variants={item} whileHover={{ scale: 1.1 }}>
            <h3 className="text-[24px] font-medium text-center text-[#00a63e]">
              <CountUp
                from={0}
                to={15}
                duration={10}
                className="count-up-text"
              />+
            </h3>
            <p className="regular">Years of Experience</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.3, duration: 0.7, ease: "easeOut" },
        }}
        className="hero_right h-full mt-12"
      >
        <motion.img
          src={assets.hero_img}
          alt="hero"
          className="w-full"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
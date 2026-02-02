import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Advanced dropdown animation
  const dropdownMotion = {
    hidden: { opacity: 0, y: -6, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 22,
      },
    },
    exit: { opacity: 0, y: -6, scale: 0.96 },
  };

  // Advanced mobile menu animation
  const mobileMenuMotion = {
    hidden: { opacity: 0, scale: 0.92 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 190,
        damping: 23,
      },
    },
    exit: { opacity: 0, scale: 0.92 }
  };

  return (
    <section>
      {/* TOP NAVBAR */}
      <header
        className={`w-full padding py-4 flex justify-between items-center fixed top-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-white/80 backdrop-blur-lg" : "bg-zero-five-black"}
      `}
      >
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="w-[160px]" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 items-center">
          <li><Link to="/" className="nav-link">Home</Link></li>

          {/* SERVICES DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link flex items-center gap-1">Services ▾</button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  variants={dropdownMotion}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute left-0 top-full mt-2 bg-white shadow-xl p-4 rounded-xl w-56 z-50"
                >
                  {[
                    "Tax Planning",
                    "Tax Filing & Compliance",
                    "Tax Audit Support",
                    "Personal Tax Consulting",
                    "Business Tax Strategy",
                    "VAT & PAYE Management",
                  ].map((item, idx) => (
                    <p key={idx} className="py-1">
                      <Link to="/services" className="dropdown-link">{item}</Link>
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li><Link to="/resources" className="nav-link">Resources</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>

        {/* DESKTOP AUTH BUTTONS */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="btn-primary">Register</Link>
        </div>

        {/* MOBILE ICON */}
        <div className="lg:hidden">
          <motion.img
            whileTap={{ scale: 0.88 }}
            src={open ? assets.closeIcon : assets.fmenuIcon}
            alt="Menu"
            className="w-[3rem] cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuMotion}
            initial="hidden"
            animate="show"
            exit="exit"
            className="lg:hidden bg-white w-full h-screen fixed top-0 left-0 z-40 px-6 pt-24 overflow-y-auto"
          >
            <nav className="space-y-8">
              <Link to="/" className="mobile-link" onClick={() => setOpen(false)}>Home</Link>

              <details className="mobile-details">
                <summary className="mobile-link cursor-pointer">Services</summary>
                <div className="pl-4 mt-3 space-y-3">
                  {[
                    "Tax Planning",
                    "Tax Filing & Compliance",
                    "Tax Audit Support",
                    "Personal Tax Consulting",
                    "Business Tax Strategy",
                    "VAT & PAYE Management",
                  ].map((item, idx) => (
                    <p key={idx}>
                      <Link
                        to="/services"
                        className="mobile-sub-link"
                        onClick={() => setOpen(false)}
                      >
                        {item}
                      </Link>
                    </p>
                  ))}
                </div>
              </details>

              <Link to="/resources" className="mobile-link" onClick={() => setOpen(false)}>Resources</Link>
              <Link to="/about" className="mobile-link" onClick={() => setOpen(false)}>About Us</Link>
              <Link to="/contact" className="mobile-link" onClick={() => setOpen(false)}>Contact Us</Link>

              <div className="pt-6">
                <Link to="/login" className="mobile-outline-btn" onClick={() => setOpen(false)}>
                  Login
                </Link>

                <Link to="/register" className="mobile-primary-btn" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NavBar;

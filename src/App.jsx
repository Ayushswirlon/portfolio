import "./App.css";
import NavBar from "./components/Navbar";
import ScrollTimeline from "./components/scrollIndicator";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import SocialSidebar from "./components/Sidebar";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className=" border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-white">Timeline</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Create beautiful, interactive timelines that engage and inspire.
              Track your journey with style and precision.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg">📧</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg">🐦</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Templates
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                API
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Status
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Timeline. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaArrowRight,
  FaHeart,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaEnvelope />,
    href: "mailto:ayushcarpenter@example.com",
    label: "Email",
  },
  {
    icon: <FaPhone />,
    href: "tel:+919999999999",
    label: "Phone",
  },
];

function Contact() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section
      id="Contact"
      ref={sectionRef}
      className="relative pt-28 pb-10 px-6 md:px-12  text-white overflow-hidden"
    >
      {/* Glowing background bubbles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-48 -right-48 w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="absolute -bottom-48 -left-48 w-[400px] h-[400px] bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      {/* About + Conclusion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let's Wrap It Up
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I'm{" "}
          <span className="text-blue-400 font-semibold">Ayush Carpenter</span>,
          a full-stack developer driven by curiosity and creativity. I love
          building modern, meaningful digital products that make a difference.
        </p>

        <p className="text-md text-gray-400 max-w-3xl mx-auto">
          If you're looking for someone who can combine clean code with
          beautiful UI, meaningful UX, and seamless backend integration, I'm
          your guy. Let's build something that inspires.
        </p>
      </motion.div>

      {/* Contact Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 flex justify-center flex-wrap gap-4"
      >
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 text-sm font-medium group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="group-hover:text-blue-400 transition-colors">
              {link.icon}
            </span>
            <span className="group-hover:text-white transition-colors">
              {link.label}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-20 pt-10 border-t border-gray-700/50 text-center"
      >
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} Ayush Carpenter.</span>
          <span>Made with</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaHeart className="text-red-500" />
          </motion.span>
          <span>and clean code</span>
        </p>
      </motion.div>
    </section>
  );
}

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <NavBar />
      <SocialSidebar />
      <Hero />
      <Skills />

      {/* Add more sections as needed */}
      <Projects />
      <ScrollTimeline />
      <Contact />
    </div>
  );
}

export default App;

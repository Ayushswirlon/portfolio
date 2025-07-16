import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaEnvelope, FaPhone, FaHeart } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaEnvelope />,
    href: "mailto:ayushcarpenter7777@gmail.com",
    label: "Email",
  },
  {
    icon: <FaPhone />,
    href: "tel:+919999999999",
    label: "Phone",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(null);

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
        {socialLinks.map((link, idx) => {
          const isEmail = link.label === "Email";
          const isPhone = link.label === "Phone";
          const copyText = isEmail
            ? "ayushcarpenter7777@gmail.com"
            : isPhone
            ? "+91 8370015230"
            : null;

          return (
            <motion.div
              key={idx}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => {
                  if (copyText) {
                    navigator.clipboard.writeText(copyText);
                    setCopied(link.label); // state to show feedback
                    setTimeout(() => setCopied(null), 2000); // hide after 2s
                  }
                }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 text-sm font-medium group text-white"
              >
                <span className="group-hover:text-blue-400 transition-colors">
                  {link.icon}
                </span>
                <span className="group-hover:text-white transition-colors">
                  {link.label}
                </span>
              </button>

              {/* Feedback message */}
              <AnimatePresence>
                {copied === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-green-300 text-xs px-3 py-1 rounded-md shadow border border-green-400/30"
                  >
                    {isEmail ? "Email copied!" : "Phone number copied!"}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
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

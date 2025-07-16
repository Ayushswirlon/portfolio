import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaArrowLeft,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/images/arrow.png";
import "./scroll.css"; // Ensure you have the CSS file for styles
// Adjust the path as necessary

const SocialSidebar = () => {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("Contact");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHighlight(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/yourusername",
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <>
      <div className="hidden lg:flex fixed top-[15%] right-[8%] z-50 items-center gap-4">
        <motion.div className="text-blue-400 text-2xl">
          <span
            id="font"
            className={`text-sm mt-1 text-blue-300 font-medium ${
              highlight ? "animate-pulse animate-neon-text text-blue-300" : ""
            }`}
          >
            Connect
          </span>
        </motion.div>
      </div>

      <div className="hidden lg:flex fixed top-[20%] right-10 z-50 items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-end pr-2"
        >
          <motion.div className="text-blue-400 text-2xl">
            <img className="w-24 h-24" src={image} alt="Arrow" />
          </motion.div>
        </motion.div>
      </div>
      <div className="hidden lg:flex fixed top-1/3 right-4 z-50 items-center gap-4">
        {/* Arrow and Text */}

        {/* Sidebar */}
        <motion.div
          className={`flex flex-col gap-4 px-3 py-4 rounded-xl bg-slate-800/70 backdrop-blur border ${
            highlight
              ? "border-blue-500 shadow-lg shadow-blue-500/40 animate-neon-border"
              : "border-white"
          } transition-all duration-500`}
        >
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`text-gray-400 text-2xl transition-all duration-300 transform hover:scale-110 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Neon border animation keyframes */}
        <style jsx>{`
          @keyframes neonGlow {
            0% {
              box-shadow: 0 0 4px #3b82f6, 0 0 10px #3b82f6, 0 0 20px #9333ea;
            }
            50% {
              box-shadow: 0 0 8px #3b82f6, 0 0 16px #9333ea, 0 0 32px #3b82f6;
            }
            100% {
              box-shadow: 0 0 4px #3b82f6, 0 0 10px #3b82f6, 0 0 20px #9333ea;
            }
          }

          .animate-neon-border {
            animation: neonGlow 2s infinite ease-in-out;
          }
        `}</style>
      </div>
    </>
  );
};

export default SocialSidebar;

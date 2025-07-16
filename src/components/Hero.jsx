import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

import { useEffect, useState } from "react";

const techIcons = [
  {
    icon: <FaHtml5 />,
    color: "text-orange-500",
    pos: "top-[30px] left-[40%]",
  },
  {
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    pos: "bottom-[30px] right-[45%]",
  },
  {
    icon: <FaJsSquare />,
    color: "text-yellow-400",
    pos: "top-[20%] left-[30px]",
  },
  {
    icon: <FaReact />,
    color: "text-cyan-400",
    pos: "bottom-[10%] right-[25%]",
  },
  {
    icon: <SiExpress />,
    color: "text-gray-300",
    pos: "top-[5%] right-[10%]",
  },
  {
    icon: <FaNodeJs />,
    color: "text-green-500",
    pos: "bottom-[40px] left-[20%]",
  },
  {
    icon: <SiMongodb />,
    color: "text-green-400",
    pos: "top-[40%] left-[40px]",
  },
  {
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    pos: "bottom-[25%] right-[25px]",
  },
  {
    icon: <FaGithub />,
    color: "text-white",
    pos: "bottom-[10%] left-[80px]",
  },
];

// Typing effect for name
const useTypingEffect = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[i]);
      i++;
      if (i >= text.length - 1) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayText;
};

const Hero = () => {
  const typedName = useTypingEffect("Ayyush Carpenter");

  return (
    <section className="relative min-h-screen  text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Tech Icons Floating */}
      {techIcons.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.1, delay: 0.1 }}
          transition={{ delay: idx * 0.12, duration: 0.5 }}
          className={`absolute ${item.pos} text-[60px] md:text-[80px] z-10 ${item.color}`}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Browser Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-[7%] relative z-20 w-full max-w-5xl bg-neutral-900/30 border border-neutral-600 rounded-xl shadow-2xl backdrop-blur-sm"
      >
        {/* Browser header */}
        <div className="flex items-center gap-2 p-2 px-4 bg-neutral-800 border-b border-neutral-600 rounded-t-xl">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 text-center flex flex-col items-center">
          {/* Avatar */}
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="avatar"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-400 mb-6 shadow-lg"
          />

          {/* Typing Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="pb-2 text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-400 to-white mb-4 min-h-[56px]"
          >
            {typedName}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mb-6"
          >
            Softwate Engineer | Frontend developer | Backend developer |
            Full-stack developer
            <br />
            Solving problems with code and creating beautiful, interactive
            experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://github.com/Ayushswirlon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              <FaGithub className="mr-2" /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#Contact"
              className="inline-flex items-center px-6 py-3 bg-transparent border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

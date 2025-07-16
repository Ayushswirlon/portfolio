import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaBriefcase, FaServer, FaCloudUploadAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import metal from "../assets/images/metal.png";
import Zeptik from "../assets/images/zeptik.jpeg";

const ScrollTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      title: "Frontend Developer Intern",
      company: "Ryder Business Solutions Pvt. Ltd.",
      companyLogo: Zeptik,
      companyLink: "https://zeptik.com",
      timeline: "Jan 2025 – April 2025",
      desc: "Worked on a Reselling platform project named 'Zeptik'.",
      bulletPoints: [
        "Developed reusable UI components in Next.js.",
        "Developed 10+ reusable React components using JavaScript ES6+ and CSS3, reducing load time by 20%",
        "Managed state and routing using Next.js router.",
        "Collaborated with 5+ developers using Scrum methodology, delivering features ahead of deadlines",
      ],
      tech: [
        "Next.js",
        "Supabase",
        "Tailwind CSS",
        "React",
        "Js",
        "GitHub",
        "Figma",
      ],
      icon: <FaBriefcase />,
    },
    {
      title: "The Metal Chef(Freelance)",
      company: "The Metal Chef",
      companyLink: "https://the-metal-chef.in",
      companyLogo: metal,
      timeline: "Oct 2024 – Dec 2024",
      desc: "Built a Static Company Website using React and Tailwind CSS.",
      bulletPoints: [
        "Built responsive business website using React.js and Tailwind CSS",
        "Achieve 35% bounce rate reduction...",
        "Handled the deployment and hosting on Vercel.",
        "Implemented SEO best practices to improve search visibility ",
        "Manageed domain and google cloud console for analytics and monitoring",
      ],
      tech: ["React", "Tailwind CSS", "Vercel", "Git", "Google Cloud"],
      icon: <FaServer />,
    },
    {
      title: "Open Source Contributor",
      company: "Vinyasa Summer of Code",
      timeline: "July 2024 - Aug 2024",
      desc: "Contributed to open source projects focused on deployment and CI/CD.",
      bulletPoints: [
        "Contributed to deployment scripts for various projects.",
        "Designed Various Website components and UI elements.",
        "Handle various bug fixes and feature requests.",
        "Ranked in top 5 contributors for the program.",
      ],
      tech: [
        "Git",
        "GitHub",
        "CI/CD",
        "Html",
        "CSS",
        "JavaScript",
        "Open Source",
      ],
      icon: <FaCloudUploadAlt />,
    },
  ];

  const updateTimeline = useCallback(() => {
    if (!containerRef.current) return;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;

    let newActiveIndex = -1;
    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const itemTop = containerTop + ref.offsetTop;
      const itemHeight = ref.offsetHeight;
      const itemCenter = itemTop + itemHeight / 2;
      const activationZoneTop = scrollTop + windowHeight * 0.3;
      const activationZoneBottom = scrollTop + windowHeight * 0.7;
      if (
        itemCenter >= activationZoneTop &&
        itemCenter <= activationZoneBottom
      ) {
        newActiveIndex = index;
      }
    });

    if (newActiveIndex === -1) {
      let closestDistance = Infinity;
      const viewportCenter = scrollTop + windowHeight / 2;
      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const itemTop = containerTop + ref.offsetTop;
        const itemHeight = ref.offsetHeight;
        const itemCenter = itemTop + itemHeight / 2;
        const distance = Math.abs(itemCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          newActiveIndex = index;
        }
      });
    }
    setActiveIndex(newActiveIndex);

    const containerStart = containerTop - windowHeight * 0.5;
    const containerEnd = containerTop + containerHeight - windowHeight * 0.5;
    const containerProgress = Math.max(
      0,
      Math.min(
        1,
        (scrollTop - containerStart) / (containerEnd - containerStart)
      )
    );
    setLineHeight(containerProgress * 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(updateTimeline);
    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(updateTimeline, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateTimeline]);

  return (
    <div id="Experience" className="text-white border-t border-gray-800">
      <div className="mt-[10%] max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-4 mt-10"
        >
          My <span className="text-blue-400">Experiences</span>
        </motion.h2>
      </div>
      <div className="relative py-20" ref={containerRef}>
        <div className="absolute left-8 top-0 w-px h-full bg-gray-700">
          <div
            className="w-px bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-300 ease-out relative"
            style={{ height: `${lineHeight}%` }}
          >
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full shadow-lg">
              <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>

        <div className="space-y-32">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const isPassed = index < activeIndex;
            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="flex items-start gap-8 pl-16 pr-8 group relative"
              >
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-2 transition-all duration-500 z-10 ${
                    isPassed
                      ? "bg-purple-500 border-purple-400 shadow-lg shadow-purple-500/50"
                      : isActive
                      ? "bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50 scale-125"
                      : "bg-gray-700 border-gray-600"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-50"></div>
                  )}
                </div>

                <div
                  className={`flex-1 bg-slate-800/50 rounded-xl p-6 border transition-all duration-500 ${
                    isActive
                      ? "border-blue-500/50 shadow-lg shadow-blue-500/20 scale-105"
                      : isPassed
                      ? "border-purple-500/30 shadow-md shadow-purple-500/10"
                      : "border-gray-700/50"
                  } ${!isPassed && !isActive ? "opacity-50" : "opacity-100"}`}
                >
                  <div className="flex items-start gap-4 mb-2">
                    <div className="text-3xl p-2 rounded-lg bg-gray-700/20">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {item.companyLogo && (
                          <img
                            src={item.companyLogo}
                            alt={`${item.company} logo`}
                            className="w-6 h-6 object-contain border border-gray-700 rounded-sm"
                          />
                        )}
                        {item.companyLink ? (
                          <a
                            href={item.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-400 hover:underline"
                          >
                            {item.company}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-400">
                            {item.company}
                          </p>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{item.timeline}</p>
                    </div>
                  </div>

                  <div className="mb-4 text-gray-300 space-y-2">
                    <p>{item.desc}</p>
                    {item.bulletPoints && (
                      <ul className="list-disc list-inside text-sm text-gray-400 pl-4">
                        {item.bulletPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollTimeline;

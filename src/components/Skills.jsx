import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiPostman,
  SiFigma,
  SiGit,
  SiVite,
  SiNpm,
  SiJsonwebtokens,
  SiSocketdotio,
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiCplusplus,
  SiCloudinary,
  SiGraphql,
  SiVercel,
  SiDocker,
  SiBootstrap,
} from "react-icons/si";
import {
  DiVisualstudio,
  DiAws,
  DiFirebase,
  DiLinux,
  DiJava,
  DiPython,
} from "react-icons/di";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
      { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
      { name: "Socket.io", icon: <SiSocketdotio />, color: "text-gray-100" },
      { name: "JWT", icon: <SiJsonwebtokens />, color: "text-orange-300" },
      { name: "AWS", icon: <DiAws />, color: "text-orange-300" },
      { name: "cloudinary", icon: <SiCloudinary />, color: "text-orange-300" },
      { name: "GraphQL", icon: <SiGraphql />, color: "text-orange-300" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
      { name: "firebase", icon: <DiFirebase />, color: "text-orange-300" },
      { name: "supabase", icon: <SiSupabase />, color: "text-green-500" },
    ],
  },
  {
    title: "Tools & Platform",
    skills: [
      { name: "Git", icon: <SiGit />, color: "text-orange-600" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      { name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
      { name: "NPM", icon: <SiNpm />, color: "text-red-500" },
      { name: "Vite", icon: <SiVite />, color: "text-yellow-300" },
      { name: "vercel", icon: <SiVercel />, color: "text-blue-400" },
      {
        name: "Visual Studio Code",
        icon: <DiVisualstudio />,
        color: "text-blue-500",
      },
      { name: "docker", icon: <SiDocker />, color: "text-blue-400" },
    ],
  },
  {
    title: "Languages & Extras",
    skills: [
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "Python", icon: <DiPython />, color: "text-yellow-400" },
      { name: "Java", icon: <DiJava />, color: "text-orange-600" },
      { name: "C++", icon: <SiCplusplus />, color: "text-red-600" },
      { name: "Linux", icon: <DiLinux />, color: "text-gray-400" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="Skills" className="  text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-4 mt-10"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Here's a categorized look at my core technologies, tools, and
          frameworks that I use to build modern full-stack applications.
        </motion.p>

        {/* Category Sections */}
        <div className="space-y-12">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-left border-l-4 pl-4 border-blue-500">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    <div
                      className={`text-5xl md:text-6xl ${skill.color} hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-200">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

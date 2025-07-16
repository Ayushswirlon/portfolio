import { motion } from "framer-motion";

const projects = [
  {
    title: "Event Manager",
    desc: "College event platform with login, participation & attendance.",
    image: "/images/project1.jpg",
    span: "row-span-1",
  },
  {
    title: "Portfolio Website",
    desc: "Animated personal portfolio using React, Tailwind & Framer Motion.",
    image: "/images/project2.jpg",
    span: "row-span-2",
  },
  {
    title: "Whiteboard (CoLab)",
    desc: "Real-time collaborative whiteboard using WebSockets.",
    image: "/images/project3.jpg",
    span: "row-span-1",
  },
  {
    title: "Plant Classifier",
    desc: "ML model to detect plant disease via uploaded image.",
    image: "/images/project4.jpg",
    span: "row-span-2",
  },
  {
    title: "Blogify",
    desc: "MERN-based blog platform with authentication and rich editor.",
    image: "/images/project5.jpg",
    span: "row-span-1",
  },
  {
    title: "Code Snippet Hub",
    desc: "Code sharing platform for real-time snippets.",
    image: "/images/project6.jpg",
    span: "row-span-1",
  },
];

const Projects = () => {
  return (
    <section id="Project" className=" text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 mt-10"
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[240px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-xl group border border-neutral-700 shadow-md ${project.span}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300 ease-in-out" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.desc}</p>
                <button className="mt-2 text-sm text-blue-400 hover:underline">
                  Preview →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;

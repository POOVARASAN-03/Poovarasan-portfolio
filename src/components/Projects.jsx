import { ExternalLink, Github } from "lucide-react";

// Projects data
const projects = [
  {
  id: 1,
  title: "Chatty – Real-Time Chat App",
  description:
    "A real-time chat application built using the MERN stack and Socket.IO. Features secure authentication, instant messaging, real-time updates, and user-friendly UI for seamless communication.",
  image: "/images/chatty.png",
  technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.IO"],
  liveLink: "https://realify-chat-app.onrender.com",
  githubLink: "https://github.com/POOVARASAN-03/FullStack-Chat-App",
},
  {
  id: 2,
  title: "HybridATS – Smart Recruitment System",
  description:
    "A full-stack MERN application designed to automate technical job recruitment with secure authentication, candidate evaluation, and smart applicant tracking features for streamlined hiring.",
  image: "/images/Ats.png",
  technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
  liveLink: "https://hybrid-ats-mern-app.onrender.com",
  githubLink: "https://github.com/POOVARASAN-03/HYBRID-ATS-MERN-APP",
},
  {
  id: 3,
  title: "AI-Medication-Reminder",
  description:
    "An AI-powered medication reminder application that uses natural language processing to set and manage medication schedules through prescription image analysis.",
  image: "/images/medication.png",
  technologies: ["MERN", "Text Recognition", "Python", "OCR", "AI-Chatbot"],
  liveLink: "https://ai-medicationremainder-gasx.onrender.com/",
  githubLink: "https://github.com/POOVARASAN-03/AI-Medication-Remainder",
},
  {
  id: 4,
  title: "RAG Document Reader",
  description:
    "Built a Retrieval-Augmented Generation (RAG) application using LangChain and FAISS to process and answer queries from uploaded documents with contextual accuracy.",
  image: "/images/rag.png",
  technologies: ["LangChain", "FAISS", "Python", "LLMs"],
  liveLink: "https://rag-multi-doc-reader.streamlit.app/",
  githubLink: "https://github.com/POOVARASAN-03/RAG-Document-Reader",
}
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-3"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showing my skills & experience
          </p>
        </div>

        {/* Projects Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 space-y-4 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 min-h-[60px]">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full font-medium h-fit"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2 mt-auto">

                  {/* Live Button */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white text-sm py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>

                  {/* GitHub Button */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-all font-medium"
                  >
                    <Github size={15} /> GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        {/* See More Button */}
        <div className="flex justify-center mt-10 md:mt-12">
          <a 
            href="https://github.com/POOVARASAN-03"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-lg"
          >
            See More Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

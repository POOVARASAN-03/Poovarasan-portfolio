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
  title: "RAG Document Reader",
  description:
    "Built a Retrieval-Augmented Generation (RAG) application using LangChain and FAISS to process and answer queries from uploaded documents with contextual accuracy.",
  image: "/images/rag.png",
  technologies: ["LangChain", "FAISS", "Python", "LLMs"],
  liveLink: "https://rag-multi-doc-reader.streamlit.app/",
  githubLink: "https://github.com/POOVARASAN-03/RAG-Document-Reader",
},
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Here are some of my recent projects showing my skills & experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg border shadow-sm hover:shadow-xl hover:-translate-y-2 transition p-0 overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden  pt-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-200 px-2 py-1 rounded-md text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">

                  {/* Live Button */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>

                  {/* GitHub Button */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 border text-sm border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
        <a href="https://github.com/POOVARASAN-03"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center mx-auto mt-10 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition w-fit">
          See More →
        </a>
      </div>
    </section>
  );
}

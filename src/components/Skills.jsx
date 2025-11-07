import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiPostman,
  SiSpringboot
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-900" },
      { name: "SpringBoot", icon: SiSpringboot, color: "text-[#6DB33F]" },
    ],
  },
  {
    category: "Database",
    skills: [{ name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" }],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-900" },
      { name: "VS Code", icon: VscCode, color: "text-[#007ACC]" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-2"></div>
        </div>

        {/* Skills */}
        <div className="space-y-10">
          {skillsData.map((category) => (
            <div key={category.category} className="space-y-4">

              {/* Category Name */}
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {category.category}
              </h3>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition hover:-translate-y-1 flex flex-col items-center gap-2"
                    >
                      <Icon className={`w-8 h-8 ${skill.color}`} />
                      <span className="text-sm font-medium text-gray-800">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

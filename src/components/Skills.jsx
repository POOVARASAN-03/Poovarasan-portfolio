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
      { name: "React", icon: SiReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]", bg: "bg-[#F7DF1E]/10" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10" },
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]", bg: "bg-[#E34F26]/10" },
      { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]", bg: "bg-[#1572B6]/10" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]", bg: "bg-[#339933]/10" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-900 dark:text-gray-100", bg: "bg-gray-100 dark:bg-gray-700" },
      { name: "SpringBoot", icon: SiSpringboot, color: "text-[#6DB33F]", bg: "bg-[#6DB33F]/10" },
    ],
  },
  {
    category: "Database",
    skills: [{ name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]", bg: "bg-[#47A248]/10" }],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "text-[#F05032]", bg: "bg-[#F05032]/10" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-900 dark:text-gray-100", bg: "bg-gray-100 dark:bg-gray-700" },
      { name: "VS Code", icon: VscCode, color: "text-[#007ACC]", bg: "bg-[#007ACC]/10" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]", bg: "bg-[#FF6C37]/10" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-3"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-8 md:space-y-10">
          {skillsData.map((category) => (
            <div key={category.category} className="space-y-4">

              {/* Category Name */}
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
              </div>

              {/* Skill Cards Grid - Better mobile layout */}
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group p-3 sm:p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-2 sm:gap-3"
                    >
                      <div className={`p-2.5 sm:p-3 rounded-xl ${skill.bg} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${skill.color}`} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
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

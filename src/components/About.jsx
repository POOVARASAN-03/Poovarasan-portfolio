import React from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading - Centered on mobile */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white" data-testid="heading-about">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-3"></div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="w-full lg:col-span-3 space-y-5">
            {/* About Text */}
            <div className="space-y-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p data-testid="text-about-1" className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                I'm a <span className="text-blue-600 dark:text-blue-400 font-medium">Software Engineer</span> focused on <span className="text-blue-600 dark:text-blue-400 font-medium">Java Backend Development</span> and <span className="text-blue-600 dark:text-blue-400 font-medium">SAP Commerce Cloud</span>, with a strong interest in <span className="text-blue-600 dark:text-blue-400 font-medium">Artificial Intelligence</span> and <span className="text-blue-600 dark:text-blue-400 font-medium">Machine Learning</span>. I enjoy building scalable, high-performance applications and exploring emerging technologies such as <span className="text-blue-600 dark:text-blue-400 font-medium">Agentic AI</span>, <span className="text-blue-600 dark:text-blue-400 font-medium">Generative AI</span>, <span className="text-blue-600 dark:text-blue-400 font-medium">LLMs</span>, and AI-powered solutions to solve real-world problems.
              </p>
              <p data-testid="text-about-2" className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                With hands-on experience in <span className="text-blue-600 dark:text-blue-400 font-medium">Java application development</span>, <span className="text-blue-600 dark:text-blue-400 font-medium">backend engineering</span>, and <span className="text-blue-600 dark:text-blue-400 font-medium">SAP Commerce Cloud</span>, I build scalable and reliable enterprise applications. I work across Java backend development, REST APIs, microservices, and SAP Commerce Cloud, focusing on designing efficient solutions and integrating systems to support real-world business requirements. Alongside backend development.</p>
              <p data-testid="text-about-3" className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                I enjoy learning new technologies, solving challenging problems, and turning ideas into practical solutions. I’m particularly interested in <span className="text-blue-600 dark:text-blue-400 font-medium">backend engineering</span>, <span className="text-blue-600 dark:text-blue-400 font-medium">scalable applications</span>, <span className="text-blue-600 dark:text-blue-400 font-medium">microservices</span>, and <span className="text-blue-600 dark:text-blue-400 font-medium">cloud technologies</span>, while continuously exploring how <span className="text-blue-600 dark:text-blue-400 font-medium">AI</span> and emerging technologies can be applied to build smarter and more efficient solutions.
              </p>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="w-full lg:col-span-2 space-y-6">
            {/* Experience Section */}
            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white" data-testid="heading-experience">
                  Experience
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-3 border-blue-500 pl-4 py-1 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors rounded-r-lg" data-testid="card-experience-1">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">Jan 2026 - <span className="text-blue-600 dark:text-blue-400">Present</span></p>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mt-1">Software Engineer - Zakapps</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1.5">
                    Develop Java backend applications using Spring for enterprise solutions.
                  </p>
                </div>
                <div className="border-l-3 border-blue-500 pl-4 py-1 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors rounded-r-lg" data-testid="card-experience-2">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">March 2025</p>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mt-1">SRM Dental College</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1.5">
                    Contributed to published AI/ML research on phytochemical cancer analysis.
                  </p>
                </div>
                <div className="border-l-3 border-blue-500 pl-4 py-1 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors rounded-r-lg" data-testid="card-experience-3">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">Jul 2024</p>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mt-1">AI/ML Intern</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1.5">
                    Developed, trained, and evaluated AI models for impactful solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white" data-testid="heading-education">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-3 border-blue-500 pl-4 py-2 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors rounded-r-lg" data-testid="card-education-1">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    2022 - 2026 
                  </p>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mt-1">Easwari Engineering College</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span className="font-medium">B.E</span> Computer Science and Engineering (AI & ML)
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Specializing in AI, ML, and web development technologies.
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mt-2">
                    CGPA: <span className="text-blue-600 dark:text-blue-400 font-bold">8.66</span>
                  </p>
                </div>

                <div className="border-l-3 border-blue-500 pl-4 py-2 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors rounded-r-lg" data-testid="card-education-2">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">2020 - 2022</p>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mt-1">Sri Venkata Subba Rao Higher Secondary School</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">10th & 12th Grade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
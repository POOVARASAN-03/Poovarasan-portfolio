import { ArrowRight, Download } from "lucide-react";

export default function Hero() {

  // Scroll to projects section
  const handleViewProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Image first on mobile, right on desktop */}
          <div className="w-full flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative group">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-700">
                <img
                  src={"/images/poovarasan-her1.jpg"}
                  alt="Poovarasan - Full-Stack Developer (MERN) & AI Enthusiast"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -z-10 top-3 left-3 sm:top-4 sm:left-4 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 opacity-80"></div>
            </div>
          </div>

          {/* Text/content second on mobile, left on desktop */}
          <div className="space-y-5 md:space-y-6 w-full order-2 md:order-1 text-center md:text-left mt-6 md:mt-0">
            <div className="space-y-3">
              <p className="text-sm md:text-base font-medium text-blue-600 dark:text-blue-400 tracking-wide">
                👋 Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Poovarasan G
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 dark:text-blue-400">Aspiring Software Developer</span>
                <span className="hidden sm:inline"> | </span>
                <br className="sm:hidden" />
                <span>AI & ML Enthusiast</span>
              </h2>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              I'm a final-year Computer Science Engineering student passionate about building web applications 
              using the <span className="font-medium text-gray-800 dark:text-gray-200">MERN stack</span> and exploring the exciting world of 
              <span className="font-medium text-gray-800 dark:text-gray-200"> artificial intelligence</span> and <span className="font-medium text-gray-800 dark:text-gray-200">machine learning</span>.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-2">
              <button
                onClick={handleViewProjects}
                className="bg-blue-600 text-white px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 font-medium"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                className="border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all font-medium"
                href="https://drive.google.com/file/d/1t_ZERMGTmcvBflUssyduQIiL1_O2E2Cb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left side */}
          <div className="space-y-6">
            
              <div className="space-y-2">
                <p className="text-sm md:text-base font-medium text-gray-500">
                  Hi, I'm
                </p>

                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                  Poovarasan G
                </h1>

                <h2 className="text-xl md:text-2xl font-medium text-blue-600">
                  Aspiring Software Developer | AI & ML Enthusiast
                </h2>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                I'm a final-year Computer Science Engineering student passionate about building web applications 
                using the MERN stack and exploring the exciting world of artificial intelligence and machine learning. 
                I enjoy learning new technologies and developing projects that solve real-world problems.
              </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button
                onClick={handleViewProjects}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                className="border border-gray-300 text-gray-700 px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition"
                href="https://drive.google.com/file/d/1t_ZERMGTmcvBflUssyduQIiL1_O2E2Cb/view?usp=sharing"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={"/images/poovarasan-her1.jpg"}
                  alt="Poovarasan - Full-Stack Developer (MERN) & AI Enthusiast"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-blue-200"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react'

function About() {
  return (
     <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="md:col-span-3 space-y-6">
            {/* Section Heading */}
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="heading-about">
                About Me
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>

            {/* About Text */}
            <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
              <p data-testid="text-about-1">
                I'm a passionate developer with a strong interest in both Web Development and Artificial Intelligence. I enjoy creating modern, efficient applications and exploring how intelligent systems can enhance real-world products.</p>
              <p data-testid="text-about-2">
                With hands-on experience in the MERN stack (MongoDB, Express.js, React, Node.js), I build full-stack applications that are scalable and user-focused. Alongside web development, I explore AI concepts, machine learning models, and real-time intelligent systems to expand my technical expertise.
              </p>
              <p data-testid="text-about-3">
                I love learning new technologies, working on innovative ideas, and turning concepts into functional solutions. Whether it's developing smart applications or improving user experience, I strive to write clean code and deliver meaningful results.
              </p>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="md:col-span-2 space-y-8">
            {/* Experience Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground" data-testid="heading-experience">
                Experience
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4" data-testid="card-experience-1">
                  <p className="text-sm text-muted-foreground">Jul 2024 </p>
                  <h4 className="text-base font-semibold text-foreground mt-1">AI/ML-Intern </h4>
                  <p className="text-sm text-foreground/80 mt-2">
                    Developed, trained, and evaluated AI models for impactful solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground" data-testid="heading-education">
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 space-y-2" data-testid="card-education-1">
                    <p className="text-sm text-muted-foreground">
                      2022 - <span className="text-blue-600">Present</span>
                    </p>
                    <h2 className="text-base font-semibold text-foreground">Easwari Engineering College</h2>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">B.E </span> Computer Science and Engineering (AI & ML)
                    </p>
                    <p className="text-sm text-foreground/80">
                      Specializing in artificial intelligence, machine learning, and web development technologies.
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      CGPA: <span className="text-blue-600">8.66</span>
                    </p>
                  </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4" data-testid="card-education-1">
                  <p className="text-sm text-muted-foreground">2020 - 2022</p>
                  <h4 className="text-base font-semibold text-foreground mt-1">Sri Venkata Subba Rao Higher Secondary School</h4>
                  <p className="text-sm text-muted-foreground mt-1">10th And 12th Grade</p>
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
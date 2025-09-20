import { ArrowLeft,  Github, ExternalLink, Code2 } from "lucide-react"
import Link from "next/link"
import ProjectPreview from "../components/tab-projects"
import { StaticImageData } from "next/image"


interface Project {
    title: string
    subtitle: string
    description: string
    heroGradient: string
    sections: Array<{
        title: string
        subtitle: string
        content: string
        details: string
        tech?: string[]
        liveUrl?: string
        githubUrl?: string
        image_url_screen?: StaticImageData | string
        image_url_mobile?: StaticImageData | string
        image_url_desktop?: StaticImageData | string
    }>
}

interface WebProjectProps {
   project: Project
}

export default function WebProjects( {project }: WebProjectProps ) {
    
    return(
      <div className="min-h-screen bg-[#15161a] text-white flex">
        {/* Main Content */}
        <div className="flex-1 px-12 py-8">
          {/* Back Navigation */}
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-[#aaaeb9] hover:text-white transition-all duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="group-hover:translate-x-0.5 transition-transform duration-300">Back to portfolio</span>
          </Link>

          {/* Header Section */}
          <div className="mb-12 animate-in fade-in duration-700">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-[#aaaeb9] text-lg leading-relaxed max-w-3xl">{project.description}</p>
          </div>

          {/* Hero Project Card */}
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <div className="bg-[#656a7b] rounded-2xl p-8 relative overflow-hidden h-80 group cursor-pointer transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.heroGradient} opacity-90 group-hover:opacity-95 transition-opacity duration-500`}
              ></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                  <Code2 className="w-16 h-16 mx-auto mb-4 text-white/80 group-hover:text-white transition-colors duration-300" />
                  <h2 className="text-5xl font-bold mb-3 group-hover:text-[#cdffe8] transition-colors duration-300">
                    Web Projects
                  </h2>
                  <p className="text-[#cdffe8] text-lg group-hover:text-white transition-colors duration-300">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {project.sections.map((project, index) => (
            <div
              key={index}
              className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${300 + index * 200}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <h4 className="text-lg text-[#06b6d4] mb-4">{project.subtitle}</h4>
                    <p className="text-[#aaaeb9] leading-relaxed mb-4">{project.content}</p>
                    <p className="text-[#aaaeb9] leading-relaxed mb-6">{project.details}</p>

                    {/* Tech Stack */}
                    {"tech" in project && Array.isArray(project.tech) && (
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-white mb-3">Tech Stack:</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech: string, techIndex: number) => (
                            <span key={techIndex} className="px-3 py-1 bg-[#3f424d] text-[#06b6d4] text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      {"liveUrl" in project && project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-[#1e40af] hover:bg-[#1d4ed8] text-white rounded-lg transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </Link>
                      )}
                      {"githubUrl" in project && project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-[#3f424d] hover:bg-[#4a4f5c] text-white rounded-lg transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                   <ProjectPreview
                     imageScreen={project.image_url_screen ?? ""}
                     imageDesktop={project.image_url_desktop ?? ""}
                     imageMobile={project.image_url_mobile ?? ""}
                   />
              </div>
            </div>
          ))}

          {/* Development Process Section */}
          <div className="bg-gradient-to-r from-[#0f172a] to-[#1e40af] rounded-2xl p-10 mb-16 animate-in fade-in slide-in-from-left duration-700 delay-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer group">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#cdffe8] transition-colors duration-300">
                Development Process:
              </h3>
              <h4 className="text-xl text-[#06b6d4] mb-6 group-hover:text-white transition-colors duration-300">
                From concept to deployment
              </h4>
              <p className="text-[#cdffe8] leading-relaxed group-hover:text-white transition-colors duration-300">
                Each project follows a structured development process including planning, design, development, testing,
                and deployment. I focus on clean code, performance optimization, and user experience throughout the entire
                development lifecycle.
              </p>
            </div>
          </div>

          {/* Technologies & Tools Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Technologies & Tools</h3>
            <h4 className="text-lg text-[#aaaeb9] mb-8">My development stack</h4>
            <p className="text-[#aaaeb9] leading-relaxed mb-12 max-w-2xl">
              I work with modern web technologies and frameworks to build scalable, performant, and maintainable
              applications. Here are some of the key technologies I use in my projects.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Tailwind CSS",
                "Express.js",
                "MongoDB",
                "Vercel",
                "Supabase",
                "GitHub",
                "GitLab",
                "Squelize",
                "NestJS",
                "Auth.js",
                "MySQL",
                "Render",
                "Shadcn/UI",

              ].map((tech, i) => (
                <div
                  key={i}
                  className="bg-[#3f424d] rounded-xl p-6 flex items-center justify-center hover:bg-[#4a4f5c] transition-colors duration-200 group"
                >
                  <span className="text-[#717689] text-sm font-medium group-hover:text-white transition-colors duration-200">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Learnings Section */}
          <div className="bg-gradient-to-br from-[#1e40af] via-[#0f172a] to-[#06b6d4] rounded-2xl p-10 mb-16 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
            <div className="max-w-2xl relative z-10">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#cdffe8] transition-colors duration-300">
                Key Learnings:
              </h3>
              <h4 className="text-xl text-[#06b6d4] mb-6 group-hover:text-white transition-colors duration-300">
                Continuous growth and improvement
              </h4>
              <p className="text-[#cdffe8] leading-relaxed group-hover:text-white transition-colors duration-300">
                Through these web development projects, I've gained valuable experience in full-stack development, user
                experience design, performance optimization, and modern deployment practices. Each project has contributed
                to my understanding of scalable architecture and best practices in web development.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-[#717689] text-sm">
            <p className="mb-1">
              Built with <span className="text-white font-medium">Next.js</span> and{" "}
              <span className="text-white font-medium">Tailwind CSS</span>
            </p>
            <p>
              Developed by <span className="text-white font-medium">Nguyen Le Truong Vu</span>
            </p>
          </div>
        </div>
      </div>
    );
}
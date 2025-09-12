import { ArrowLeft, Home, MousePointer, Globe, Camera, Linkedin, Github, ExternalLink, Code2, Smartphone } from "lucide-react"
import Link from "next/link"
import ProjectPreview from "../../../components/tab-projects"
import CinevieScreen from "../../../assets/cinevie-home.png"
import CinevieMobile from "../../../assets/cinevie-mobile.png"
import CinevieDesk from "../../../assets/cinevie-desk.png"
import KoreanScreen from "../../../assets/korean-screen.png"
import KoreanMobile from "../../../assets/mobile-korean.png"
import KoreanDesk from "../../../assets/korean-desk.png"
interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params

  const projectData = {
    "design-projects": {
      title: "Design projects",
      subtitle: "Subtitle",
      description:
        "Explore my collection of innovative design projects that blend functionality with aesthetic appeal. Each project represents a unique challenge solved through thoughtful design thinking and user-centered approaches.",
      heroGradient: "from-[#01071a] via-[#000588] to-[#b6d2ff]",
      sections: [
        {
          title: "Project title",
          subtitle: "and some additional information",
          content:
            "Explore what your project is about, what your goals were, and how you achieved them. This section provides context and background for your creative process.",
          details:
            "This approach allows you to tell a story using a variety of content blocks and layouts to showcase your detailed creative process.",
        },
      ],
    },
    "mobile-projects": {
      title: "Mobile projects",
      subtitle: "Subtitle",
      description:
        "Discover my portfolio of mobile development projects that highlight my skills in creating seamless and engaging mobile experiences. From intuitive user interfaces to robust backend integrations, each project showcases my ability to deliver high-quality mobile applications.",
      heroGradient: "from-green-400 via-blue-500 to-purple-600",
      sections: [
        {
          title: "Project title",
          subtitle: "and some additional information",
          content:
            "Explore what your project is about, what your goals were, and how you achieved them. This section provides context and background for your development process.",
          details:
            "This approach allows you to tell a story using a variety of content blocks and layouts to showcase your detailed development process.",
        },
      ],
    },
    "web-projects": {
      title: "Web Development Projects",
      subtitle: "Full-stack applications & interactive experiences",
      description:
        "Explore my collection of web development projects showcasing modern technologies, responsive design, and user-centered development. Each project demonstrates technical expertise and creative problem-solving in the digital space.",
      heroGradient: "from-rose-500 via-pink-500 to-violet-500",
      sections: [
        {
          title: "Korean Learning Admin Dashboard",
          subtitle: "NextJS, NestJS, Real-time Updates, MongoDB, Tailwind CSS, Shadcn UI",
          content:
            "Develop an admin web for a Korean language learning application. Responsible for managing lesson content, quizzes, and user information.",
          details:
            "Setup Turborepo manage projects mono-repo. Integrate CKEditor 5 to create a rich text editor, allowing users to easily manage and format their posts. Added multi-language support using i18n with 8 languages. Integrate MyMemory translation API to develop automatic translation features for content. Additional functions such as Voice Input and Text to Speech have been built to improve the user experience. Manage lessons, quizzes, and analyze user data. Use the new features of Next.js such as Server Components and the revalidate option to cache data from the API. This not only helps reduce server load but also ensures that content is always updated and displayed quickly to users.",
          tech: ["NextJS", "NestJS", "MongoDB", "Shadcn/UI", "Tailwind CSS", "CKEditor 5", "i18n", "MyMemory API"],
          liveUrl: "https://korean-learning-app-admin.vercel.app",
          githubUrl: "https://github.com/nttaif/korean-learning-app",
          image_url_screen: KoreanScreen,
          image_url_mobile: KoreanMobile,
          image_url_desktop: KoreanDesk,
        },
        {
          title: "Movie Booking Web App",
          subtitle: "Next.js, TypeScript, Tailwind CSS, NestJS, MongoDB",
          content:
            "Built a full-stack movie booking platform with authentication, real-time seat selection, payment integration, and admin dashboard for managing movies, showtimes, and revenue. Applied RESTful APIs and Clean Architecture principles.",
          details:
            "Built a full-stack movie ticket booking platform with secure authentication using Auth.js and JWT. Implemented ticket booking flow including real-time seat selection, payment integration, and checkout process. Built Admin Dashboard to manage: Movies, Cinemas & Rooms, Showtimes, Users, Tickets Revenue reports by movie and cinema. After successful checkout, an email confirmation is sent to the customer with booking details and a QR code for ticket verification. Integrated RESTful APIs with Axios, and applied role-based access control. Applied best practices using SOLID and Clean Architecture.",
          tech: ["Next.js", "TypeScript", "NestJS", "MongoDB", "Tailwind CSS", "Auth.js"],
          liveUrl: "https://cinevie-two.vercel.app",
          githubUrl: "https://github.com/Gorochiko/Cinevie",
          image_url_screen: CinevieScreen,
          image_url_mobile: CinevieMobile,
          image_url_desktop: CinevieDesk,
        },

      ],
    }
  }

  const project = projectData[slug as keyof typeof projectData]

  if (!project) {
    return <div>Project not found</div>
  }
  if (project == projectData["web-projects"]) {
    return (
      <div className="min-h-screen bg-[#15161a] text-white flex">
        {/* Sidebar */}
        <div className="w-20 flex flex-col items-center py-8">
          <div className="bg-[#2a2d36] rounded-full p-2 flex flex-col items-center space-y-4">
            <Link href="/" className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
              <Home className="w-5 h-5 text-[#717689]" />
            </Link>

            <div className="p-3 bg-[#3f424d] rounded-full">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="w-1 h-1 bg-white rounded-full"></div>

            <div className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
              <Globe className="w-5 h-5 text-[#717689]" />
            </div>
            <div className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
              <Smartphone className="w-5 h-5 text-[#717689]" />
            </div>

            <div className="w-6 h-px bg-[#3f424d] my-2"></div>

            <div className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
              <Linkedin className="w-5 h-5 text-[#717689]" />
            </div>
            <div className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
              <Github className="w-5 h-5 text-[#717689]" />
            </div>
          </div>
        </div>

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
                     imageScreen={"image_url_screen" in project ? project.image_url_screen : ""}
                     imageDesktop={"image_url_desktop" in project ? project.image_url_desktop : ""}
                     imageMobile={"image_url_mobile" in project ? project.image_url_mobile : ""}
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
    )
  }
  return (
    <div className="min-h-screen bg-[#15161a] text-white flex">
      {/* Sidebar */}
      <div className="w-20 flex flex-col items-center py-8">
        <div className="bg-[#2a2d36] rounded-full p-2 flex flex-col items-center space-y-4">
          <Link href="/" className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
            <Home className="w-5 h-5 text-[#717689]" />
          </Link>

          <div className="p-3 bg-[#3f424d] rounded-full">
            <MousePointer className="w-5 h-5 text-white" />
          </div>
          <div className="w-1 h-1 bg-white rounded-full"></div>

          <div className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
            <Globe className="w-5 h-5 text-[#717689]" />
          </div>
          <div className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
            <Camera className="w-5 h-5 text-[#717689]" />
          </div>

          <div className="w-6 h-px bg-[#3f424d] my-2"></div>

          <div className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
            <Linkedin className="w-5 h-5 text-[#717689]" />
          </div>
          <div className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
            <Github className="w-5 h-5 text-[#717689]" />
          </div>
        </div>
      </div>

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
                <h2 className="text-5xl font-bold mb-3 group-hover:text-[#cdffe8] transition-colors duration-300">
                  Project 1
                </h2>
                <p className="text-[#cdffe8] text-lg group-hover:text-white transition-colors duration-300">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">{project.sections[0].title}</h3>
              <h4 className="text-lg text-[#aaaeb9] mb-4">{project.sections[0].subtitle}</h4>
              <p className="text-[#aaaeb9] leading-relaxed mb-4">{project.sections[0].content}</p>
              <p className="text-[#aaaeb9] leading-relaxed">{project.sections[0].details}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-[#3f424d] rounded-xl h-48 flex items-center justify-center hover:bg-[#4a4f5c] transition-all duration-300 cursor-pointer group">
              <span className="text-[#717689] group-hover:text-white transition-colors duration-300">
                Project Image
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#3f424d] rounded-xl h-24 flex items-center justify-center hover:bg-[#4a4f5c] transition-all duration-300 cursor-pointer group">
                <span className="text-[#717689] text-sm group-hover:text-white transition-colors duration-300">
                  Detail
                </span>
              </div>
              <div className="bg-[#3f424d] rounded-xl h-24 flex items-center justify-center hover:bg-[#4a4f5c] transition-all duration-300 cursor-pointer group">
                <span className="text-[#717689] text-sm group-hover:text-white transition-colors duration-300">
                  Detail
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section with Blue Background */}
        <div className="bg-gradient-to-r from-[#01071a] to-[#000588] rounded-2xl p-10 mb-16 animate-in fade-in slide-in-from-left duration-700 delay-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer group">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-[#cdffe8] transition-colors duration-300">
              Section title:
            </h3>
            <h4 className="text-xl text-[#b6d2ff] mb-6 group-hover:text-white transition-colors duration-300">
              And a subtitle
            </h4>
            <p className="text-[#cdffe8] leading-relaxed group-hover:text-white transition-colors duration-300">
              Explore an interactive feature of the project and show some visual elements to showcase your detailed
              creative in a process.
            </p>
          </div>
        </div>

        {/* Large Image Section */}
        <div className="mb-16">
          <div className="bg-[#3f424d] rounded-2xl h-[400px] flex items-center justify-center mb-6 relative overflow-hidden">
            <span className="text-[#717689] text-lg">Featured Project Image</span>
          </div>
          <div className="flex items-center space-x-2 text-[#717689] text-sm">
            <div className="w-2 h-2 bg-[#717689] rounded-full"></div>
            <span>Image caption or description</span>
          </div>
        </div>

        {/* Grid Gallery Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Section title:</h3>
          <h4 className="text-lg text-[#aaaeb9] mb-8">And a subtitle</h4>
          <p className="text-[#aaaeb9] leading-relaxed mb-12 max-w-2xl">
            Explore an interactive feature of the project and show some visual elements to showcase your detailed
            creative in a process.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#3f424d] rounded-xl aspect-square flex items-center justify-center hover:bg-[#4a4f5c] transition-colors duration-200"
              >
                <span className="text-[#717689] text-sm">Image {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Different Styles Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Section title</h3>
          <h4 className="text-lg text-[#aaaeb9] mb-8">with different styles</h4>
          <p className="text-[#aaaeb9] leading-relaxed mb-12 max-w-2xl">
            Explore an interactive feature of the project and show some visual elements to showcase your detailed
            creative in a process.
          </p>

          <div className="bg-[#3f424d] rounded-2xl h-[350px] flex items-center justify-center relative overflow-hidden">
            <span className="text-[#717689] text-lg">Style Showcase</span>
          </div>
        </div>

        {/* Takeaway Section */}
        <div className="bg-gradient-to-br from-[#000588] via-[#01071a] to-[#b6d2ff] rounded-2xl p-10 mb-16 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer group">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
          <div className="max-w-2xl relative z-10">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-[#cdffe8] transition-colors duration-300">
              Takeaway:
            </h3>
            <h4 className="text-xl text-[#b6d2ff] mb-6 group-hover:text-white transition-colors duration-300">
              And a subtitle
            </h4>
            <p className="text-[#cdffe8] leading-relaxed group-hover:text-white transition-colors duration-300">
              Write about what you've learned during this project, what are the key takeaways and how this project has
              influenced your approach to future work.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-[#717689] text-sm">
          <p className="mb-1">
            Brought to you be <span className="text-white font-medium">Once UI</span>
          </p>
          <p>
            Created by <span className="text-white font-medium">Lorant Toth</span>
          </p>
        </div>
      </div>
    </div>
  )
}

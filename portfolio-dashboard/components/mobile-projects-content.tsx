import { ArrowLeft, Github, ExternalLink, Smartphone, Play, Download, Star, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { StaticImageData } from "next/image"

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
    color?: string
  }>
}

interface MobileProjectsContentProps {
  project: Project
}

export default function MobileProjectsContent({ project }: MobileProjectsContentProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-slate-300 hover:text-white transition-all duration-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="group-hover:translate-x-0.5 transition-transform duration-300">Back to portfolio</span>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl mb-6">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">{project.description}</p>
        </div>

        {/* Featured Project */}
        {project.sections.map((mobileProject, index) => (
          <div key={index} className="mb-20">
            {/* Project Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{mobileProject.title}</h2>
              <p className="text-emerald-400 text-lg font-medium mb-6">{mobileProject.subtitle}</p>
            </div>

            {/* Phone Mockup Section */}
            <div className="relative mb-16">
              <div className="flex justify-center items-center space-x-8">
                {/* Phone Mockup */}
                <div className="flex gap-8 justify-center">
                  {/* Phone 1 */}
                  <div className="relative">
                    <div className="w-80 h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-4 shadow-2xl">
                      <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                        {/* Screen Content */}
                        <div className="w-full h-full bg-gradient-to-b from-purple-600 via-blue-600 to-emerald-600 flex items-center justify-center">
                          {mobileProject.image_url_mobile ? (
                            <Image
                              src={mobileProject.image_url_mobile || "/placeholder.svg"}
                              alt={mobileProject.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="text-center">
                              <Play className="w-16 h-16 text-white/80 mx-auto mb-4" />
                              <h3 className="text-white text-xl font-bold">Cinevie</h3>
                              <p className="text-white/80">Movie Booking</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone 2 */}
                  <div className="relative">
                    <div className="w-80 h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-4 shadow-2xl">
                      <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                        {/* Screen Content */}
                        <div className="w-full h-full bg-gradient-to-b from-emerald-600 via-blue-600 to-purple-600 flex items-center justify-center">
                          {mobileProject.image_url_screen ? (
                            <Image
                              src={mobileProject.image_url_screen || "/placeholder.svg"}
                              alt={mobileProject.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="text-center">
                              <Play className="w-16 h-16 text-white/80 mx-auto mb-4" />
                              <h3 className="text-white text-xl font-bold">Cinevie</h3>
                              <p className="text-white/80">Movie Booking</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Feature Cards */}

              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">About the Project</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{mobileProject.content}</p>
                  <p className="text-slate-300 leading-relaxed">{mobileProject.details}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {mobileProject.liveUrl && (
                    <Link
                      href={mobileProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-xl transition-all duration-200 font-medium"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Live App</span>
                    </Link>
                  )}
                  {mobileProject.githubUrl && (
                    <a
                      href={mobileProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200 font-medium backdrop-blur-sm"
                    >
                      <Github className="w-5 h-5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>


              <div>
                <h3 className="text-2xl font-bold mb-6">Technology Stack</h3>
                {mobileProject.tech && (
                  <div className="grid grid-cols-2 gap-4">
                    {mobileProject.tech.map((tech: string, techIndex: number) => (
                      <div
                        key={techIndex}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-200"
                      >
                        <span className="text-white font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}




        {/* Footer */}
        <div className="text-center text-slate-400 border-t border-white/10 pt-8">
          <p className="mb-2">
            Built with <span className="text-emerald-400 font-medium">Flutter</span> and{" "}
            <span className="text-cyan-400 font-medium">TypeScript</span>
          </p>
          <p>
            Developed by <span className="text-white font-medium">Nguyen Le Truong Vu</span>
          </p>
        </div>
      </div>
    </div>
  )
}

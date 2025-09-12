"use client"
import {  MousePointer, Globe, Camera, Linkedin, Github } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  description: string
  icon: any
  gradient: string
  hoverColors: {
    title: string
    subtitle: string
    description: string
  }
  shadowColor: string
}



export default function ProjectCarousel() {
      const projects = [
    {
      id: "design-projects",
      title: "Design projects",
      subtitle: "Replace with cover",
      category: "Design",
      description: "My design projects",
      icon: MousePointer,
      gradient: "from-[#01071a] via-[#000588] to-[#b6d2ff]",
      hoverColors: {
        title: "group-hover:text-[#cdffe8]",
        subtitle: "group-hover:text-[#b6d2ff]",
        description: "group-hover:text-[#b6d2ff]",
      },
      shadowColor: "group-hover:shadow-blue-500/10",
    },
    {
      id: "mobile-projects",
      title: "Mobile projects",
      subtitle: "Coming soon",
      category: "Mobile",
      description: "My mobile development",
      icon: Camera,
      gradient: "from-green-400 via-blue-500 to-purple-600",
      hoverColors: {
        title: "group-hover:text-white",
        subtitle: "group-hover:text-blue-200",
        description: "group-hover:text-blue-200",
      },
      shadowColor: "group-hover:shadow-blue-500/10",
    },
    {
      id: "web-projects",
      title: "Web projects",
      subtitle: "Digital experiences",
      category: "Web",
      description: "My web development",
      icon: Globe,
      gradient: "from-rose-500 via-pink-500 to-violet-500",
      hoverColors: {
        title: "group-hover:text-white",
        subtitle: "group-hover:text-pink-200",
        description: "group-hover:text-pink-200",
      },
      shadowColor: "group-hover:shadow-rose-500/10",
    },
  ] as Project[]
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  return (
    <div className="mb-17">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={scrollLeft}
            className="p-2 bg-[#2a2d36] hover:bg-[#3f424d] rounded-full transition-colors duration-200 group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-[#717689] group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-[#2a2d36] hover:bg-[#3f424d] rounded-full transition-colors duration-200 group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-[#717689] group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => {
          const IconComponent = project.icon
          return (
            <Link key={project.id} href={`/projects/${project.id}`} className="block group flex-shrink-0">
              <div
                className={`bg-[#656a7b] rounded-2xl p-6 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl ${project.shadowColor} cursor-pointer w-80 h-80`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-95 transition-all duration-500`}
                ></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex-1 flex items-center justify-center min-h-0">
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                      <h3
                        className={`text-4xl font-bold mb-2 ${project.hoverColors.title} transition-colors duration-300 text-balance`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-[#aaaeb9] ${project.hoverColors.subtitle} transition-colors duration-300`}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mt-4 transform group-hover:translate-x-1 transition-transform duration-300">
                    <div className="p-2 bg-black/20 rounded-lg backdrop-blur-sm">
                      <IconComponent className="w-4 h-4 text-[#aaaeb9] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium group-hover:text-white transition-colors duration-300 truncate">
                        {project.category}
                      </p>
                      <p
                        className={`text-xs text-[#aaaeb9] ${project.hoverColors.description} transition-colors duration-300 truncate`}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Scroll indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 bg-[#3f424d] rounded-full transition-colors duration-200 hover:bg-[#717689]"
          />
        ))}
      </div>
    </div>
  )
}
import { Code2, Github, Play } from "lucide-react";
import Link from "next/link";

export default function InnovativeProjectCard({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0
  const accentColors = {
    blue: "border-[#06b6d4] hover:border-[#1e40af] hover:shadow-blue-500/20",
  }

  return (
    <div className="slide-up-stagger opacity-0 mb-32" style={{ animationDelay: `${index * 200}ms` }}>
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
        {/* Project Info */}
        <div className={`lg:col-span-7 space-y-8 ${!isEven ? "lg:col-start-6" : ""}`}>
          <div className="relative">
            {/* Morphing background blob */}
            <div
              className={`absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r ${project.color || "from-[#06b6d4] to-[#1e40af]"}} opacity-10 morphing-blob`}
            ></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-1 h-16 bg-gradient-to-b ${project.color || "from-[#06b6d4] to-[#1e40af]"}} rounded-full`}
                ></div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-black text-white mb-2">{project.title}</h3>
                  <p
                    className={`text-xl font-semibold bg-gradient-to-r ${project.color || "from-[#06b6d4] to-[#1e40af]"}} bg-clip-text text-transparent`}
                  >
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-[#aaaeb9] leading-relaxed">{project.content}</p>
            <p className="text-[#aaaeb9] leading-relaxed">{project.details}</p>
          </div>

          {/* Tech Stack with shimmer effect */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-[#06b6d4]" />
              <h4 className="text-xl font-bold text-white">Technology Stack</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className="px-4 py-2 bg-[#3f424d] text-[#06b6d4] rounded-full border border-[#4a4f5c] hover:border-[#06b6d4]/50 transition-all duration-300 hover:scale-105 cursor-default relative overflow-hidden group"
                >
                  <span className="relative z-10">{tech}</span>
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons with bounce animation */}
          <div className="flex gap-4 pt-6">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${project.color || "from-[#06b6d4] to-[#1e40af]"}} text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Try App</span>
            </Link>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#3f424d] border-2 border-[#4a4f5c] hover:border-[#06b6d4] text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Github className="w-5 h-5" />
              <span>View Code</span>
            </a>
          </div>
        </div>

        {/* Project Images */}
        <div className={`lg:col-span-5 ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
          <div className="relative floating-card">
            {/* Main screenshot with creative border */}
            <div
              className={`relative bg-gradient-to-br ${project.color || "from-[#06b6d4] to-[#1e40af]"}} p-1 rounded-3xl ${accentColors.blue} border-2 transition-all duration-500 hover:shadow-2xl`}
            >
              <div className="bg-[#3f424d] rounded-[22px] p-6">
                <img
                  src={project.image_url_screen || "/placeholder.svg?height=400&width=250&query=mobile app screenshot"}
                  alt="App screenshot"
                  className="w-full h-80 object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Floating mini previews */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-3">
              <div className="w-20 h-20 bg-[#3f424d] rounded-2xl p-2 border border-[#4a4f5c] hover:scale-110 transition-transform duration-300 cursor-pointer">
                <img
                  src={project.image_url_desktop || "/placeholder.svg?height=60&width=80&query=development workspace"}
                  alt="Development"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-20 h-20 bg-[#3f424d] rounded-2xl p-2 border border-[#4a4f5c] hover:scale-110 transition-transform duration-300 cursor-pointer">
                <img
                  src={project.image_url_mobile || "/placeholder.svg?height=60&width=40&query=mobile interface"}
                  alt="Mobile UI"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
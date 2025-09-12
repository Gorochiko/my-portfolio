
import { Home, MousePointer, Globe, Camera, Linkedin, Github } from "lucide-react"
import Link from "next/link"
export function Sidebar() {
    return (
          <div className="w-20 flex flex-col items-center py-8 sticky top-8 h-fit">
        <div className="bg-[#2a2d36] rounded-full p-2 flex flex-col items-center space-y-4">
          {/* Active home icon with highlight */}
          <div className="p-3 bg-[#3f424d] rounded-full">
            <Home className="w-5 h-5 text-white" />
          </div>

          {/* Active indicator dot */}
          <div className="w-1 h-1 bg-white rounded-full"></div>

          {/* Navigation icons */}
          <Link href="/navigation-icons" className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
            <MousePointer className="w-5 h-5 text-[#717689] hover:text-white transition-colors" />
          </Link>
          <div className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
            <Globe className="w-5 h-5 text-[#717689]" />
          </div>
          <div className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
            <Camera className="w-5 h-5 text-[#717689]" />
          </div>

          {/* Divider line */}
          <div className="w-6 h-px bg-[#3f424d] my-2"></div>

          {/* Social icons */}
          <a href="https://linkedin.com" className="p-3 hover:bg-[#3f424d] rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-[#717689]" />
          </a>
          <a href="https://github.com" className="p-3 hover:bg-[#3f424d] rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 text-[#717689]" />
          </a>
        </div>
      </div>
    )
}
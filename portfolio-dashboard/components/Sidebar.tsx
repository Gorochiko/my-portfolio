
import { Home, MousePointer, Globe, Camera, Linkedin, Github } from "lucide-react"
import { GitHubURL, LinkedInURL } from "@/app/Information"
import Link from "next/link"
export function Sidebar() {
  return (
    <div className="w-20 flex flex-col  items-center py-8 fixed top-8 h-fit">
      <div className="bg-[#2a2d36] rounded-full p-2 flex flex-col items-center space-y-4">
        {/* Active home icon with highlight */}
        <div className="p-3 bg-[#3f424d] rounded-full">
          <Home className="w-5 h-5 text-white" />
        </div>

        {/* Active indicator dot */}
        <div className="w-1 h-1 bg-white rounded-full"></div>

      
  


        {/* Social icons */}
        <Link href={LinkedInURL} className="p-3 hover:bg-[#3f424d] rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-[#717689]" />
        </Link>
        <Link href={GitHubURL} className="p-3 hover:bg-[#3f424d] rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 text-[#717689]" />
        </Link>
        <Link href="#" className="p-3 hover:bg-[#3f424d] rounded-full transition-colors">
          <Globe className="w-5 h-5 text-[#717689]" />
        </Link>
      </div>
    </div>
  )
}
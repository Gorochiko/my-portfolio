
import { YourName } from "./Information"
import ProjectCarousel from "../components/ProjectCarousel"
import { Sidebar } from "@/components/Sidebar"
export default function PortfolioDashboard() {
  return (
    <div className="min-h-screen bg-[#15161a] text-white flex">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 px-12 py-12 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6">{YourName}</h1>
          <p className="text-[#aaaeb9] text-lg leading-relaxed max-w-2xl">
            I am a Software Engineering graduate with expertise in both {" "} 
            <span className="text-white font-medium">backend</span>
            {" "} and {" "} 
             <span className="text-white font-medium">frontend development</span>. I have worked on a personal website for {" "}  
             <span className="text-white font-medium">booking movie tickets</span> and a collaborative {" "}  
             <span className="text-white font-medium">Admin website</span> for managing a Korean language learning platform. I am passionate about building {" "}  
             <span className="text-white font-medium">efficient</span> and <span className="text-white font-medium">scalable web applications</span>.
          </p>
        </div>

        {/* Projects Section - Client Component */}
        <ProjectCarousel  />

        {/* Footer */}
        <footer className="text-center text-[#aaaeb9] border-t border-[#3f424d] pt-8 mt-8">
          <p>2025 &copy; All rights reserved.</p>
          <p>
            Created by <span className="text-white font-medium">Nguyen Le Truong Vu</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
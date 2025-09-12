"use client"
import Image, { type StaticImageData } from "next/image"
import type React from "react"

import { useState } from "react"
import { Monitor, Smartphone, Camera } from "lucide-react"

interface ProjectPreviewProps {
  imageScreen: StaticImageData | string
  imageDesktop: StaticImageData | string
  imageMobile: StaticImageData | string
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ imageScreen, imageDesktop, imageMobile }) => {
  const [activeTab, setActiveTab] = useState<"screen" | "desktop" | "mobile">("screen")

  const tabs = [
    {
      id: "screen" as string ,
      label: "Screenshot",
      icon: Camera,
      image: imageScreen,
      width: 800,
      height: 400,
    },
    {
      id: "desktop" as const,
      label: "Desktop",
      icon: Monitor,
      image: imageDesktop,
      width: 800,
      height: 400,
    },
    {
      id: "mobile" as const,
      label: "Mobile",
      icon: Smartphone,
      image: imageMobile,
      width: 200,
      height: 400,
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto  shadow-2xl rounded-3xl p-8 border border-slate-700/50">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Project Preview</h2>
        <p className="text-slate-400 text-sm">View your project across different devices</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-2 mb-8  p-2 rounded-2xl border border-slate-700/30">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "screen" | "desktop" | "mobile")}
              className={`
                flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-out
                ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }
              `}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Image Preview */}
      <div className="relative w-full min-h-[450px] flex items-center justify-center bg-slate-800/30 rounded-2xl border border-slate-700/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`
              absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out
              ${activeTab === tab.id ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
            `}
          >
            <div className="relative group">
              <Image
                width={tab.width}
                height={tab.height}
                src={tab.image || "/placeholder.svg"}
                alt={`${tab.label} View`}
                className="max-h-[400px] object-contain rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              {!tab.image && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl">
                  <span className="text-slate-500 text-sm">No preview available</span>
                </div>
              )}
            
            </div>
          </div>
        ))}

        {/* Loading state placeholder */}
        {!imageScreen && !imageDesktop && !imageMobile && (
          <div className="text-slate-500 text-sm">No preview available</div>
        )}  
      </div>

      {/* Footer info */}
      <div className="mt-6 text-center">
        <p className="text-slate-500 text-xs">Click on the tabs above to switch between different views</p>
      </div>
    </div>
  )
}

export default ProjectPreview

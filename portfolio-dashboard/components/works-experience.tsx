"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Experience {
  company: string
  position: string
  period: string
  description: string
  technologies?: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <Card className="w-full bg-[#23242a] border border-[#35363c] rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Work Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#35363c] last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#6366f1] border-4 border-[#23242a]" />

              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                  <p className="text-base font-medium text-[#b0b3c2]">{exp.company}</p>
                  <p className="text-sm text-[#b0b3c2]">{exp.period}</p>
                </div>

                <p className="text-sm text-[#e5e7ef] leading-relaxed">{exp.description}</p>

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 text-xs font-medium bg-[#35363c] text-[#b0b3c2] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

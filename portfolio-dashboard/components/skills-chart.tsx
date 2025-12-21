"use client"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { cn } from "@/lib/utils"

export type Skill = {
  name: string
  level: number 
  color?: string
}

export interface SkillsChartProps {
  skills: Skill[]
  className?: string
  title?: string
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
        <p className="text-sm font-medium text-foreground">{payload[0].payload.name}</p>
        <p className="text-sm text-muted-foreground">{`Trình độ: ${payload[0].value}%`}</p>
      </div>
    )
  }
  return null
}

export function SkillsChart({ skills, className, title = "Personal Skills" }: SkillsChartProps) {
  // Tính chiều cao động: mỗi kỹ năng ~40px, tối thiểu 300px
  const chartHeight = Math.max(skills.length * 40, 300);
  return (
    <div className={cn("w-full p-6 bg-[#23242a] border border-[#35363c] rounded-xl shadow-lg", className)}>
      <h3 className="font-semibold text-lg text-white mb-6">{title}</h3>

      <div className="w-full" style={{ height: chartHeight }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={skills} layout="vertical" margin={{ left: 0, right: 24, top: 0, bottom: 0 }}>
            <XAxis
              type="number"
              domain={[0, 100]}
              tick={{ fontSize: 12, fill: "#b0b3c2" }}
              axisLine={{ stroke: "#35363c" }}
              tickLine={{ stroke: "#35363c" }}
            />
            <YAxis
              dataKey="name"
              type="category"
              width={120}
              tick={{ fontSize: 14, fill: "#fff" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#23242a" }} />
            <Bar dataKey="level" maxBarSize={48}>
              {skills.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color || "#6366f1"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

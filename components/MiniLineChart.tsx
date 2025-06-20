'use client'

import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'

interface MiniLineChartProps {
  data: { date: string; value: number }[]
  isPositive?: boolean
}

export function MiniLineChart({ data, isPositive = true }: MiniLineChartProps) {
  const strokeColor = isPositive ? '#22c55e' : '#ef4444' // Tailwind green-500 / red-500

  return (
    <ResponsiveContainer width={100} height={40}>
      <LineChart data={data}>
        <Tooltip
          contentStyle={{ display: 'none' }}
          wrapperStyle={{ display: 'none' }}
        />
        <Line
          type="linear"
          dataKey="value"
          stroke={strokeColor}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

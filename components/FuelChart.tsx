'use client'

import React, { useState, useMemo } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import data from '../constants/fuelData.json' // place JSON in same dir
import { ChartContainer } from './ui/chart'
import PMSModal from './PMSModal'

const PRODUCTS = ['PMS', 'AGO', 'DPK', 'LPG'] as const
type ProductKey = (typeof PRODUCTS)[number]
const TIME_RANGES = ['1d', '1w', '1m']

export default function FuelTrendChart() {
  const [selectedProduct, setSelectedProduct] = useState<ProductKey>('AGO')
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [timeRange, setTimeRange] = useState('1m')
  const [open, setOpen] = useState(false)

  const states = useMemo(() => [...new Set(data.map((item) => item.state))], [])
  const regions = useMemo(
    () => [...new Set(data.map((item) => item.region))],
    []
  )

  const filteredData = useMemo(() => {
    const result = data.filter((entry) => {
      return (
        (!selectedState || entry.state === selectedState) &&
        (!selectedRegion || entry.region === selectedRegion)
      )
    })
    const grouped = result.reduce((acc, entry) => {
      const entryDate = new Date(entry.date).toISOString().split('T')[0]
      const found = acc.find((item) => item.date === entryDate)
      const price = entry[selectedProduct]
      if (found) {
        found[entry.state] = price
      } else {
        acc.push({ date: entryDate, [entry.state]: price })
      }
      return acc
    }, [] as any[])

    // reduce range
    const length = timeRange === '1d' ? 1 : timeRange === '1w' ? 7 : 30
    return grouped.slice(-length)
  }, [selectedProduct, selectedState, selectedRegion, timeRange])

  return (
    <div className="p-4 bg-[#171717] text-white space-y-6">
      <div className="flex justify-between gap-4 flex-wrap">
        <p className="">Review Price Analysis (NGN)</p>
        <Tabs
          defaultValue={selectedProduct}
          onValueChange={(value) => setSelectedProduct(value as ProductKey)}
          className="-mt-5"
        >
          <TabsList>
            {PRODUCTS.map((p) => (
              <TabsTrigger key={p} value={p}>
                {p}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* <ResponsiveContainer width="100%" height={200}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
          <XAxis dataKey="date" stroke="#A3A3A3" />
          <YAxis stroke="#A3A3A3" />
          <Tooltip />
          {filteredData.length > 0 &&
            Object.keys(filteredData[0])
              .filter((key) => key !== 'date')
              .map((state) => (
                <Line
                  key={state}
                  type="monotone"
                  dataKey={state}
                  stroke="#16a34a"
                  dot={false}
                />
              ))}
        </LineChart>
      </ResponsiveContainer> */}
      <ResponsiveContainer width="100%" height={150}>
        <LineChart accessibilityLayer data={filteredData}>
          {/* <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          /> */}
          {filteredData.length > 0 &&
            Object.keys(filteredData[0])
              .filter((key) => key !== 'date')
              .map((state) => (
                <Line
                  type="linear"
                  dataKey={state}
                  stroke="#16a34a"
                  strokeWidth={2}
                  dot={false}
                />
              ))}
        </LineChart>
      </ResponsiveContainer>
      <div className="-mt-3">
        {' '}
        <div
          className="flex justify-end text-primary cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          View daily summary
        </div>
        <PMSModal open={open} onClose={() => setOpen(false)} />
        <div className="flex flex-col md:flex-row items-center justify-between">
          {' '}
          <Tabs defaultValue={timeRange} onValueChange={setTimeRange}>
            <TabsList>
              {TIME_RANGES.map((t) => (
                <TabsTrigger key={t} value={t}>
                  {t}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="space-x-2 flex items-center justify-center">
            <Select onValueChange={setSelectedState}>
              <SelectTrigger className="w-[160px] outline-none ">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

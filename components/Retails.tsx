'use client'

import { productColumns } from '@/app/dashboard/analysis/staticData'
import { DataTable } from './ui/DataTable'
import FuelTrendChart from './FuelChart'
import { productPerformanceWithTrendData } from '@/constants/productPerformanceWithTrendData'

const Retails = () => {
  const currentPrices = [
    {
      product: 'PMS',
      description: 'Premium Motor Spirit',
      price: 714.26,
      change: 0.37,
      change_percent: '+0.09%',
    },
    {
      product: 'AGO',
      description: 'Automotive Gas Oil',
      price: 1249.06,
      change: -9.01,
      change_percent: '-0.34%',
    },
    {
      product: 'ICE',
      description: 'ICE Brent Crude',
      price: 75.01,
      change: 0.68,
      change_percent: '+0.90%',
    },
    {
      product: 'DPK',
      description: 'Dual Purpose Kerosene',
      price: 1088.92,
      change: -50.9,
      change_percent: '-0.92%',
    },
    {
      product: 'LPG',
      description: 'Liquified Petroleum Gas',
      price: 1087.66,
      change: -36.1,
      change_percent: '-0.67%',
    },
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[#171717] rounded-md">
          <h2 className="p-4">Current product retail prices</h2>
          <div className="w-full divide-y divide-[#404040] text-xs">
            {currentPrices.map((items, index) => {
              const isPositive = items.change > 0
              return (
                <div
                  className="flex items-center justify-between gap-4 px-4 py-4"
                  key={index}
                >
                  <div className="space-x-2 flex">
                    <p className="font-semibold text-[#FAFAFA]">
                      {items.product}
                    </p>
                    <p className="text-[#A3A3A3]">{items.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[#FAFAFA] font-semibold">
                      {typeof items.price === 'number'
                        ? `₦${items.price.toLocaleString()}`
                        : items.price}
                    </p>
                    <p
                      className={`text-xs font-semibold ${
                        isPositive ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {items.change_percent}
                    </p>
                    <p
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        isPositive
                          ? 'bg-green-900 text-green-300'
                          : 'bg-red-900 text-red-300'
                      }`}
                    >
                      {items.change > 0 ? '+' : ''}
                      {items.change}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="bg-[#171717] rounded-md">
          <FuelTrendChart />
        </div>
      </div>
      <div className="space-y-10 text-[#A3A3A3]">
        <div className="mt-8">
          <div className="max-w-md">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
              Search
            </label>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#FAFAFA]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm border border-[#404040] text-[#FAFAFA] rounded-full bg-transparent"
                placeholder="Search"
                required
              />
            </div>
          </div>
          <h2 className="">Report - Week 31, 2024</h2>
          <DataTable
            columns={productColumns}
            data={productPerformanceWithTrendData}
          />
        </div>

        <div className="mt-8">
          <h2 className="">Report - Week 30, 2024</h2>
          <DataTable
            columns={productColumns}
            data={productPerformanceWithTrendData}
          />
        </div>

        <div className="mt-8">
          <h2 className="">Report - Week 29, 2024</h2>
          <DataTable
            columns={productColumns}
            data={productPerformanceWithTrendData}
          />
        </div>

        <div className="mt-8">
          <h2 className="">Report - Week 28, 2024</h2>
          <DataTable
            columns={productColumns}
            data={productPerformanceWithTrendData}
          />
        </div>

        <div className="mt-8">
          <h2 className="">Report - Week 27, 2024</h2>
          <DataTable
            columns={productColumns}
            data={productPerformanceWithTrendData}
          />
        </div>
      </div>
      <div className="flex text-center items-center justify-center my-8">
        <button className="border border-[#404040] rounded-full p-4 bg-transparent mt-4 text-white px-6 py-2">
          {' '}
          See more
        </button>
      </div>
    </div>
  )
}

export default Retails

import { MiniLineChart } from '@/components/MiniLineChart'
import { ColumnDef } from '@tanstack/react-table'
import { Download } from 'lucide-react'
import Image from 'next/image'

type ProductData = {
  product: string
  description: string
  price: string
  change: string
  change_percent: string
  chart?: string // URL or static import for mini-chart
}

export const productColumns: ColumnDef<ProductData>[] = [
  {
    header: 'Product retail price',
    accessorKey: 'product',
    cell: ({ row }) => {
      const product = row.getValue<string>('product')
      const description = row.original.description
      return (
        <div className="flex space-x-2 text-xs">
          <p className="font-bold">{product}</p>
          <p className="text-[#A3A3A3]">{description}</p>
        </div>
      )
    },
  },
  {
    header: 'Current price',
    accessorKey: 'price',
    cell: ({ row }) => {
      const price = row.getValue<string>('price')
      return <span className="font-semibold text-xs">{price}</span>
    },
  },
  {
    header: 'Performance',
    accessorKey: 'change',
    cell: ({ row }) => {
      const change = String(row.getValue('change') ?? '')
      const percent = String(row.original.change_percent ?? '')
      const isPositive = change.startsWith('+') || percent.startsWith('+')
      const color = isPositive ? 'text-green-500' : 'text-red-500'
      const badgeColor = isPositive ? 'bg-green-700/80' : 'bg-red-700/80'

      return (
        <div className="flex gap-2 items-center text-xs">
          <span className={color}>{change}</span>
          <span
            className={`text-white text-xs px-2 py-1 rounded-full ${badgeColor}`}
          >
            {percent}
          </span>
        </div>
      )
    },
  },

  {
    header: '7-day chart',
    accessorKey: 'trendData',
    cell: ({ row }) => {
      const trendData =
        row.getValue<{ date: string; value: number }[]>('trendData')
      const isPositive = row.original.change_percent?.trim().startsWith('+')
      return (
        <div className="">
          <MiniLineChart data={trendData} isPositive={isPositive} />
        </div>
      )
    },
  },
  {
    header: 'Required action',
    id: 'action',
    cell: () => (
      <button className="ml-12">
        <Download size={18} />
      </button>
    ),
  },
]

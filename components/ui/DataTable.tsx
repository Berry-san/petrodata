'use client'

import * as React from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
  getFilteredRowModel,
  FilterFn,
} from '@tanstack/react-table'

import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { ChevronRight } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchableKeys?: (keyof TData)[]
  searchPlaceholder?: string
  exportable?: boolean
}

export function DataTable<TData extends Record<string, any>, TValue>({
  columns,
  data,
  searchableKeys = [],
  searchPlaceholder = 'Search by name or email...',
  exportable = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [search, setSearch] = React.useState('')

  const globalFilterFn: FilterFn<TData> = (row, columnId, filterValue) => {
    if (!searchableKeys.includes(columnId as keyof TData)) return false
    const value = row.getValue(columnId)
    return String(value ?? '')
      .toLowerCase()
      .includes(filterValue.toLowerCase())
  }

  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setSearch,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      globalFilter: search,
    },
  })

  React.useEffect(() => {
    table.setPageSize(pageSize)
  }, [pageSize])

  const pageIndex = table.getState().pagination.pageIndex
  const start = pageIndex * pageSize + 1
  const end = Math.min(
    start + pageSize - 1,
    table.getFilteredRowModel().rows.length
  )
  const total = table.getFilteredRowModel().rows.length

  return (
    <div className="w-full mt-4">
      <div className="overflow-auto text-sm">
        <Table className="bg-[#171717] rounded-md text-sm">
          <TableHeader className="sticky top-0 z-10 text-center">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="text-[#A3A3A3] px-4  border-b border-[#404040]"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody className="divide-y divide-[#404040]">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="h-[20px] text-[#A3A3A3]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

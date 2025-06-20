'use client'

import React from 'react'
import { Menu, AlarmClockPlus, Bell, Search } from 'lucide-react'

type Props = {
  toggleSidebar: () => void
}

const Header = ({ toggleSidebar }: Props) => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="w-full flex items-center justify-between px-8 py-3 bg-[#1f1f1f] text-white">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 bg-[#333] rounded-md"
        >
          <Menu size={24} />
        </button>
        <div>
          <h2 className="text-xl font-semibold">Analysis</h2>
          <p className="text-sm text-gray-400">{today}</p>
        </div>
      </div>

      <div className="space-x-4 hidden md:flex">
        <div className="p-2 rounded-full border border-[#737373] bg-[#525252]">
          <Search size={20} />
        </div>
        <div className="flex items-center space-x-2 p-2 rounded-full border border-[#737373] bg-[#525252]">
          <AlarmClockPlus size={20} />
          <span className="text-sm">Set Alarm</span>
        </div>
        <div className="p-2 rounded-full border border-[#737373] bg-[#525252]">
          <Bell size={20} />
        </div>
      </div>
    </header>
  )
}

export default Header

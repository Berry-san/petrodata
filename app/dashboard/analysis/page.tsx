// import React from 'react'
// import { Search, AlarmClockPlus, Bell } from 'lucide-react'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import Retails from '@/components/Retails'
// import {
//   Droplet,
//   Warehouse,
//   Lightbulb,
//   Ship,
//   Database,
//   PlaneTakeoff,
// } from 'lucide-react'

// const Analysis = () => {
//   const formatToFullDate = (date: Date): string => {
//     return new Intl.DateTimeFormat('en-US', {
//       weekday: 'long',
//       month: 'long',
//       day: 'numeric',
//     }).format(date)
//   }

//   // Usage:
//   const today = formatToFullDate(new Date())
//   return (
//     <div className="text-text-primary">
//       <Tabs defaultValue="retail">
//         <TabsList className="space-x-2 w-fit">
//           <TabsTrigger value="retail">Retail price analysis</TabsTrigger>
//           <TabsTrigger value="flight">Flight analysis</TabsTrigger>
//           <TabsTrigger value="depot">Depots analysis</TabsTrigger>
//           <TabsTrigger value="power">Power analysis</TabsTrigger>
//           <TabsTrigger value="cargo">Cargo analysis</TabsTrigger>
//           <TabsTrigger value="raw">Raw data</TabsTrigger>
//         </TabsList>
//         <TabsContent value="retail">
//           <Retails />
//         </TabsContent>
//         <TabsContent value="flight"></TabsContent>
//       </Tabs>
//     </div>
//   )
// }

// export default Analysis

'use client'

import React from 'react'
import {
  Droplet,
  PlaneTakeoff,
  Warehouse,
  Lightbulb,
  Ship,
  Database,
} from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Retails from '@/components/Retails'

const tabsConfig = [
  {
    value: 'retail',
    label: 'Retail price analysis',
    icon: Droplet,
    component: <Retails />,
  },
  {
    value: 'flight',
    label: 'Flight analysis',
    icon: PlaneTakeoff,
    component: <div>Flight data coming soon...</div>,
  },
  {
    value: 'depot',
    label: 'Depots analysis',
    icon: Warehouse,
    component: <div>Depot insights will appear here.</div>,
  },
  {
    value: 'power',
    label: 'Power analysis',
    icon: Lightbulb,
    component: <div>Power metrics coming shortly.</div>,
  },
  {
    value: 'cargo',
    label: 'Cargo analysis',
    icon: Ship,
    component: <div>Cargo trends and flows displayed here.</div>,
  },
  {
    value: 'raw',
    label: 'Raw data',
    icon: Database,
    component: <div>Raw datasets and exports available here.</div>,
  },
]

const Analysis = () => {
  return (
    <div className="text-text-primary">
      <Tabs defaultValue="retail">
        {/* Wrapper div to ensure proper scroll behavior */}
        <div className="overflow-x-auto w-full">
          <TabsList className="inline-flex space-x-2 min-w-max">
            {tabsConfig.map(({ value, label, icon: Icon }) => (
              <TabsTrigger key={value} value={value} className="shrink-0">
                <Icon size={16} className="mr-1" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {tabsConfig.map(({ value, component }) => (
          <TabsContent key={value} value={value}>
            {component}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default Analysis

'use client'

import React from 'react'
import { X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

interface PMSModalProps {
  open: boolean
  onClose: () => void
}

const PMSModal: React.FC<PMSModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-[#171717] text-white rounded-lg shadow-xl border-none">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle className="text-base text-left  font-semibold">
            Detailed Summary
          </DialogTitle>
          <DialogDescription>
            <p className="text-sm text-gray-300">
              Here&apos;s a quick summary of the PMS (Premium Motor Spirit -
              Petrol) market in Nigeria, breaking down demand, supply, and
              regional trends:
            </p>
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[70vh] mt-4 pr-2">
          <section className="mb-6">
            <h3 className="text-md font-semibold text-white mb-2">Demand</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                Nigeria consumes approximately 40–50 million liters of PMS per
                day
              </li>
              <li>
                Demand is driven by:
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Transportation (70–80%): cars, buses, trucks, motorcycles
                  </li>
                  <li>
                    Industrial and commercial activities (15–20%): generators,
                    machinery
                  </li>
                  <li>Residential use (5–10%): cooking, lighting</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-md font-semibold text-white mb-2">Supply</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                Nigeria relies heavily on imported PMS (95–100%) due to limited
                refining capacity
              </li>
              <li>
                Local refining capacity:
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    NNPC refineries (Kaduna, Warri, Port Harcourt): operating
                    below capacity
                  </li>
                  <li>
                    Private refineries (e.g., Dangote Refinery): under
                    construction or newly commissioned
                  </li>
                </ul>
              </li>
              <li>
                Importation challenges:
                <ul className="list-disc pl-5 space-y-1">
                  <li>Foreign exchange rates</li>
                  <li>Supply chain disruptions</li>
                  <li>Quality control issues</li>
                </ul>
              </li>
            </ul>
          </section>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default PMSModal

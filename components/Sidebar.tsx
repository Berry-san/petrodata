// // 'use client'
// // import React from 'react'
// // import { ChevronsRight } from 'lucide-react'
// // import { ChevronsLeft } from 'lucide-react'
// // import Image from 'next/image'

// // const Sidebar = ({
// //   sidebarOpen,
// //   setSidebarOpen,
// // }: {
// //   sidebarOpen: boolean
// //   setSidebarOpen: (value: boolean) => void
// // }) => {
// //   return (
// //     // <div className="w-full">
// //     <div
// //       className={`${
// //         sidebarOpen ? 'w-[15%]' : 'w-[5%]'
// //       } bg-[#171717] h-screen relative`}
// //     >
// //       {' '}
// //       <button
// //         className="absolute top-20 -right-3 "
// //         onClick={() => setSidebarOpen(!sidebarOpen)}
// //       >
// //         TOG
// //       </button>
// //       <div className="flex gap-4 items-center p-6">
// //         <Image
// //           src="/images/petrodataLogo.png"
// //           alt="logo"
// //           width={50}
// //           height={50}
// //         />
// //         {sidebarOpen && (
// //           <p className="text-white">
// //             <span className="text-primary">Petro</span>data
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //     // </div>
// //   )
// // }

// // export default Sidebar
// // 'use client'
// // import React from 'react'
// // import { ChevronsLeft, ChevronsRight } from 'lucide-react'
// // import Image from 'next/image'

// // type Props = {
// //   sidebarOpen: boolean
// //   setSidebarOpen: (value: boolean) => void
// // }

// // const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
// //   return (
// //     <div
// //       className={`bg-[#171717] h-screen relative transition-all duration-300 ease-in-out
// //         ${sidebarOpen ? 'w-[240px]' : 'w-[70px]'}`}
// //     >
// //       <button
// //         className="absolute top-15 -right-3 bg-white rounded-full shadow-md p-1 z-10"
// //         onClick={() => setSidebarOpen(!sidebarOpen)}
// //       >
// //         {sidebarOpen ? <ChevronsLeft size={20} /> : <ChevronsRight size={20} />}
// //       </button>

// //       <div className="flex items-center gap-4 p-6">
// //         <Image
// //           src="/images/petrodataLogo.png"
// //           alt="logo"
// //           width={40}
// //           height={40}
// //         />
// //         {sidebarOpen && (
// //           <p className="text-white text-lg font-semibold">
// //             <span className="text-primary">Petro</span>data
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }

// // export default Sidebar
// 'use client'

// import React from 'react'
// import { ChevronsLeft, ChevronsRight } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { sidebarNavigation } from '@/constants/navigation'

// type Props = {
//   sidebarOpen: boolean
//   setSidebarOpen: (value: boolean) => void
// }

// const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
//   const pathname = usePathname()

//   return (
//     <div
//       className={`bg-[#171717] h-screen transition-all duration-300 ease-in-out fixed md:relative z-40
//         ${sidebarOpen ? 'w-[240px]' : 'w-[70px]'}`}
//     >
//       <button
//         className="absolute top-18 -right-3 bg-white rounded-full shadow-md p-1 z-50"
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         {sidebarOpen ? <ChevronsLeft size={20} /> : <ChevronsRight size={20} />}
//       </button>

//       <div className="flex items-center p-4 gap-2 mb-10">
//         <div className="w-10 h-10 relative shrink-0">
//           <Image
//             src="/images/petrodataLogo.png"
//             alt="logo"
//             fill
//             className="object-contain"
//           />
//         </div>
//         {sidebarOpen && (
//           <p className="text-white text-lg font-semibold whitespace-nowrap">
//             <span className="text-primary">Petro</span>data
//           </p>
//         )}
//       </div>

//       <nav className="flex flex-col gap-1">
//         {sidebarNavigation.map((item) => {
//           const isActive = pathname.startsWith(item.href)
//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`flex items-center gap-4 px-6 py-2 text-sm rounded-l-full
//                 ${
//                   isActive
//                     ? 'text-primary border-r-2 border-primary'
//                     : 'text-white hover:bg-[#333]'
//                 }
//                 transition-all duration-200`}
//             >
//               <span className="shrink-0"> {item.icon}</span>
//               {sidebarOpen && <span>{item.name}</span>}
//             </Link>
//           )
//         })}
//       </nav>
//     </div>
//   )
// }

// export default Sidebar

// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { sidebarNavigation } from '@/constants/navigation'
// import { ChevronsLeft, ChevronsRight, ChevronDown } from 'lucide-react'
// import Image from 'next/image'

// interface SidebarProps {
//   sidebarOpen: boolean
//   setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
// }

// const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
//   const trigger = useRef<HTMLButtonElement>(null)
//   const sidebar = useRef<HTMLElement>(null)
//   const pathname = usePathname()
//   const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false)
//   const [overlayActive, setOverlayActive] = useState<boolean>(false)

//   useEffect(() => {
//     const storedSidebarExpanded = sessionStorage.getItem('sidebar-expanded')
//     setSidebarExpanded(storedSidebarExpanded === 'true')

//     if (sidebarExpanded) {
//       document.body.classList.add('sidebar-expanded')
//     } else {
//       document.body.classList.remove('sidebar-expanded')
//     }

//     setOverlayActive(sidebarOpen)

//     if (window.innerWidth < 1024) {
//       setSidebarExpanded(true)
//     }
//   }, [sidebarExpanded, sidebarOpen])

//   useEffect(() => {
//     const clickHandler = ({ target }: MouseEvent) => {
//       if (!sidebar.current || !trigger.current) return
//       if (
//         !sidebarOpen ||
//         sidebar.current.contains(target as Node) ||
//         trigger.current.contains(target as Node)
//       )
//         return
//       setSidebarOpen(false)
//     }

//     const resizeHandler = () => {
//       if (window.innerWidth >= 1279) {
//         setSidebarOpen(false)
//         setOverlayActive(false)
//       }
//     }

//     document.addEventListener('click', clickHandler)
//     window.addEventListener('resize', resizeHandler)

//     return () => {
//       document.removeEventListener('click', clickHandler)
//       window.removeEventListener('resize', resizeHandler)
//     }
//   }, [sidebarOpen, setSidebarOpen])

//   return (
//     <div className="relative">
//       {overlayActive && window.innerWidth < 1024 && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-30 bg-black opacity-40"
//         />
//       )}

//       <aside
//         ref={sidebar}
//         className={`fixed top-0 left-0 z-40 flex h-screen flex-col overflow-hidden bg-[#171717] text-white duration-300 ease-in-out
//           ${
//             sidebarOpen
//               ? sidebarExpanded
//                 ? 'w-56'
//                 : 'w-[70px]'
//               : 'w-0 lg:w-[70px]'
//           }
//           lg:static lg:translate-x-0 ${
//             sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//       >
//         {/* Collapse Toggle Button */}
//         <div className="flex items-center justify-between px-3 py-4">
//           <Link href="/overview" className="flex items-center gap-2">
//             <Image
//               src="/images/petrodataLogo.png"
//               alt="logo"
//               width={40}
//               height={40}
//             />
//             {sidebarExpanded && (
//               <p className="text-white text-lg font-semibold">
//                 <span className="text-primary">Petro</span>data
//               </p>
//             )}
//           </Link>
//           <button
//             onClick={() => {
//               setSidebarOpen(true) // Ensure sidebar is open
//               setSidebarExpanded((prev) => !prev)
//             }}
//             className="absolute hidden md:block top-18 -right-4 bg-[#262626] border border-[#404040] text-white rounded-full shadow-md p-1 z-100"
//           >
//             {sidebarExpanded ? (
//               <ChevronsLeft size={20} />
//             ) : (
//               <ChevronsRight size={20} />
//             )}
//           </button>
//         </div>

//         {/* Mobile Close Button */}
//         <div className="flex items-center justify-end px-4 lg:hidden">
//           <button
//             ref={trigger}
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             aria-controls="sidebar"
//             aria-expanded={sidebarOpen}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Sidebar Links */}
//         <div className="flex flex-col h-full overflow-y-auto">
//           <nav className="py-6">
//             <ul className="flex flex-col gap-2">
//               {sidebarNavigation.map((link) => (
//                 <SidebarLinks
//                   key={link.href}
//                   link={link}
//                   sidebarExpanded={sidebarExpanded}
//                   onClick={() => setSidebarOpen(false)}
//                 />
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </aside>
//     </div>
//   )
// }

// interface SidebarLinksProps {
//   link: any
//   sidebarExpanded: boolean
//   onClick: () => void
// }

// const SidebarLinks: React.FC<SidebarLinksProps> = ({
//   link,
//   sidebarExpanded,
//   onClick,
// }) => {
//   const [isOpen, setIsOpen] = useState<boolean>(false)
//   const pathname = usePathname()

//   const hasChildren = !!link.children?.length
//   const isActive = pathname.endsWith(link.href) || pathname === link.href

//   const toggleSubLinks = () => setIsOpen((prev) => !prev)

//   return (
//     <li>
//       <div
//         onClick={() => {
//           if (hasChildren) toggleSubLinks()
//           else onClick()
//         }}
//         className={`flex items-center justify-between cursor-pointer px-4 py-2 rounded-l-full
//           ${
//             isActive
//               ? ' text-white font-semibold border-r-4 border-primary'
//               : 'hover:bg-white/10 text-text-primary'
//           }`}
//       >
//         {hasChildren ? (
//           <div className="flex items-center gap-4">
//             <span className="text-xl">{link.icon}</span>
//             {sidebarExpanded && <span>{link.label}</span>}
//           </div>
//         ) : (
//           <Link href={link.href} className="flex items-center gap-4 w-full">
//             <span className="text-xl">{link.icon}</span>
//             {sidebarExpanded && <span>{link.label}</span>}
//           </Link>
//         )}

//         {hasChildren && sidebarExpanded && (
//           <ChevronDown
//             className={`w-4 h-4 transition-transform ${
//               isOpen ? 'rotate-180' : ''
//             }`}
//           />
//         )}
//       </div>
//     </li>
//   )
// }

// export default Sidebar

import { useState, useEffect, useRef } from 'react'
import { sidebarNavigation } from '@/constants/navigation'
import { ChevronsLeft, ChevronsRight, X, Menu } from 'lucide-react'
import Link from 'next/link'
import SidebarLinks from './SidebarLinks'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

interface ResponsiveSidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ResponsiveSidebar: React.FC<ResponsiveSidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const pathname = usePathname()
  const trigger = useRef<HTMLButtonElement>(null)
  const sidebar = useRef<HTMLElement>(null)
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(true)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)

      // On mobile, always expanded when open
      if (mobile) {
        setSidebarExpanded(true)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Load saved sidebar state
  useEffect(() => {
    const savedExpanded = localStorage.getItem('sidebar-expanded')
    if (savedExpanded && !isMobile) {
      setSidebarExpanded(savedExpanded === 'true')
    }
  }, [isMobile])

  // Save sidebar state
  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem('sidebar-expanded', sidebarExpanded.toString())
    }
  }, [sidebarExpanded, isMobile])

  // Close sidebar when clicking outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return
      setSidebarOpen(false)
    }

    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [sidebarOpen, setSidebarOpen])

  const toggleExpanded = () => {
    if (!isMobile) {
      setSidebarExpanded(!sidebarExpanded)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        ref={trigger}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-gray-800 text-white p-2 rounded-lg shadow-lg"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebar}
        className={`fixed top-0 left-0 z-40 h-screen bg-[#171717] text-white transition-all duration-300 ease-in-out
          ${
            isMobile
              ? sidebarOpen
                ? 'w-64 translate-x-0'
                : 'w-0 -translate-x-full'
              : sidebarExpanded
              ? 'w-64'
              : 'w-16'
          }
          lg:static lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 relative">
          <Link href="/overview" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/petrodataLogo.png"
              alt="logo"
              width={40}
              height={40}
            />
            {(sidebarExpanded || isMobile) && (
              <p className="text-white text-lg font-semibold">
                <span className="text-primary">Petro</span>data
              </p>
            )}
          </Link>

          {/* Desktop Collapse Button */}
          {!isMobile && (
            <button
              onClick={toggleExpanded}
              className="absolute hidden md:block top-18 -right-4 bg-[#262626] border border-[#404040] text-white rounded-full shadow-md p-1 z-100 transition-colors"
              aria-label="Toggle sidebar"
            >
              {sidebarExpanded ? (
                <ChevronsLeft className="w-5 h-5" />
              ) : (
                <ChevronsRight className="w-5 h-5" />
              )}
            </button>
          )}

          {/* Mobile Close Button */}
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-lg hover:bg-gray-700 transition-colors lg:hidden"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {sidebarNavigation.map((link) => (
              <SidebarLinks
                key={link.href}
                link={link}
                sidebarExpanded={sidebarExpanded || isMobile}
                onClick={() => isMobile && setSidebarOpen(false)}
              />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default ResponsiveSidebar

// 'use client'
// import React from 'react'
// import Sidebar from '@/components/Sidebar'

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   const [sidebarOpen, setSidebarOpen] = React.useState(false)
//   return (
//     <div className="w-full flex flex-col overflow-hidden">
//       <div className="flex w-full h-screen">
//         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//         {/* <Sidebar /> */}
//         <main className="flex-1 overflow-x-hidden overflow-y-auto">
//           <div className="flex-1 h-full px-4 py-4 mx-auto max-w-screen-2xl md:px-8 2xl:px-14">
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//     // <div>
//     //   <div className="flex w-full bg-amber-400 text-white ">
//     //     <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//     //     <div className="flex-1">
//     //       <br></br>
//     //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
//     //       recusandae expedita minima suscipit repudiandae quam, iste molestias
//     //       hic voluptates repellat sapiente optio corporis tenetur, nesciunt
//     //       laboriosam architecto saepe velit amet.
//     //     </div>
//     //   </div>
//     // </div>
//   )
// }

// export default Layout
'use client'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true)

  return (
    <div className="flex h-screen overflow-hidden bg-[#0f0f0f]">
      {/* {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )} */}

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-hidden ml-0">
        <Header toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <main className="flex-1 overflow-y-auto p-8 bg-[#1e1e1e] text-white">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout

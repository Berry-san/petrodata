import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarLinksProps {
  link: any
  sidebarExpanded: boolean
  onClick: () => void
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({
  link,
  sidebarExpanded,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()
  //   const location = useLocation()

  const hasChildren = !!link.children?.length
  const isActive = pathname.endsWith(link.href) || pathname === link.href

  const toggleSubLinks = () => setIsOpen((prev) => !prev)

  const IconComponent = link.icon

  return (
    <li>
      <div
        onClick={() => {
          if (hasChildren) toggleSubLinks()
          else onClick()
        }}
        className={`flex items-center justify-between cursor-pointer px-4 py-3 transition-all duration-200
          ${
            isActive
              ? 'border-r-2 border-primary'
              : 'hover:bg-[#262626] rounded-l-full'
          }`}
      >
        {hasChildren ? (
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0">
              <IconComponent className="w-5 h-5" />
            </span>
            {sidebarExpanded && <span className="truncate">{link.label}</span>}
          </div>
        ) : (
          <Link
            href={link.href}
            className="flex items-center gap-3 w-full"
            onClick={onClick}
          >
            <span className="flex-shrink-0">
              <IconComponent className="w-5 h-5" />
            </span>
            {sidebarExpanded && <span className="truncate">{link.label}</span>}
          </Link>
        )}

        {hasChildren && sidebarExpanded && (
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </div>

      {/* Sub-navigation */}
      {hasChildren && isOpen && sidebarExpanded && (
        <ul className="ml-6 mt-2 space-y-1">
          {link.children?.map((child: any) => {
            const ChildIconComponent = child.icon
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onClick}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 text-sm
                    ${
                      pathname === child.href
                        ? 'border-r-2 border-primary'
                        : ' hover:bg-gray-700'
                    }`}
                >
                  <span className="flex-shrink-0">
                    <ChildIconComponent className="w-4 h-4" />
                  </span>
                  <span className="truncate">{child.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default SidebarLinks

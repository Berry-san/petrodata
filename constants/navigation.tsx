import {
  LayoutDashboard,
  BarChart2,
  BookOpen,
  Sparkle,
  BookmarkMinus,
  Settings,
} from 'lucide-react'

export const sidebarNavigation = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard, // ✅ pass component, not JSX
  },
  {
    label: 'Analysis',
    href: '/analysis',
    icon: BarChart2,
  },
  {
    label: 'News and Reports',
    href: '/news',
    icon: BookOpen,
  },
  {
    label: 'Exclusive reports',
    href: '/exclusive-reports',
    icon: Sparkle,
  },
  {
    label: 'Watchlist',
    href: '/watchlist',
    icon: BookmarkMinus,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings,
  },
]

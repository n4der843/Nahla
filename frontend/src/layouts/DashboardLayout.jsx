import { useState } from 'react'
import { cn } from '../lib/utils'

export function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 transform bg-white transition-transform duration-200 ease-in-out",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0"
      )}>
        {/* Sidebar content */}
      </aside>

      {/* Main content */}
      <main className={cn(
        "flex-1 transition-all duration-200 ease-in-out",
        "md:ml-64"
      )}>
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  )
} 
import React from 'react'
import SidebarItems from './SidebarItems'

function Sidebar() {
    return (
        <div className="hidden md:flex md:flex-shrink-0">
        <div
          className="flex flex-col w-64 pt-5 pb-4 bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <SidebarItems/>
        </div>
      </div>
    )
}

export default Sidebar

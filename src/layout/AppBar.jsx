import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuBar from './MenuBar'

const AppBar = () => {
  return (
    <div className="w-full h-full">
      <div>
        <MenuBar />
      </div>
      <div className="grow w-full h-full overflow-auto">
        {/* every pages will go here */}
        <div className="grow overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppBar

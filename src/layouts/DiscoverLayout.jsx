import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import BottomNavBar from '../components/BottomNavBar'

const DiscoverLayout = ({children}) => {
  
  return (
     <div className='flex h-[100vh] overflow-hidden'>
      <SideBar/>
      <BottomNavBar/>
      <div className='flex-1 overflow-y-auto '>
        {children}
      </div>
     </div>
  )
}

export default DiscoverLayout
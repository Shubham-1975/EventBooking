import React from 'react'
import RightHome from '../../components/dashboard/adminDashboard/RightHome'
import Sidebar from "../../components/dashboard/adminDashboard/Sidebar"

const Home = () => {
  return (
    <>
      <div className='flex'>
        <div>
          <Sidebar />
        </div>
        <div className='flex-[6]'>
          <RightHome />
        </div>
      </div>
    </>
  )
}

export default Home

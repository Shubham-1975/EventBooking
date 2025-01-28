import React from 'react'
import FrontHome from '../../dashboard/userDashboard/FrontHome'
import Services from '../../dashboard/userDashboard/Services'
import Planner from '../../dashboard/userDashboard/Planner'
import Experience from '../../dashboard/userDashboard/Experience'
import Testimonials from '../../dashboard/userDashboard/Testimonials'

const Header = () => {
  return (
    <>
      <FrontHome />
      <Services />
      <Experience />
      <Testimonials />
    </>
  )
}

export default Header

import React from 'react'
import homeimg from '../../../assets/images/event7.webp'

const FrontHome = () => {
  return (
    <>
      <div className="relative w-full mx-auto sm:h-[100vh] h-[60vh]">

    <img src={homeimg} className=" inset-0 w-full h-full object-cover z-[-1]" alt="Background" />

    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

   <div className=' absolute lg:bottom-[30%] md:bottom-[20%] lg:left-[10%] z-20 sm:bottom-[38%] sm:left-[7%] bottom-[59%] left-[10%]'>

    <div className='sm:h-[200px] sm:w-[400px] h-[100px] w-[300px] bg-transparent pl-4'>

     <h1 className='pt-4 pb-7 font-semibold sm:text-[25px] text-[20px] text-[#ce9523] text-[cursive] uppercase'>Welcome to Dream Ambition</h1>
     <p className=' text-white sm:text-[15px] text-[15px]'>Welcome to Unique Event Coordinators, where we turn your dreams into reality from intimate gatherings to grand celebrations, our expert team is here to craft memorable moments for you and your guests</p>
     <div className='pt-4'>
     <button className=' flex items-center justify-between bg-yellow-500 rounded-[5px] p-1 hover:bg-yellow-600'>Plan your Event</button>
     </div>
     
    </div>
   </div>
</div>

    </>
  )
}

export default FrontHome

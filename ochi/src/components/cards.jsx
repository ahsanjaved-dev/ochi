import React from 'react'

function Cards() {
  return (
    <div className='w-full grid gap-y-5 lg:h-screen lg:flex lg:items-center lg:gap-4 px-5 lg:px-14'>
        <div className='cardContainer md:w-1/2 h-[40vh] lg:h-[65vh] '>
            <div className='relative w-full h-full bg-[#004D43] rounded-lg flex items-center justify-center' >
                <img className='w-[32vw] md:w-[12vw] ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="img" />
                <button className='absolute left-8 bottom-8 border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-full px-3 py-1 text-sm'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardContainer grid gap-y-5 lg:w-1/2 lg:h-[65vh] lg:flex lg:gap-4 '>
            <div className='lg:w-1/2 h-[40vh] lg:h-full bg-[#212121] rounded-lg flex items-center justify-center relative' >
                <img className='w-[32vw] md:w-[12vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-8 bottom-8 border-[1px] border-[#F1F1F1] text-[#F1F1F1] rounded-full px-3 py-1 text-sm'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='lg:w-1/2 h-[40vh] md:h-full bg-[#212121] rounded-lg flex items-center justify-center relative' >
                <img className='w-[28vw] lg:w-[8vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-13 bottom-8 border-[1px] border-[#F1F1F1] text-[#F1F1F1] rounded-full px-8 py-2 text-sm leading-none tracking-tight'>BUSINESS BOOTCAMP <br /> ALUMNI </button>
            </div>
        </div>
        
    </div>
  )
}

export default Cards
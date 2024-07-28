import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1"  className='w-full mt-12 md:mt-14 bg-[#004D43] py-20 rounded-tl-3xl rounded-tr-3xl text-[#F1F1F1]'>
        <div className='border-b-[1px] border-t-[1px] flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:0}} animate= {{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[22vw]  md:text-[18vw] leading-none font-["Founders_Grotesk_Regular"] font-semibold pr-10 pt-10 -mb-[4vw]'>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:0}} animate= {{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[22vw]  md:text-[18vw] leading-none font-["Founders_Grotesk_Regular"] font-semibold pr-10 pt-10 -mb-[4vw]'>WE ARE OCHI</motion.h1>         
        </div>
    </div>
  )
}

export default Marquee
import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
    const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()]

    const handleHover = (index)=>{
        cards[index].start({y:"0"})  
    }

    const handleHoverEnd = (index)=>{
        cards[index].start({y:"100%"})  
    }

  return (
    <div className='w-full py-20'>

        <div className='w-full px-6 md:px-10  pb-8 border-b-[1px] border-black'>
            <h1 className='text-[7vw] md:text-[4vw] font-["Neue_Montreal"]'>Featured projects</h1>
        </div>

        <div className='p-6 md:p-10'>
            
            <div className='cards w-full md:flex md:gap-6'>
                <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='cardContainer lg:w-1/2 lg:h-[80vh] relative cursor-pointer'>
                    <div className='pb-4 flex items-center font-["Neue_Montreal"] text-sm '><div className='w-3 h-3 bg-black rounded-full mr-4'></div>FYDE</div>
                    <h1 className='absolute hidden md:flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-[7vw] font-["Neue_Montreal"]  font-bold leading-none text-[#CDEA68]'>
                        {"FYDE".split("").map((items,index)=> <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.5, 1, 0.89, 1],delay:index*.03}} className='inline-block'>{items}</motion.span>)}
                    </h1>
                    <div className='card w-full h-full bg-cover overflow-hidden rounded-lg'> <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="img" /> </div>
                    <button className='text-sm mt-4 px-3 py-1 border-[1.5px] border-black rounded-full mr-3'>AUDIT</button>
                    <button className='text-sm px-3 py-1 border-[1.5px] border-black rounded-full mr-3 '>COPYWRITING</button>
                    <button className='text-sm px-3 py-1 border-[1.5px] border-black rounded-full mr-3 '>SALES DECK</button>
                    <button className='text-sm mt-3 md:mt-0 px-3 py-1 border-[1.5px] border-black rounded-full'>SLIDES DESIGN</button>
                </motion.div>

                <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className='cardContainer lg:w-1/2 lg:h-[80vh] relative cursor-pointer'>
                    <div className=' mt-8 md:mt-0  pb-4 flex items-center font-["Neue_Montreal"] text-sm'><div className=' w-3 h-3 bg-black rounded-full mr-4'></div>VISE</div>
                    <h1 className='absolute hidden md:flex overflow-hidden right-full top-1/2 translate-x-1/2  -translate-y-1/2 z-[9] text-[7vw] font-["Neue_Montreal"]  font-bold leading-none text-[#CDEA68]'>
                        {"VISE".split("").map((items,index)=> <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.5, 1, 0.89, 1],delay:index*.03}} className='inline-block'>{items}</motion.span>)}
                    </h1>
                    <div className='card w-full h-full rounded-lg bg-cover overflow-hidden'> <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="img" /> </div>
                    <button className='text-sm mt-4 px-3 py-1 border-[1.5px] border-black rounded-full mr-3'>AGENCY</button>
                    <button className='text-sm px-3 py-1 border-[1.5px] border-black rounded-full mr-3 '>COMPANY PRESENTATION</button>
                </motion.div>
                
            </div>

            <div className='cards mt-10 md:mt-32 w-full md:flex md:gap-6'>
                <motion.div onHoverStart={()=>handleHover(2)} onHoverEnd={()=>handleHoverEnd(2)} className='cardContainer lg:w-1/2 lg:h-[80vh] relative cursor-pointer'>
                        <div className='flex items-center pb-4 font-["Neue_Montreal"] text-sm '><div className='w-3 h-3 bg-black rounded-full mr-4'></div>TRAWA</div>
                        <h1 className='absolute hidden md:flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2  z-[9] text-[7vw] font-["Neue_Montreal"]  font-bold leading-none text-[#CDEA68]'>
                            {"TRAWA".split("").map((items,index)=> <motion.span initial={{y:"100%"}} animate={cards[2]} transition={{ease:[0.5, 1, 0.89, 1],delay:index*.01}} className='inline-block'>{items}</motion.span>)}
                        </h1>                
                    <div className='card w-full h-full bg-cover overflow-hidden rounded-lg'> <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="img" /> </div>
                    <button className='text-sm mt-4 px-3 py-1 border-[1.5px] border-black rounded-full mr-3'>BRAND IDENTITY</button>
                    <button className='text-sm px-3 py-1 border-[1.5px] border-black rounded-full mr-3'>DESIGN RESEARCH</button>
                    <button className='text-sm mt-3 px-3 py-1 border-[1.5px] border-black rounded-full mr-3'>INVESTOR DECK</button>
                
                </motion.div>
                <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={()=>handleHoverEnd(3)} className='cardContainer lg:w-1/2 lg:h-[80vh] relative cursor-pointer'>
                    <div className='flex mt-8 md:mt-0 items-center pb-4 font-["Neue_Montreal"] text-sm '><div className='w-3 h-3 bg-black rounded-full mr-4'></div>PREMIUM BLEND</div>
                    <h1 className='absolute hidden md:flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2  z-[9] text-[7vw] font-["Neue_Montreal"]  font-bold leading-none text-[#CDEA68]'>
                        {"PREMIUMBLEND".split("").map((items,index)=> <motion.span initial={{y:"100%"}} animate={cards[3]} transition={{ease:[0.5, 1, 0.89, 1],delay:index*.01}} className='inline-block'>{items}</motion.span>)}
                    </h1>
                    <div className='card w-full h-full rounded-lg bg-cover overflow-hidden'> <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="img" /> </div>
                    <button className='text-sm mt-4 px-3 py-1 border-[1.5px] border-black rounded-full ms-3'>BRANDED TEMPLATE</button>
                
                </motion.div>
                
            </div>
            

        </div>

       
    </div>
  )
}

export default Featured
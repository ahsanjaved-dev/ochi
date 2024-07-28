import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate,setRotate] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
      setRotate(angle-180);
    })
  });


  return (
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.6" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center '>
            <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-[32vw] h-[15vh] md:w-[16.5vw] md:h-[35vh]  bg-white rounded-full flex items-center justify-center'>
                    <div className='relative w-[50%] h-[50%] md:w-[60%] md:h-[60%]  bg-zinc-900 rounded-full'>
                      <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 '>
                        <div className='w-3 h-3 md:w-4 md:h-4  bg-white rounded-full'></div>
                      </div>
                      
                    </div>
                </div>
                <div className='w-[32vw] h-[15vh] md:w-[16.5vw] md:h-[35vh]  bg-white rounded-full flex items-center justify-center'>
                  <div className='relative w-[50%] h-[50%] md:w-[60%] md:h-[60%]  bg-zinc-900 rounded-full'>
                      <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 '>
                        <div className='w-3 h-3 md:w-4 md:h-4  bg-white rounded-full'></div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes

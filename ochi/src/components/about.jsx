import React from 'react'

function About() {
  return (
    <div className='bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black w-full py-20'>
        <div className='px-6 md:px-20 mb-10'>
            <h1 className='font-["Neue_Montreal"] text-black text-[7vw] leading-[7vw] md:text-[4.3vw] md:leading-[4vw]'>
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell product, explain complex ideas, and hire great people.
            </h1>
        </div>
        <div className='border-t-[1px] border-black grid gap-y-6 px-6 md:flex md:px-10 py-5 font-["Neue_Montreal"]'>
            <div className='md:w-[50vw]'><p>What you can expect:</p></div>
            <div className='md:w-[30vw] md:px-7'><p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p><br /><br /><p>
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p></div>
            <div className='md:w-[20vw] md:p-20'><p>S:</p><br /><a>Instragram</a><br /><a>Behance</a><br /><a>Facebook</a><br /><a>Linkedin</a></div>
        </div>
        <div className='border-t-[1px] border-black w-full font-["Neue_Montreal"] lg:flex lg:pe-10 lg:pt-6'>
            <div className='lg:w-1/2 px-6 lg:px-12 '>
                <h1 className='text-5xl my-4 lg:text-[4vw] mb-3 border-zinc-900'>Our approach:</h1>
                <button className='bg-zinc-900 rounded-full px-5 py-3 md:px-8 md:py-4 text-white flex items-center'>READ MORE <div className='w-2 h-2 bg-white rounded-full ms-6'></div> </button>
            </div>
            <div className='lg:w-1/2 lg:h-[70vh] p-6 lg:p-0  rounded-xl'>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"  alt="img"  className='rounded-xl md:h-[70vh] w-full'/>
            </div>
        </div>

    </div>
  )
}

export default About
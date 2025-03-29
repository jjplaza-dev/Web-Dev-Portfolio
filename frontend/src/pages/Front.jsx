import React, { useEffect, useState } from 'react'

function Front() {
  const [onLoad, setOnLoad] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      setOnLoad(false)
    },2600)
  })
  return <>
    <section className='w-screen h-screen relative'>
        <div className='w-full aspect-square  absolute block md:flex'>
          <div className='w-full h-fit overflow-hidden '>
            {onLoad? <div className='text-[5rem] sm:text-[8rem] md:text-[15rem] text-center translate-y-80 transition-all ease-in-out duration-500'><b>JURIST</b></div>:<div className='text-[5rem] sm:text-[8rem] md:text-[15rem] text-center translate-y-0 transition-all ease-in-out duration-600'><b>J.M.</b></div>}
          </div>
          <div className='w-full h-fit overflow-hidden'>
            {onLoad? <div className='text-[5rem] sm:text-[8rem] md:text-[15rem] text-center translate-y-80 transition-all ease-in-out duration-600'><b>PLAZA</b></div>:<div className='text-[5rem] sm:text-[8rem] md:text-[15rem] text-center  translate-y-0 transition-all ease-in-out duration-600 delay-100'><b>PLAZA</b></div>}
          </div>
        </div>
        
    </section>
  </>
}

export default Front
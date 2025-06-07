import React, { useEffect, useState } from 'react'

function Front() {


  
 








  return <>
    <section className='w-full h-[300vh] relative bg-white'>
      
       
      
    
      <div className='w-full h-[200vh] absolute top-[0vh]'>
        <div className='w-full h-[100vh] sticky top-[0vh] '>
            <div className='w-full h-full  absolute flex'>
              <div className='w-full h-full border-1 border-gray-100 lg:border-gray-300'></div>
              <div className='w-full h-full border-1 border-gray-100 lg:border-gray-300'></div>
              <div className='w-full h-full border-1 border-gray-100 lg:border-gray-300'></div>
              <div className='w-full h-full border-1 border-gray-100 lg:border-gray-300'></div>
              <div className='w-full h-full border-1 border-gray-100 lg:border-gray-300'></div>
              <div className='w-full h-full border-1 border-gray-100 lg:border-gray-300'></div>
              <div className='w-full h-full border-1 border-gray-100 lg:border-gray-300'></div>
              <div className='w-full h-full border-1 border-gray-100 lg:border-gray-300'></div>
      
            </div>
            <div className='w-[90%] h-[20%] sm:h-[35%] lg:h-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1'>
              <div className='w-full h-fit absolute top-0 text-center text-[72px] sm:text-[144px] lg:text-[220px] leading-[72px] sm:leading-[144px] lg:leading-[220px] tracking-[-0.08em]'>JURIST</div>
              <div className='w-full h-fit absolute top-[50%] translate-y-[-50%] text-center text-[20px] lg:text-[24px] opacity-40'>REACT DEVELOPER</div>
              <div className='w-full h-fit absolute bottom-0 text-center text-[72px] sm:text-[144px] lg:text-[220px]  leading-[72px] sm:leading-[144px] lg:leading-[220px]'>PLAZA</div>
            </div>
        </div>
      </div>
      <div className='w-full h-[200vh] bg-[#0d0d3f33] backdrop-blur-[20px] absolute bottom-0 p-2 lg:p-10 '>
       
      </div>
    </section>
  </>
}

const Hablon = (props) => {
  const strandsNum = Math.ceil(props.width/2)
  return <section className='absolute mx-0 top-[50%] translate-y-[-50%]' style={{transform: ` translateX(${props.positionX}px) translateY(${props.positionY}px)`, transformOrigin: `center`}}>
    <div className='flex' style={{width: `${props.width}px`, height: `${props.height}px`, transform: `rotate(${props.rotate}deg)`}}>
      {Array.from({ length: strandsNum }, (x, i) => (
       <div key={i} className='w-[1px] h-full mr-[1px]' style={{backgroundColor: `${props.color}`}}></div>
      ))}
    </div>
  </section>
}

export default Front
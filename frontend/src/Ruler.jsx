import React from 'react'

function Ruler() {
  return <>
    <section className='w-screen h-screen z-10 fixed top-0 left-0 grid grid-cols-2 hidden'>
        <div className='w-full h-full border-1 border-black opacity-25'></div>
        <div className='w-full h-full border-1 border-black opacity-25'></div>
        <div className='w-full h-full border-1 border-black opacity-25'></div>
        <div className='w-full h-full border-1 border-black opacity-25'></div>
        
    </section>
  </>
}

export default Ruler
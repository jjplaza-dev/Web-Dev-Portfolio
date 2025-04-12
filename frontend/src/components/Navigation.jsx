import React from 'react'

function Navigation() {
  return <>
    <section className='w-full h-[10vh] sm:h-[12vh] fixed flex justify-end top-0 bg-blue-200 z-1'>
        <div className='h-full aspect-square  relative'>
            <button className='w-[75%] h-[75%] bg-amber-200 absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%] '><h4 className='mix-blend-difference relative text-white z-3'>Burger</h4></button>
        </div>
    </section>
  </>
}

export default Navigation
import React, { useEffect, useState } from 'react'

function Footer() {
  const [divBend, setDivBend] = useState()

  const footerBox = document.getElementById("footerBox")

  window.addEventListener("scroll", () => {
    setDivBend((90 / footerBox.getBoundingClientRect().y)*80) 
  })
  return <>
    <section className='w-screen h-screen bg-amber-300 relative'> 
      <div className='ellipse w-full h-[90%] absolute bottom-0 bg-amber-200 ease-out duration-500' style={{clipPath: `ellipse(100% ${divBend}% at bottom center)`}} id='footerBox'></div>
      <div className='w-full h-[10%] bg-white absolute bottom-0'></div>
    </section>
  </>
}

export default Footer
import React, { useEffect, useState } from 'react'

function Navigation() {
  const [activeMenu, setActiveMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  const [posYPercent, setPosYPercent] = useState()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  const openMenu = () => {
    setActiveMenu(!activeMenu)
  }

  
  const navPos = activeMenu? "0%":"100%";
  const panelWidth = isMobile? activeMenu? '100vw':'0vw': activeMenu? '100vw':'0vw';
 


  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPosYPercent((window.scrollY/window.innerHeight)*10)
    })
  })
  

  return <>
    <section className='w-full h-[12vh] fixed flex flex-col top-0 z-1 bg-amber-50'>
        <div className='h-10/12 aspect-square self-end flex justify-center items-center'>
            <button className='w-[75%] h-[75%] bg-amber-200  z-2' onClick={openMenu}><h4 className='mix-blend-difference relative text-white z-3'>Burger</h4></button>
        </div>
        <div className='w-full h-2/12  border-y-5 border-black box-border'>
        <div className='h-[100%] bg-green-700 border-r-5 border-black duration-500' style={{width: `${posYPercent}%`}}></div>
        </div>
       <div className=" h-[88vh] w-full fixed bottom-0 right-0 z-1 duration-300 ease-in-out" style={{ width: panelWidth }}>
          <nav className='w-full h-[25%] flex justify-center items-center border-1 border-black bg-green-200 transition-all ease-in-out duration-400 delay-100' style={{marginLeft: `${navPos}`}}>
              <button className='w-[50%] h-[50%]'>NAVIGATION BUTTON</button>
          </nav>
          <nav className='w-full h-[25%] flex justify-center items-center border-1 border-black bg-green-200 transition-all ease-in-out duration-400 delay-200' style={{marginLeft: `${navPos}`}}>
              <button className='w-[50%] h-[50%]'>NAVIGATION BUTTON</button>
          </nav>
          <nav className='w-full h-[25%] flex justify-center items-center border-1 border-black bg-green-200 transition-all ease-in-out duration-400 delay-300' style={{marginLeft: `${navPos}`}}>
              <button className='w-[50%] h-[50%]'>NAVIGATION BUTTON</button>
          </nav>
          <nav className='w-full h-[25%] flex justify-center items-center border-1 border-black bg-green-200 transition-all ease-in-out duration-400 delay-400' style={{marginLeft: `${navPos}`}}>
              <button className='w-[50%] h-[50%]'>NAVIGATION BUTTON</button>
          </nav>
       </div>
      
    </section>
  </>
}

export default Navigation
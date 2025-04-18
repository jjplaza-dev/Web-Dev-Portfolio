import React, { useEffect, useState } from 'react'

function Navigation() {
  const [activeMenu, setActiveMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

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

  const panelWidth = isMobile? activeMenu? '100vw':'0vw': activeMenu? '50vw':'0vw';
  const navPos = activeMenu? "0%":"100%";
  const navCover = activeMenu? "block":"none";

  

  return <>
    <section className='w-full h-[10vh] sm:h-[12vh] fixed flex justify-end top-0  z-1'>
        <div className='h-full aspect-square relative'>
            <button className='w-[75%] h-[75%] bg-amber-200 absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%] z-2' onClick={openMenu}><h4 className='mix-blend-difference relative text-white z-3'>Burger</h4></button>
        </div>
       <div className=" h-[100vh] fixed right-0  z-1 duration-300 ease-in-out" style={{ width: panelWidth }}>
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
       <div className='w-screen h-screen absolute bg-black opacity-80' onClick={openMenu} style={{display: `${navCover}`}}></div>
    </section>
  </>
}

export default Navigation
import React, { useEffect, useState } from 'react'

function Navigation() {
  const [activeMenu, setActiveMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  const [isMenuHovered, setIsMenuHovered] = useState()

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

  const menuHovered = () => {
    setIsMenuHovered(true)
  }
  const menuNotHovered = () => {
    setIsMenuHovered(false)
  }


  const navPos = activeMenu? "0%":"100%";
  const panelWidth = isMobile? activeMenu? '100vw':'0vw': activeMenu? '100vw':'0vw';
 


  useEffect(() => {
    window.addEventListener('scroll', () => {
    })
  })
  

  return <>
    <section className='w-full h-[10vh] fixed flex flex-col top-[6vh] z-2'>
        <div className='h-fit w-fit absolute right-5 lg:right-10 items-end'>
            <button className={`w-fit h-fit z-2 flex self-end flex-col ${activeMenu? "gap-2":"gap-[2px] lg:gap-1"} duration-200 delay-100 items-end absolute right-0`} onClick={openMenu} onMouseEnter={menuHovered} onMouseLeave={menuNotHovered}>
              
              <button className={`                              ${activeMenu?  "w-10 h-10 delay-200":"w-0 delay-0"} duration-100 h-1 my-[1px] rounded-4xl bg-[#292929]`}>
                <p className={`${activeMenu? "text-[80%]":"text-[0px]"} text-white font-semibold ${activeMenu? "delay-300":"delay-0"} `}>X</p>
              </button>

              <button className={`${isMenuHovered? "w-6":"w-3"} ${activeMenu? "w-30 m-2 h-10 hover:delay-0  delay-150 bg-[#292929]":"w-2 delay-0 bg-white"} duration-100 h-1 my-[1px] rounded-4xl `}>
                <p className={`${activeMenu? "text-[80%]":"text-[0px]"} text-white hover:text-yellow-300 ${activeMenu? "delay-250 hover:delay-0":"delay-0"}`}><a href='#'>Home</a></p>
              </button>
              <button className={`${isMenuHovered? "w-6":"w-4"} ${activeMenu? "w-30 m-4 h-10 hover:delay-0  delay-100 bg-[#292929]":"w-2 delay-50 bg-white"} duration-100 h-1 my-[1px] rounded-4xl `}>
                <p className={`${activeMenu? "text-[80%]":"text-[0px]"} text-white hover:text-yellow-300 ${activeMenu? "delay-200 hover:delay-0":"delay-50"}`}><a href='#'>Works</a></p>
              </button>
              <button className={`${isMenuHovered? "w-6":"w-5"} ${activeMenu? "w-30 m-4 h-10 hover:delay-0  delay-50 bg-[#292929]":"w-2 delay-100 bg-white"} duration-100 h-1 my-[1px] rounded-4xl `}>
                <p className={`${activeMenu? "text-[80%]":"text-[0px]"} text-white hover:text-yellow-300 ${activeMenu? "delay-150 hover:delay-0":"delay-100"}`}><a href='#'>About</a></p>
              </button>
              <button className={`${isMenuHovered? "w-6":"w-3"} ${activeMenu? "w-30 m-2 h-10 hover:delay-0  delay-0 bg-[#292929]":"w-2 delay-150 bg-white"} duration-100 h-1 my-[1px] rounded-4xl `}>
                <p className={`${activeMenu? "text-[80%]":"text-[0px]"} text-white hover:text-yellow-300 ${activeMenu? "delay-100 hover:delay-0":"delay-150"}`}><a href='#'>Contact</a></p>
              </button>
            </button>
            
        </div>

       
      
    </section>
  </>
}

export default Navigation
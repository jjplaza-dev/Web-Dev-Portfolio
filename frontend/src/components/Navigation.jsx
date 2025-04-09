import React from "react";

function Navigation() {
  return <>
    <section className="fixed w-full md:w-[5vw] h-[5vh] md:h-full top-0 md:left-0 z-2">
      <div className="w-full md:w-fit h-full md:h-full border-sticky top-0 flex justify-center border-r-1 border-black items-center backdrop-blur-md bg-white/80">
        <nav className="w-full sm:w-7/12 md:w-[5vw] h-full flex md:flex-col items-center justify-center">
          <button className="w-25 sm:w-30 md:w-full h-1/12">About</button>
          <button className="w-25 sm:w-30 md:w-full h-1/12">Works</button>
          <button className="w-25 sm:w-30 md:w-full h-1/12">Contact</button>
        </nav>
      </div>
    </section>
  </>
    
  
}

export default Navigation;

import React from "react";

function Navigation() {
  return (
    <section className="fixed w-screen top-0 left-0 z-2">
      <div className="w-screen h-15 border-b border-black sticky top-0 flex justify-center items-center backdrop-blur-md bg-white/80">
        <nav className="w-10/12 sm:w-7/12 md:w-5/12 h-full flex items-center justify-around">
          <button className="w-25 sm:w-30 h-9/12 border border-x-black hover:border-x-0 border-y-0 border-solid">About</button>
          <button className="w-25 sm:w-30 h-9/12 border border-x-black hover:border-x-0 border-y-0 border-solid">Works</button>
          <button className="w-25 sm:w-30 h-9/12 border border-x-black hover:border-x-0 border-y-0 border-solid">Contact</button>
        </nav>
      </div>
      
    </section>
  );
}

export default Navigation;

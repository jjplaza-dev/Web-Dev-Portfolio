import React from "react";

function Navigation() {
  return (
    <section className="fixed w-screen top-0 left-0 z-1">
      <div className="w-screen h-15 border-b border-black sticky top-0 flex justify-center items-center backdrop-blur-md bg-white/30">
        <nav className="w-3/12 h-full flex items-center justify-around">
          <button className="w-30 h-9/12 border border-x-black border-y-0 hover:border-y border-solid">About</button>
          <button className="w-30 h-9/12 border border-x-black border-y-0 hover:border-y border-solid">Works</button>
          <button className="w-30 h-9/12 border border-x-black border-y-0 hover:border-y border-solid">Contact</button>
        </nav>
      </div>
      <div className="w-15 h-screen absolute left-0 top-0 border-r border-black backdrop-blur-md bg-white/30">
        {/* Social Icons or Links can be added here */}
      </div>
    </section>
  );
}

export default Navigation;

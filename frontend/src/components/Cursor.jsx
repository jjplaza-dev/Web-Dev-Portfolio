import React, { useState, useEffect, useRef, use } from 'react';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [curSize, setCurSize] = useState({ x: 0, y: 0 });
    const [onAnimation, setOnAnimation] = useState(true)
    const isHoveringButtonRef = useRef(false);
  
    useEffect(() => {
      const buttons = document.querySelectorAll('button');
      
      const handleMouseMove = (e) => {
        if (!isHoveringButtonRef.current) {
          setPosition({ x: e.clientX, y: e.clientY });
          setCurSize({x: 20, y: 20})
       
        }
      };
  
      const handleMouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        setPosition({ x: (rect.x + 10)-rect.width*0.05, y: (rect.y + 10)-rect.height*0.05 });
        setCurSize({ x: rect.width*1.1, y: rect.height*1.1 });
        isHoveringButtonRef.current = true;
        setOnAnimation(false)
      };
  
      const handleMouseLeave = () => {
        isHoveringButtonRef.current = false;
        setOnAnimation(true)
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      buttons.forEach(button => {
        button.addEventListener('mousemove', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);
      });
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        buttons.forEach(button => {
          button.removeEventListener('mousemove', handleMouseEnter);
          button.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }, []);

  return (
    <div
      className='w-10 aspect-square  fixed top-0 left-0 pointer-events-none duration-80 z-2 hidden md:block'
      style={{ transform: `translate(${position.x - 10}px, ${position.y - 10}px)`, width: `${curSize.x}px`, height: `${curSize.y}px` }}
      id='cursorBox'
    >
        <div className={` h-4/12 aspect-square absolute ${isHoveringButtonRef.current? "rounded-tl-none":"rounded-tl-full"} top-0 border-2 border-b-0 border-r-0 border-black`}></div>
        <div className={`h-4/12 aspect-square absolute  ${isHoveringButtonRef.current? "rounded-tl-none":"rounded-bl-full"} bottom-0 border-2 border-t-0 border-r-0 border-black`}></div>
        <div className={`h-4/12 aspect-square absolute ${isHoveringButtonRef.current? "rounded-tr-none":"rounded-tr-full"} right-0 border-2 border-b-0 border-l-0 border-black`}></div>
        <div className={`h-4/12 aspect-square absolute ${isHoveringButtonRef.current? "rounded-br-none":"rounded-br-full"} right-0 bottom-0 border-2 border-t-0 border-l-0 border-black`}></div>
        <div className='w-3/12 h-3/12 hidden absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%] bg-black z-1 transition-all duration-200 ease-in-out' style={{width: `${curSize.x}px`,height: `${curSize.y}px`, transform: `${isHoveringButtonRef.current? "scale(100%)": "scale(20%)"}`}}></div>
    </div>
  );
}

export default Cursor;
import React, { useState, useEffect, useRef } from 'react';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [curSize, setCurSize] = useState({ x: 0, y: 0 });
    const isHoveringButtonRef = useRef(false);
  
    useEffect(() => {
      const buttons = document.querySelectorAll('button');
      
      const handleMouseMove = (e) => {
        if (!isHoveringButtonRef.current) {
          setPosition({ x: e.clientX, y: e.clientY });
          setCurSize({x: 40, y: 40})
        }
      };
  
      const handleMouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        setPosition({ x: rect.x + 20, y: rect.y + 20 });
        setCurSize({ x: rect.width, y: rect.height });
        isHoveringButtonRef.current = true;
       
      };
  
      const handleMouseLeave = () => {
        isHoveringButtonRef.current = false;
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
      className='w-10 aspect-square  fixed top-0 left-0 pointer-events-none duration-80 z-2'
      style={{ transform: `translate(${position.x - 20}px, ${position.y - 20}px)`, width: `${curSize.x}px`, height: `${curSize.y}px` }}
      id='cursorBox'
    >
        <div className='w-4/12 h-4/12 absolute top-0 border-2 border-b-0 border-r-0 border-blue-700'>✘</div>
        <div className='w-4/12 h-4/12 absolute bottom-0 border-2 border-t-0 border-r-0 border-blue-700'></div>
        <div className='w-4/12 h-4/12 absolute right-0 border-2 border-b-0 border-l-0 border-blue-700'></div>
        <div className='w-4/12 h-4/12 absolute right-0 bottom-0 border-2 border-t-0 border-l-0 border-blue-700'></div>
    </div>
  );
}

export default Cursor;
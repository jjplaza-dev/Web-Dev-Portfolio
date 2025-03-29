import React, { useState, useEffect } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [curSize, setCurSize] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const rect = e.target.getBoundingClientRect();
            console.log(rect)
            setPosition({x: rect.x + 20, y: rect.y + 20})
            setCurSize({x: rect.width, y: rect.height})
            document.getElementById("cursorBox").style.opacity = "1";
        });
        button.addEventListener('mouseleave', (e) => {
            document.getElementById("cursorBox").style.opacity = "0";
        });
      });
  })

  return (
    <div
      className='w-10 aspect-square  fixed top-0 left-0 pointer-events-none duration-100 mix-blend-difference'
      style={{ transform: `translate(${position.x - 20}px, ${position.y - 20}px)`, width: `${curSize.x}px`, height: `${curSize.y}px` }}
      id='cursorBox'
    >
        <div className='w-4/12 h-4/12 absolute top-0 border-2 border-b-0 border-r-0'></div>
        <div className='w-4/12 h-4/12 absolute bottom-0 border-2 border-t-0 border-r-0'></div>
        <div className='w-4/12 h-4/12 absolute right-0 border-2 border-b-0 border-l-0'></div>
        <div className='w-4/12 h-4/12 absolute right-0 bottom-0 border-2 border-t-0 border-l-0'></div>
    </div>
  );
}

export default Cursor;
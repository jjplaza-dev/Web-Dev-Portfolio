import React, { useState } from 'react';

function Workflow() {
  const [posX, setPosX] = useState(0); // Initialize position states
  const [posY, setPosY] = useState(0);

  const handleDrag = (event) => {
    // Access the div using event.target
    const div = event.target;

    // Get the bounding client rect
    const rect = div.getBoundingClientRect();

    // Log the bounding client rect to the console
    console.log('Bounding Client Rect:', rect);
  };

  return (
    <>
      <section className='w-full h-screen bg-green-300'>
        [ My Workflow ]
        <div
          onMouseDown={handleDrag}
          className='w-50 h-150 bg-amber-50'
          style={{ transform: `translate(${posX}px, ${posY}px)` }}
          id='dragTest'
        ></div>
      </section>
    </>
  );
}

export default Workflow;



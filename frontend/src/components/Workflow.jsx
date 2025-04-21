import React, { useState } from 'react';

function Workflow() {
  
  return (
    <>
      <section className='w-full h-[300vh] bg-green-300 relative items-end grid grid-cols-3'>
        <div className='w-full h-[100%] relative border-1 bottom-0 border-black'>
            <div className='w-full h-15 bg-red-500 sticky top-[12vh]'></div>
        </div>
        <div className='w-full h-[66%] :relative border-1 bottom-0 border-black'>
            <div className='w-full h-15 bg-red-500 sticky top-[12vh]'></div>
        </div>
        <div className='w-full h-[33%] :relative border-1 bottom-0 border-black'>
            <div className='w-full h-15 bg-red-500 sticky top-[12vh]'></div>
        </div>
      </section>
    </>
  );
}

export default Workflow;



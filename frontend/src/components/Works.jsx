import React, { useState, useRef, useEffect } from 'react';
import WorkBox from '../page.components/WorkBox';

function Works() {
  const worksArr = [
    {
      title: "Project Sample",
      number: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: ""
    },
    {
      title: "Project Sample",
      number: 2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: ""
    },
    {
      title: "Project Sample",
      number: 3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: ""
    },
    {
      title: "Project Sample",
      number: 4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: ""
    },
  ]
 

  return (
    <section className="w-screen h-fit bg-violet-200">
      {worksArr.map((work, index) => (
        <div key={index} className='w-full h-[60vh] sm:h-[80vh] lg:h-[60vh] border-4 border-black grid grid-cols-1 lg:grid-cols-2 order-last] relative'>
          <div className={`w-full h-full m-auto bg-amber-200 relative ${index % 2 == 0? "order-last lg:order-first": "order-last"}`} style={{transform: `translateY(-${index*40}%)`}}>
            <div className='w-10/12 lg:w-8/12 p-5 lg:p-10 absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%] bg-amber-100 '>
              {work.description}
              <div className='absolute top-0 right-0 border-t-10 border-r-10 h-5/12 aspect-square  '></div>
              <div className='absolute top-0 left-0 border-t-10 border-l-10 h-5/12 aspect-square  '></div>
              <div className='absolute bottom-0 left-0 border-b-10 border-l-10 h-5/12 aspect-square  '></div>
              <div className='absolute bottom-0 right-0 border-b-10 border-r-10 h-5/12 aspect-square  '></div>
            </div>
          </div>
          <div className='w-full h-full m-auto bg-green-200'>
            {work.number  }
          </div>
        </div>
      ))}
         
    </section>
  );
}

export default Works;

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
          <div className={`w-full h-full m-auto bg-amber-200 ${index % 2 == 0? "order-last lg:order-first": "order-last"}`}>
            {work.number  }
          </div>
          <div className='w-full h-full m-auto bg-green-200'></div>
        </div>
      ))}
         
    </section>
  );
}

export default Works;

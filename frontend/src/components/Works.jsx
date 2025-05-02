import React, { useState, useRef, useEffect } from 'react';
import WorkBox from '../page.components/WorkBox';

function Works() {
  const worksArr = [
    {
      title: "Project Sample",
      number: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: "",
      skills: "HTML, CSS"
    },
    {
      title: "Project Sample",
      number: 2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: "",
      skills: "HTML, CSS"
    },
    {
      title: "Project Sample",
      number: 3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: "",
      skills: "HTML, CSS"
    },
    {
      title: "Project Sample",
      number: 4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: "",
      skills: "HTML, CSS"
    },
  ]
 

  return (
    <section className="w-screen h-fit bg-black">
      {worksArr.map((work, index) => (
        <div className='w-full h-[60vh] lg:h-[80vh] relative'>
          <div className='w-full h-10/12 relative border-1 '>
            <div className='w-full h-[5vh] bg-white sticky top-0 '>
              <div className='w-full h-full px-2 lg:px-10 py-2 flex justify-between relative text-black'>
              [{work.number}] {work.title}
              <div className=''>{work.skills}</div>
              </div>
            </div>
          </div>
          
        </div>
      ))}
         
    </section>
  );
}

export default Works;

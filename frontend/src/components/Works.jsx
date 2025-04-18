import React, { useState, useRef, useEffect } from 'react';
import WorkBox from '../page.components/WorkBox';

function Works() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [relativePosX, setRelativePosX] = useState()
  const [relativePosY, setRelativePosY] = useState()
  const buttonRefs = useRef([]);

  

  const handleClick = (index) => {
    setSelectedProject(index);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseMove = (index) => {
    const rect = buttonRefs.current[index].getBoundingClientRect();

    buttonRefs.current[index].addEventListener("mousemove", (e) => {
      setRelativePosX(((e.clientX - rect.x) / rect.width) * 10)
      setRelativePosY((((e.clientY - rect.y) / rect.height) * 10))
    })
  }

  return (
    <section className="w-screen h-fit bg-violet-200">
      <div className="w-full h-[20vh]">[ My Works ]</div>
      <div className="w-full h-[80vh] sm:h-[70vh] bg-green-200">
        <div className="w-full h-full md:h-full bg-amber-200  flex flex-col justify-around items-center" id="worksBoxContainer">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className={`w-full bg-amber-100 border-1 border-black box-border flex justify-center lg:justify-start items-center duration-300 ${selectedProject === index ? 'h-[100vh] lg:h-[25%]' : 'h-[25%]'}`}>
              <button
                ref={el => buttonRefs.current[index] = el}
                className="w-10/12 lg:w-5/12 h-9/12 text-nowrap font-thin tf2 lg:ml-20 bg-amber-100"
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseMove(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                [{index}] Project Name
              </button>
              <WorkBox isHidden={hoveredIndex !== index} boxPos={hoveredIndex} posX={relativePosX} posY={relativePosY}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;

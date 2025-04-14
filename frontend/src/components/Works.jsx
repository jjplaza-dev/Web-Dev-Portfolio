import React, { useState } from 'react';
import WorkBox from '../page.components/WorkBox';

function Works() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedProject(index);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="w-screen h-fit bg-violet-200">
      <div className="w-full h-[20vh]">[ My Works ]</div>
      <div className="w-full h-[80vh] sm:h-[80vh] bg-green-200">
        <div className="w-full h-full md:h-full bg-black flex flex-col justify-around items-center" id="worksBoxContainer">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`w-full box-border flex justify-center lg:justify-start items-center bg-amber-200 duration-300 border-1 border-black ${
                selectedProject === index ? 'h-[100vh] lg:h-[25%]' : 'h-[25%]'
              }`}
            >
              <button
                className="w-10/12 lg:w-5/12 h-10/12 text-nowrap tf2 lg:ml-20"
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                [{index}] Project Name
              </button>
              <WorkBox isHidden={hoveredIndex !== index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;

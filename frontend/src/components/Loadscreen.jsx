import React, { useEffect, useState } from 'react'

function Loadscreen() {

  const [initialPath, setInitialPath] = useState([
    `polygon(70% 50%, 100% 50%, 100% 0%, 70% 45%)`,
    `polygon(70% 45%, 100% 0%, 50% 0%, 50% 45%)`,
    `polygon(50% 45%, 50% 0%, 0% 0%, 30% 45%)`,
    `polygon(30% 45%, 0% 0%, 0% 50%, 30% 50%)`,
    `polygon(30% 50%, 0% 50%, 0% 100%, 30% 55%)`,
    `polygon(30% 55%, 0% 100%, 50% 100%, 50% 55%)`,
    `polygon(50% 55%, 50% 100%, 100% 100%, 70% 55%)`,
    `polygon(70% 55%, 100% 100%, 100% 50%, 70% 50%)`
  ]);

  useEffect(() => {

    const timeout1 = setTimeout(() => {
      setInitialPath([
        `polygon(70% 50%, 100% 49.5%, 100% 0.5%, 70% 45%)`,
        `polygon(70% 45%, 99.5% 0%, 50.5% 0%, 50% 45%)`,
        `polygon(50% 45%, 49.5% 0%, 0.5% 0%, 30% 45%)`,
        `polygon(30% 45%, 0% 0.5%, 0% 49.5%, 30% 50%)`,
        `polygon(30% 50%, 0% 50.5%, 0% 99.5%, 30% 55%)`,
        `polygon(30% 55%, 0.5% 100%, 49.5% 100%, 50% 55%)`,
        `polygon(50% 55%, 50.5% 100%, 99.5% 100%, 70% 55%)`,
        `polygon(70% 55%, 100% 99.5%, 100% 50.5%, 70% 50%)`
      ]);

      const timeout2 = setTimeout(() => {
        const finalPaths = [
          `polygon(100% 50%, 100% 50%, 100% 0%, 100% 0%)`,
          `polygon(100% 0%, 100% 0%, 50% 0%, 50% 0%)`,
          `polygon(50% 0%, 50% 0%, 0% 0%, 0% 0%)`,
          `polygon(0% 0%, 0% 0%, 0% 50%, 0% 50%)`,
          `polygon(0% 50%, 0% 50%, 0% 100%, 0% 100%)`,
          `polygon(0% 100%, 0% 100%, 50% 100%, 50% 100%)`,
          `polygon(50% 100%, 50% 100%, 100% 100%, 100% 100%)`,
          `polygon(100% 100%, 100% 100%, 100% 50%, 100% 50%)`
        ];

        document.getElementById("centerText").style.opacity = "0";
        document.getElementById("pathParent").style.backgroundColor = "transparent";
        document.querySelector("body").style.overflowY = "auto";

        finalPaths.forEach((newPath, index) => {
          setTimeout(() => {
            setInitialPath((prevPaths) => {
              const updatedPaths = [...prevPaths];
              updatedPaths[index] = newPath;
              return updatedPaths;
            });
          }, index * 50); 
        });
      }, 1000);

      return () => clearTimeout(timeout2);
    }, 1000);

    return () => clearTimeout(timeout1);

    
  }, []);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("loadscreen").style.display = "none";
    }, 3000)
  })

  const pathStyles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgb(10, 10, 10)",
    transition: "all ease-in-out 0.4s"
  };
  
  return (
    <section className='fixed z-2' id='loadscreen'>
      <div className='w-[40%] h-[10%]  absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%] transition-all ease-in-out duration-1000' id='centerText'>
        <div className='w-fit absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%]'>WEB DESIGNER & DEVELOPER</div>
      </div>
      <div className="w-screen h-screen" style={{backgroundColor: "white", transition: "all ease-in-out 1s"}} id='pathParent'>
        {initialPath.map((path, index) => (
            <div key={index} style={{ ...pathStyles, clipPath: path }} />
        ))}
      </div>
    </section>
    
  );
}

export default Loadscreen
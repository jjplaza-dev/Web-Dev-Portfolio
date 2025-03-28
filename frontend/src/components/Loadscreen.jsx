import React, { useEffect, useState } from 'react'
import styles from "./Loadscreen.module.css"

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

  return <> 
    <section className='w-screen h-screen relative'>
      <div className='w-[40%] h-[10%] bg-amber-50 absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%]'></div>
      <div className="w-full h-full bg-[#101010]" id='pathParent'>
        
          <div className={styles.firstPath} style={{clipPath: initialPath[0]}}></div>
          <div className={styles.firstPath} style={{clipPath: initialPath[1]}}></div>
          <div className={styles.firstPath} style={{clipPath: initialPath[2]}}></div>
          <div className={styles.firstPath} style={{clipPath: initialPath[3]}}></div>
          <div className={styles.firstPath} style={{clipPath: initialPath[4]}}></div>
          <div className={styles.firstPath} style={{clipPath: initialPath[5]}}></div>
          <div className={styles.firstPath} style={{clipPath: initialPath[6]}}></div>
          <div className={styles.firstPath} style={{clipPath: initialPath[7]}}></div>

      </div>  
    </section>
    
  </>
}

export default Loadscreen
import React, { useEffect, useState } from 'react'

function Front() {
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

  const boxMaxX = 100;
  const boxMaxY = 100;
  const distanceTravel = 20;

useEffect(() => {
  const interval = setInterval(() => {
    
    setCurrentPos(prevPos => {
      if (prevPos.x < boxMaxX && prevPos.y <= 0) {
        return { x: prevPos.x + distanceTravel, y: prevPos.y };

      } else if (prevPos.y < boxMaxY && prevPos.x >= boxMaxX) {
        return { x: prevPos.x, y: prevPos.y + distanceTravel };

      } else if (prevPos.x > 0 && prevPos.y >= boxMaxY) {
        return { x: prevPos.x - distanceTravel, y: prevPos.y };

      } else if (prevPos.y > 0 && prevPos.x <= 0) {
        return { x: prevPos.x, y: prevPos.y - distanceTravel };
      }
         else {
        clearInterval(interval); // stop when both x and y are > 100
        return prevPos;
      }
    });
  }, 200);

  return () => clearInterval(interval); // Cleanup on unmount
}, []);



   useEffect(() => {
      const mySquare = document.querySelectorAll("#squareTest")
      mySquare.forEach(e => {
        e.style.transform = `translate(${currentPos.x*(e.getBoundingClientRect().width/50)}px, ${currentPos.y*(e.getBoundingClientRect().width/50)}px)`
      });
      
   })

  const myWord = "freelance"
  const myWordArr = myWord.split("")

  const myTitle = "Web Developer"
  const myTitleArr = myTitle.split("")

  const myName = "Jurist Plaza"
  const myNameArr = myName.split("")

  const wordText = document.querySelectorAll("#wordText")
  const titleText = document.querySelectorAll("#titleText")

  let indexWord = 0;
  let indexTitle = 0

function addEffect() {
  if (indexWord >= wordText.length) return;
  
  wordText[indexWord].style.transform = "rotate(0deg)";
  indexWord++;

  setTimeout(addEffect, 50); // Add effect to next span every second
}
function addEffect2() {
  if (indexTitle >= titleText.length) return;
  
  titleText[indexTitle].style.transform = "translateY(0%)";
  indexTitle++;
  
  setTimeout(addEffect2, 50); // Add effect to next span every second
}

addEffect();
addEffect2();
  
const primary = "#303030";
const secondary = "white"
const accent = "#a4a4a4"
  return <>
    <section className='w-full h-[300vh] relative bg-white'>
      
       
      
    
      <div className='w-full h-[184vh] absolute top-[16vh]'>
        <div className='w-full h-[84vh] sticky top-[16vh] flex justify-center items-center p-2 lg:p-10'>
            <div className='w-[90%] lg:w-[75%] h-[90vw] lg:h-[70%] absolute right-[50%] translate-x-[50%] flex flex-col '>
                <div className={`w-full h-full flex flex-col lg:flex-row text-[10vw] sm:text-[8vw] lg:text-[7vw]  `}>
                  <div className='w-full h-full text-nowrap flex items-center'>
                    {myWordArr.map((text, index) => (
                      <span className='text-[15vw] lg:text-[10vw] m-[2px] inline-block tracking-tighter leading-[1] poiret-one-regular rotate-y-90 hover:rotate-90 duration-700' key={index} id='wordText' >{text}</span>
                    ))}
                  </div>
                  <div className='w-full h-full max-w-[700px] overflow-hidden relative bg-black'>
                    <Hablon width={30} height={2000} rotate={90} positionX={10} color={"white"}/>  
    
                    <Hablon width={50} height={400} rotate={0} positionX={0} positionY={0} color={secondary}/>
                    <Hablon width={50} height={400} rotate={0} positionX={50} positionY={0} color={accent}/>
                    <Hablon width={50} height={400} rotate={0} positionX={100} positionY={0} color={secondary}/>
                    <Hablon width={50} height={400} rotate={0} positionX={150} positionY={0} color={primary}/>
                    <Hablon width={50} height={400} rotate={0} positionX={200} positionY={0} color={primary}/>
                    <Hablon width={50} height={400} rotate={0} positionX={250} positionY={0} color={secondary}/>
                    <Hablon width={50} height={400} rotate={0} positionX={300} positionY={0} color={accent}/>
                    <Hablon width={50} height={400} rotate={0} positionX={350} positionY={0} color={secondary}/>
                    <Hablon width={50} height={400} rotate={0} positionX={400} positionY={0} color={primary}/>
                    <Hablon width={50} height={400} rotate={0} positionX={450} positionY={0} color={primary}/>
                    <Hablon width={50} height={400} rotate={0} positionX={500} positionY={0} color={secondary}/>
                    <Hablon width={50} height={400} rotate={0} positionX={550} positionY={0} color={accent}/>
                    <Hablon width={50} height={400} rotate={0} positionX={600} positionY={0} color={secondary}/>
                    <Hablon width={50} height={400} rotate={0} positionX={650} positionY={0} color={primary}/>
                   
                    
                    
                  </div>  
                </div>
                
                <div className='w-full h-full flex flex-col lg:flex-row-reverse text-[10vw] sm:text-[8vw] lg:text-[7vw] items-center text-nowrap'>
                   <div className='w-full h-full text-nowrap flex items-center'>
                    {myTitleArr.map((text, index) => (
                      <span className='text-[12vw] lg:text-[10vw] m-[1px] min-h-[10px] min-w-[8px] lg:min-w-[20px] inline-block tracking-tighter leading-[1] overflow-hidden' key={index}><div className="w-fit h-fit poiret-one-regular duration-500" style={{ transform: "translateY(150%) scaleY(250%)"}} id='titleText'>{text}</div></span>
                    ))}
                  </div>
                  <div className='w-full h-full relative'> 
                    <div className='w-[2vw] min-w-[10px] max-w-[50px] h-[2vw] min-h-[10px] max-h-[50px] bg-black duration-1000' id='squareTest'></div>
                  </div>

                </div>
                <div className='w-full h-full flex flex-col lg:flex-row text-[7vw] items-center'>
                   <div className='w-full h-full text-nowrap flex items-center'>
                    {myNameArr.map((text, index) => (
                      <span className='text-[10vw] rotate-y-0 hover:rotate-y-90 min-h-[10px] min-w-[8px] lg:min-w-[20px] inline-block tracking-tighter leading-[1] sedgwick-ave-display-regular' key={index} id='nameText'>{text}</span>
                    ))}
                  </div> 
                  <div className='w-full h-full text-[20px] flex items-center px-0 lg:px-10 leading-[1]'>
                    <div>I am a freelance digital designer, dedicated to
creating an online presence that meets business
objectives and boosts conversions.</div>
                  </div>
                </div>
            </div>
        </div>
      </div>
      <div className='w-full h-[200vh] bg-[#0d0d3f33] backdrop-blur-[20px] absolute bottom-0 p-2 lg:p-10 '>
       
      </div>
    </section>
  </>
}

const Hablon = (props) => {
  const strandsNum = Math.ceil(props.width/2)
  return <section className='absolute mx-0 top-[50%] translate-y-[-50%]' style={{transform: ` translateX(${props.positionX}px) translateY(${props.positionY}px)`, transformOrigin: `center`}}>
    <div className='flex' style={{width: `${props.width}px`, height: `${props.height}px`, transform: `rotate(${props.rotate}deg)`}}>
      {Array.from({ length: strandsNum }, (x, i) => (
       <div key={i} className='w-[1px] h-full mr-[1px]' style={{backgroundColor: `${props.color}`}}></div>
      ))}
    </div>
  </section>
}

export default Front
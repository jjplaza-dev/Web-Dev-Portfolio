import React, { useEffect } from 'react'

function Selector() {
   

    useEffect(() => {
        const buttons = document.querySelectorAll("button");
        let isHoveringButton = false;
        
        buttons.forEach(button => {
            button.addEventListener("mouseenter", () => {
                document.getElementById("selectorBox").style.backgroundColor = "green"
                console.log("Inside");
                isHoveringButton = true;
            });
    
            button.addEventListener("mouseleave", () => {
                isHoveringButton = false;
            });
        });
    
    
        document.addEventListener("mousemove", () => {
            if (!isHoveringButton) {
                document.getElementById("selectorBox").style.backgroundColor = "red"
                console.log("Outside");
            }
        });

    })
    

  return <>
    <div className='w-10 h-10 bg-green-500' id='selectorBox'></div>
  </>
}

export default Selector
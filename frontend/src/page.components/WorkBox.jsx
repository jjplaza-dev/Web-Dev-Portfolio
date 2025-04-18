import React, {useEffect, useState } from 'react'

function WorkBox(props) {
  const [myPosX, setMyPosX] = useState()
  const [myPosY, setMyPosY] = useState()
  useEffect(() => {
    setMyPosX(props.posX)
    setMyPosY(props.posY)
  })
 
  return <>
    <div className={`w-[25vw] aspect-[1/1.2] bg-red-600 absolute transition-all duration-500 delay-0 ease-out z-1  ${props.isHidden? 'opacity-0' : 'opacity-0 lg:opacity-100'}`} style={{right: `${20 - myPosX}%`, transform: `translateY(${myPosY}%)`}}>
        
    </div>
  </>
}

export default WorkBox
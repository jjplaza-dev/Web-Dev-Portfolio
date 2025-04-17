import React, {useEffect, useState } from 'react'

function WorkBox(props) {
  const [myPos, setMyPos] = useState()
  useEffect(() => {
    setMyPos(props.pos)
    console.log(myPos)
  })
 
  return <>
    <div className={`w-[25vw] aspect-[1/1.2] bg-red-600 absolute transition-all duration-500 ease-out z-1 ${props.isHidden? 'opacity-0' : 'opacity-0 lg:opacity-100'}`} style={{right: `${20 - myPos}%`}}>
        
    </div>
  </>
}

export default WorkBox
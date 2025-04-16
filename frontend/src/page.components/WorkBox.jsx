import React from 'react'

function WorkBox(props) {
  return <>
    <div className={`w-[25vw] aspect-[1/1.2] bg-red-600 absolute right-[25%] duration-400 ease-in-out z-1 ${props.isHidden? 'opacity-0' : 'opacity-0 lg:opacity-100'}` }>
        
    </div>
  </>
}

export default WorkBox
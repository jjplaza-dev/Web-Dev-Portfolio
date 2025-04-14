import React from 'react'

function WorkBox(props) {
  return <>
    <div className={`w-[20%] h-[40%] bg-red-600 absolute right-[15%] duration-400 ease-in-out ${props.isHidden? 'opacity-0' : 'opacity-0 lg:opacity-100'}` }>
        
    </div>
  </>
}

export default WorkBox
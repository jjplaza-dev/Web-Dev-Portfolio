import React from 'react'

function FillerComponent(props) {
    const myHeight = props.height
  return <section className={`w-[100vw] h-[${myHeight}vh] bg-amber-300`}>

  </section>
}

export default FillerComponent
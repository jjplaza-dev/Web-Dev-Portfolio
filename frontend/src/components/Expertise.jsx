import React from 'react'

function Expertise() {
    const expertiseArr = ["Website", "Design", "Animation", "E-commerce"]

  return <section className='w-full h-[100vh] flex items-center'>
        <div className='w-full h-10/12 bg-white flex flex-col items-center justify-center'>
            {expertiseArr.map((expertise, index) => (
                <div className='w-full h-fit text-center my-5 lg:m-0 lg:text-start text-[60px] lg:text-[150px] box-border lg:pl-36 duration-[2000ms] hover:ml-50' key={index}>{expertise}</div>
            ))}
        </div>
  </section>
}

export default Expertise
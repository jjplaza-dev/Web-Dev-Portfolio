import React from 'react'

function Works() {
  return <>
    <section className='w-screen h-fit bg-violet-200'>
        <div className='w-full h-[20vh]'>[ My Works ]</div>
        <div className='w-full h-[70vh] sm:h-[68vh] bg-green-200'>
            <div className='w-full h-full md:h-full bg-black flex flex-col justify-around items-center'>
                <div className='w-full h-[25%] box-border flex justify-center items-center bg-amber-200 '>
                    <button className='w-10/12 lg:w-5/12 h-10/12 text-nowrap tf2'>[1] Project Name</button>
                </div>
                <div className='w-full h-[25%] box-border flex justify-center items-center bg-amber-200 '>
                    <button className='w-10/12 lg:w-5/12 h-10/12 text-nowrap tf2'>[2] Project Name</button>
                </div>
                <div className='w-full h-[25%] box-border flex justify-center items-center bg-amber-200 '>
                    <button className='w-10/12 lg:w-5/12 h-10/12 text-nowrap tf2'>[3] Project Name</button>
                </div>
                <div className='w-full h-[25%] box-border flex justify-center items-center bg-amber-200 '>
                    <button className='w-10/12 lg:w-5/12 h-10/12 text-nowrap tf2'>[4] Project Name</button>
                </div>
            </div>
            
        </div>
    </section>
  </>
}

export default Works
import React, { useEffect, useState } from 'react';

function Services() {
  const serviceArr = [
    {title: "Mobile-First Design",
      text: "Prioritizing mobile responsiveness ensures your website looks and functions perfectly on all devices"
    },
    {
      title: "Fully Responsive",
      text: "Seamlessly adapts to different screen sizes, providing optimal viewing across desktops, tablets, and smartphones."
    },
    {
      title: "User-Centered Design",
      text: "Creating intuitive interfaces that are easy to navigate and understand, putting the user experience first."
    },
    {
      title: "Clean & Efficient Code",
      text: "Writing well-structured, maintainable code that is both performant and easy to update."
    },
    {
      title: "Modern Web Technologies",
      text: "Utilizing the latest technologies like React, Node.js, and other relevant frameworks to build robust and scalable websites."
    },
    {
      title: "SEO Optimization",
      text: "Implementing best practices to improve your website's search engine ranking and visibility."
    }
    
  ];

  const [onScreen, setOnScreen] = useState(false)
  

  useEffect(() => {
    const serviceBoxes = document.querySelectorAll("#serviceBox")

    window.addEventListener("scroll",(e) => {
      serviceBoxes.forEach((element, index) => {
        if(element.getBoundingClientRect().y <= window.innerHeight/2){
          setOnScreen(true)
        }
     
      });
    })
  })

  return (
    <>
      <section className='w-full h-fit bg-red-200' id='servicesBox'>
        <h2 className='text-3xl font-bold p-5'>[ My Services ]</h2>
        <p className='w-full text-lg p-5'>I craft clean, efficient, and user-friendly websites tailored to your specific needs. My focus is on creating modern, responsive designs that deliver exceptional user experiences. My expertise spans the entire web development lifecycle, from initial concept and design to final deployment and beyond.</p>
        <div className='w-full h-fit bg-amber-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 box-border'>
          {serviceArr.map((service, index) => (
            <div className='w-full h-fit overflow-hidden hover:bg-amber-100 transition-all ease-in-out duration-300 rounded-[5px] relative' key={index} id='serviceBox'> 
              <div className={`w-full h-full transition-all duration-500 border-1 border-black `} style={{transform: `translateY(${onScreen? 0:100}%)`}}>
                <div className='w-full aspect-[2/0.5] bg-amber-200'></div> 
                <div className='p-5'><b>{service.title}</b><br/>{service.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;

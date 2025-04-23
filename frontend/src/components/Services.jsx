import React, { useEffect, useState } from 'react';

function Services() {
  const serviceArr = [
    {title: "Mobile-First Design",
      text: "Prioritizing the mobile user experience, designing websites initially for smaller screens and then scaling up for larger devices. This ensures optimal usability and performance across all platforms."
    },
    {
      title: "Fully Responsive",
      text: "Websites that are built to adapt seamlessly to any screen size or device orientation, providing a consistent and optimal viewing experience on desktops, tablets, and smartphones. The layout and content adjust automatically for perfect readability and usability."
    },
    {
      title: "User-Centered Design",
      text: "Every design decision is driven by the needs and behaviors of the end-user. We conduct thorough user research and testing to ensure intuitive navigation, clear information architecture, and an enjoyable overall experience."
    },
    {
      title: "Clean & Efficient Code",
      text: "Writing well-structured, well-documented, and optimized code that is easy to maintain, update, and scale. This approach prioritizes performance, security, and long-term sustainability."
    },
    {
      title: "Modern Web Technologies",
      text: "Leveraging the latest and most effective web technologies, including cutting-edge frameworks and libraries, to build high-performing, feature-rich, and visually appealing websites. This ensures your website remains current and competitive."
    },
    {
      title: "SEO Optimization",
      text: " Implementing best practices for search engine optimization to improve your website's visibility in search engine results pages (SERPs). This includes keyword research, on-page optimization, link building, and technical SEO to drive organic traffic."
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
        <div className='w-full h-fit bg-amber-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-5 p-5 box-border'>
          {serviceArr.map((service, index) => (
            <div className='w-full h-fit overflow-hidden hover:bg-amber-100 hover:scale-105 transition-all ease-in-out duration-300 border-4 border-black box-border rounded-[10px] relative' key={index} id='serviceBox'> 
              <div className={`w-full h-full transition-all duration-500  `} style={{transform: `translateY(${onScreen? 0:100}%)`}}>
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

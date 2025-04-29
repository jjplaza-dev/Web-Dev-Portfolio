import React, { useEffect, useState } from 'react';

function Services() {
  const serviceArr = [
    {title: "Mobile-First Design",
      text: "Prioritizing the mobile user experience, designing websites initially for smaller screens and then scaling up for larger devices. This ensures optimal usability and performance across all platforms.",
      image: "src/assets/1.png"
    },
    {
      title: "Fully Responsive",
      text: "Websites that are built to adapt seamlessly to any screen size or device orientation, providing a consistent and optimal viewing experience on desktops, tablets, and smartphones. The layout and content adjust automatically for perfect readability and usability.",
      image: "src/assets/2.png"
    },
    {
      title: "User-Centered Design",
      text: "Every design decision is driven by the needs and behaviors of the end-user. We conduct thorough user research and testing to ensure intuitive navigation, clear information architecture, and an enjoyable overall experience.",
      image: "src/assets/3.png"
    },
    {
      title: "Clean & Efficient Code",
      text: "Writing well-structured, well-documented, and optimized code that is easy to maintain, update, and scale. This approach prioritizes performance, security, and long-term sustainability.",
      image: "src/assets/4.png"
    },
    {
      title: "Modern Web Technologies",
      text: "Leveraging the latest and most effective web technologies, including cutting-edge frameworks and libraries, to build high-performing, feature-rich, and visually appealing websites. This ensures your website remains current and competitive.",
      image: "src/assets/5.png"
    },
    {
      title: "SEO Optimization",
      text: " Implementing best practices for search engine optimization to improve your website's visibility in search engine results pages (SERPs). This includes keyword research, on-page optimization, link building, and technical SEO to drive organic traffic.",
      image: "src/assets/6.png"
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
        <div className='w-full h-fit bg-amber-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-15 lg:gap-y-20 p-5 py-20 box-border'>
          {serviceArr.map((service, index) => (
            <div className='w-full h-fit  hover:bg-amber-100 active:bg-amber-100 cursor-pointer transition-all ease-in-out duration-300 border-5 border-black box-border rounded-[50px] rounded-tl-none hover:rounded-[1px] active:rounded-[1px] relative hover:translate-x-[-2px] hover:translate-y-[-2px]' key={index} id='serviceBox' style={{boxShadow: onScreen? "10px 10px": "0px 0px"}}> 
              <button className='w-15 h-15 absolute bg-amber-50 border-5 rounded-[5px] z-1 bg-cover translate-x-[50%] translate-y-[-50%]' style={{backgroundImage: `url(${service.image})`}}></button>
              <div className={`w-full h-full transition-all duration-500  `} >
                <div className='p-10'>
                  <b className='text-2xl'>{service.title}</b>
                  <button className='mt-5 text-start indent-7'>{service.text}</button>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;

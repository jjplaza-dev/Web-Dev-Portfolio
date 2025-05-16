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
      <section className='w-full h-fit ] bg-amber-300 relative ' id='servicesBox'>
          <div className='w-full h-[75vh] bg-amber-200'>
            <div className='w-[90%] md:w-[75%] lg:w-[50%] h-fit bg-amber-500 m-auto sticky top-[16vh] py-10 px-5 flex flex-col justify-around'>
              <h2 className='w-full text-center font-semibold scale-120'>My Services</h2>
              <h5 className='text-center mt-10'>I craft clean, efficient, and user-friendly websites tailored to your specific needs. My focus is on creating modern, responsive designs that deliver exceptional user experiences.
</h5>
            </div>
          </div>
          <div className='w-full h-fit md:grid md:grid-cols-2 lg:grid-cols-3'>
            {serviceArr.map((service, index) => (
              <div className='w-full h-[50vh] border-2' key={index}></div>
            ))}
          </div>
      </section>
    </>
  );
}

export default Services;

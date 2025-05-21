import React, { useEffect, useState } from 'react';

function Services() {
  const serviceArr = [
    {title: "Mobile-First Design",
      text: "Prioritizing the mobile user experience, designing websites initially for smaller screens and then scaling up for larger devices.",
      image: "src/assets/1.png"
    },
    {
      title: "Fully Responsive",
      text: "Websites that are built to adapt seamlessly to any screen size or device orientation, providing a consistent and optimal viewing experience on desktops, tablets, and smartphones.",
      image: "src/assets/2.png"
    },
    {
      title: "User-Centered Design",
      text: "Every design decision is driven by the needs and behaviors of the end-user. Thorough user research and testing to ensure intuitive navigation for an enjoyable overall experience.",
      image: "src/assets/3.png"
    },
    {
      title: "Clean & Efficient Code",
      text: "Writing well-structured, well-documented, and optimized code that is easy to maintain, update, and scale.",
      image: "src/assets/4.png"
    },
    {
      title: "Modern Web Technologies",
      text: "Leveraging the latest and most effective web technologies, including cutting-edge frameworks and libraries, to build high-performing, feature-rich, and visually appealing websites.",
      image: "src/assets/5.png"
    },
    {
      title: "SEO Optimization",
      text: " Implementing best practices for search engine optimization to improve your website's visibility in search engine results pages (SERPs).",
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
      <section className='w-full h-fit bg-[#1b1b1b] relative ' id='servicesBox'>
          <div className='w-full h-[75vh]' style={{background: `linear-gradient(black, #1b1b1b)`}}>
            <div className='w-[90%] md:w-[75%] lg:w-[50%] h-fit m-auto sticky top-[16vh] py-10 px-5 flex flex-col justify-around text-white  shadow-white rounded-[5px]'>
              <h2 className='w-full text-center font-semibold scale-120 '>My Services</h2>
              <h5 className='text-center mt-10'>I craft clean, efficient, and user-friendly websites tailored to your specific needs. My focus is on creating modern, responsive designs that deliver exceptional user experiences.</h5>
            </div>
          </div>
          <div className='w-full h-fit md:grid lg:grid-cols-3'>
            {serviceArr.map((service, index) => (
              <div className='w-full h-[60vh] relative' key={index}>
                <div className='w-[90%] h-[80%] text-white border-3 border-white absolute right-[50%] translate-x-[48%] top-[10%] pt-20 px-10 lg:pr-20 rounded-[20px] rounded-tl-none shadow-' style={{boxShadow: `${15}px ${15}px white, 2px 2px white, 5px 5px white, 7px 7px white, 10px 10px white, 12px 12px white`}}>
                 <div className='w-20 h-20 border-3 bg-white rounded-[5px] absolute top-0 left-0 bg-cover translate-x-[50%] translate-y-[-50%]'>
                   <div className='w-[80%] h-[80%] bg-cover absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%]' style={{backgroundImage: `url(${service.image})`}}></div>
                 </div>
                  <h4 className='font-semibold'>{service.title}</h4>
                  <h5 className='mt-5'>{service.text}</h5>
                </div>
              </div>
            ))}
          </div>
      </section>
    </>
  );
}

export default Services;

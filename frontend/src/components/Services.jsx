import React from 'react';

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

  return (
    <>
      <section className='w-full screen h-fit bg-red-200'>
        <h2 className='text-3xl font-bold mb-4'>My Services</h2>
        <p className='text-lg mb-6'>I craft clean, efficient, and user-friendly websites tailored to your specific needs. My focus is on creating modern, responsive designs that deliver exceptional user experiences. My expertise spans the entire web development lifecycle, from initial concept and design to final deployment and beyond.</p>
        <div className='w-full h-fit bg-amber-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 box-border'>
          {serviceArr.map((service, index) => (
            <div className='w-full h-fit border-1 border-gray-300 rounded-[5px] p-5 shadow-2xl' key={index}>{service.title}<br/>{service.text}</div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;

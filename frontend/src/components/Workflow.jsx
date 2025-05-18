import React, { useState } from 'react';

function Workflow() {
  /***Here are 5 sets of 3-step workflow processes for web development, covering different aspects of the development lifecycle:

**Set 1: Project Planning & Initiation**

1.  **Define Scope & Requirements:** Clearly outline the project's goals, target audience, features, and functionalities. Document all requirements, both functional and non-functional. This step sets the foundation for the entire project.
2.  **Create a Project Plan & Timeline:** Develop a detailed project plan, including tasks, milestones, dependencies, resource allocation, and a realistic timeline.  Use project management tools (e.g., Trello, Asana, Jira) to organize and track progress.
3.  **Set Up Development Environment & Version Control:** Configure the development environment (code editor, local server, etc.) and establish a version control system (e.g., Git) to manage code changes, collaboration, and backups.

**Set 2: Design & User Experience (UX)**

1.  **Wireframing & Prototyping:** Create wireframes (basic layouts) and prototypes (interactive models) to visualize the website's structure, content flow, and user interactions. Iterate on these based on feedback.
2.  **UI Design & Style Guide:** Design the user interface (UI) with a focus on aesthetics, branding, and usability.  Develop a style guide that defines the visual elements (colors, fonts, imagery, etc.) to maintain consistency.
3.  **User Testing & Iteration:** Conduct user testing (e.g., usability testing, A/B testing) to gather feedback on the design and user experience.  Iterate on the design based on the feedback received.

**Set 3: Front-End Development**

1.  **HTML Structure & Content Implementation:** Structure the website's content using HTML, ensuring semantic correctness and accessibility. Implement the content (text, images, videos, etc.) according to the design.
2.  **CSS Styling & Responsiveness:** Apply CSS to style the website, creating the visual appearance defined in the UI design. Ensure the website is responsive and adapts to different screen sizes (desktop, tablet, mobile).
3.  **JavaScript Functionality & Interactivity:** Implement JavaScript to add dynamic behavior, user interactions, and client-side functionality (e.g., form validation, animations, AJAX requests).

**Set 4: Back-End Development**

1.  **Database Design & Implementation:** Design the database schema to store and manage the website's data. Implement the database using a suitable database management system (DBMS) (e.g., MySQL, PostgreSQL, MongoDB).
2.  **Server-Side Logic & API Development:** Develop the server-side logic using a programming language (e.g., Python, Java, PHP, Node.js) and a web framework. Create APIs (Application Programming Interfaces) to handle data requests and responses.
3.  **Server Configuration & Deployment:** Configure the web server (e.g., Apache, Nginx) and deploy the back-end code and database to a hosting environment.

**Set 5: Testing, Deployment & Maintenance**

1.  **Testing & Quality Assurance (QA):** Thoroughly test the website across different browsers, devices, and operating systems. Perform functional testing, usability testing, performance testing, and security testing to identify and fix bugs.
2.  **Deployment & Launch:** Deploy the website to a production server and make it live.  This includes configuring the domain name, setting up SSL certificates, and ensuring proper DNS settings.
3.  **Monitoring, Maintenance & Updates:** Monitor the website's performance and security.  Perform regular maintenance tasks (e.g., database backups, software updates). Implement updates and new features as needed.

These sets of workflows provide a structured approach to web development. Remember that the specific steps and their order can be adapted based on the project's complexity, the development team's size, and the chosen technologies.
***/ 
  
  return (
    <>
      <section className='w-full h-full bg-[#1b1b1b] flex'>
        <div className='w-full h-[100%] lg:h-[60%] bg-amber-400 m-auto grid grid-cols-1 lg:grid-cols-3 relative'>
          <div className="w-[60vw] lg:w-[50%] lg:min-w-[20rem] lg:max-w-[20rem] h-[80%] px-5 py-2 lg:aspect-[1/1.5] bg-green-200 m-auto text-center"><h4 className='h-[20%] mb-8'>Planning and Design</h4><p>Define goals, audience, structure, and tools; create wireframes to guide layout, functionality, and user experience.</p></div>
          <div className="w-[60vw] lg:w-[50%] lg:min-w-[20rem] lg:max-w-[20rem] h-[80%] px-5 py-2 lg:aspect-[1/1.5] bg-green-200 m-auto text-center"><h4 className='h-[20%] mb-8'>Development</h4><p>Build front and back end using appropriate technologies, ensuring responsiveness, interactivity, and cross-device compatibility.</p></div>
          <div className="w-[60vw] lg:w-[50%] lg:min-w-[20rem] lg:max-w-[20rem] h-[80%] px-5 py-2 lg:aspect-[1/1.5] bg-green-200 m-auto text-center"><h4 className='h-[20%] mb-8'>Testing and Deployment</h4><p>Test thoroughly for bugs and performance issues, optimize, then deploy to a hosting platform and monitor post-launch.</p></div>
        </div>
      </section>
    </>
  );
}

export default Workflow;



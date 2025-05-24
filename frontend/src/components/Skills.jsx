import React, { useEffect, useState } from 'react'
import styles from "./Skills.module.css"
import Workflow from './Workflow'
import htmlLogo from '../assets/html-logo.svg'
import cssLogo from '../assets/css3-logo.svg'
import sassLogo from "../assets/sass-logo.svg"
import reactLogo from '../assets/react-logo.svg'
import jsLogo from "../assets/javascript-logo.svg"
import bootstrapLogo from "../assets/bootstrap-logo.svg"
import tailwindLogo from "../assets/tailwind-logo.svg"
import viteLogo from "../assets/vite-logo.svg"
import nodeLogo from "../assets/node-js-logo.svg"
import nextLogo from "../assets/next-logo.svg"
import mongodbLogo from "../assets/mongodb-logo.svg"
import expressLogo from "../assets/express-logo.svg"
import vscodeLogo from "../assets/vs-code-logo.svg"
import githubLogo from "../assets/github-logo.svg"
import gitLogo from "../assets/git-logo.svg"
import npmLogo from "../assets/npm-logo.svg"
import vercelLogo from "../assets/vercel-logo.svg"
import figmaLogo from "../assets/figma-logo.svg"
import framerLogo from "../assets/framer-logo.svg"

function Skills() {
    const [scrollY, setScrollY] = useState()
    const [onMiddle, setOnMiddle] = useState()

    const frontendSkills = [ 
        {skill: "HTML", logo: htmlLogo, color: "#DD512A ",  description: "HTML is a"},
        {skill: "CSS", logo: cssLogo, color: "#3848a8 ", description: "-N/A-"},
        {skill: "SASS", logo: sassLogo, color: "#CD6799 ", description: "-N/A-"},
        {skill: "React", logo: reactLogo, color: "#53C1DE ", description: "-N/A-"},
        {skill: "JavaScript", logo: jsLogo, color: "#F7DF1E ", description: "-N/A-"},
        {skill: "Bootstrap", logo: bootstrapLogo, color: "#6610f2 ", description: "-N/A-"},
        {skill: "Tailwind", logo: tailwindLogo, color: "#06b6d4 ", description: "-N/A-"},  
        {skill: "Vite", logo: viteLogo, color: "#BD34FE ", description: ""},
        {skill: "Node", logo: nodeLogo, color: "#8CC84B ", description: ""},
        {skill: "NextJS", logo: nextLogo, color: "#000000 ", description: ""},
        {skill: "MongoDB", logo: mongodbLogo, color: "#13aa52 ", description: ""},
        {skill: "Express.js", logo: expressLogo, color: "#000000 ", description: ""},
        {skill: "VS Code", logo: vscodeLogo, color: "#32B5F1 ", description: ""},
        {skill: "Github", logo: githubLogo, color: "#000000 ", description: ""},
        {skill: "Git", logo: gitLogo, color: "#EE513B ", description: ""},
        {skill: "NPM", logo: npmLogo, color: "#cb3837 ", description: ""},
        {skill: "Vercel", logo: vercelLogo, color: "#000000 ", description: ""},
        {skill: "Figma", logo: figmaLogo, color: "#FF7262 ", description: ""},     
        {skill: "Framer", logo: framerLogo, color: "#00AAFF ", description: ""}
      ]

    const backendSkills = [
     
    ]

    const toolsSkills = [
      
    ]

  
 




  return <>
    <section className='w-full h-[150vh] sm:h-[120vh] bg-white relative' id='skillsBox'>
      <div className='w-full  text-center absolute right-[50%] bottom-[70%] translate-x-[50%] text-[50px] sm:text-[80px] lg:text-[120px] font-extrabold scale-y-80'>TECH STACK</div>
      <div className='w-[90%] sm:w-[70%] lg:w-[50%] h-fit absolute right-[50%] translate-x-[50%] top-[30%]  grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-y-5'>
        {frontendSkills.map((skills, index) => (
              <div key={index} className='w-full aspect-square relative py-5 origin-[50%_100%] duration-300' id='allSkillsBox'>
                <div className='w-[60px] sm:w-[70px] lg:w-[80px] aspect-square m-auto bg-gray-100 flex justify-center items-center rounded-[10px] '>
                  <img className='w-6/12 aspect-square' src={skills.logo}/>
                </div>
                <p className='w-full text-center pt-4 sm:pt-3 lg:pt-4 text-[15px]' style={{color: skills.color}}>{skills.skill}</p>
              </div>
            ))}
       
      </div>
    </section>
  </>
}

export default Skills
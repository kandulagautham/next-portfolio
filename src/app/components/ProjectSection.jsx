"use client"
import React ,{useState,useRef}from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion,useInView } from 'framer-motion'
const projectData=[
    {
        id:1,
        title:'CuraChain',
        description:'Developed a secure Electronic Health Records (EHR) system using blockchain, Solidity, React, and MetaMask. Implemented a private blockchain for medical applications, prioritizing robust encryption, access controls, and smart contract security. Regular audits, compliance adherence, and user education contribute to a comprehensive, privacy-oriented EHR solution.',
        images:'/projects/CuraChain.png',
        tag:['All','Web'],
        g_url:''
    },
    {
        id:2,
        title:'AI Restaurant Recommender',
        description: 'Developed a restaurant recommendation model with a 95% accuracy using Extra Tree Regression, considering the last three visited restaurants as factors. Utilized KNN for regional cuisine preferences and TFIDF to assess review-based similarities. Trained on real-world Bangalore Zomato data, the model predicts approximate costs based on personalized factors and enhances dining suggestions.',
        images:'/projects/Restaurant.png',
        tag:['All','A.I'],
        g_url:''
    },
    {
        id:3,
        title:'AWS Blood Collection Camp',
        description:'Deployed a dynamic website for blood test results storage and viewing on AWS infrastructure, incorporating EC2, RDS, and Nginx server. Enhanced development and deployment efficiency with a robust Continuous Integration and Continuous Deployment (CICD) pipeline through GitHub, streamlining the process for seamless updates and improvements.',
        images:'/projects/BloodCollection.png',
        tag:['All','Web'],
        g_url:''
    },
    {
        id:4,
        title:'Smartwatch Prototype',
        description:'Developed a smartwatch prototype with ESP8266, featuring sensors like heart rate and blood pressure. Utilized the Arduino Cloud for real-time data retrieval. Conducted analytics to forecast potential health issues, enhancing proactive monitoring and alert capabilities for heart attacks and related concerns.',
        images:'/projects/Smartwatch.png',
        tag:['All','Iot'],
        g_url:''
    },
    {
        id:5,
        title:'Club Development System',
        description:'Crafted a club management website employing HTML, CSS, JavaScript, ReactJS, MongoDB, and ExpressJS. The site efficiently manages club registrations, showcases pertinent club information, and integrates a calendar-based notification system, enhancing communication and organization within the club community.',
        images:'/projects/ClubDev.png',
        tag:['All','Web'],
        g_url:''
    },

]
const ProjectSection = () => {
    const ref=useRef(null);
    const isinview=useInView(ref,{once:true});
    const [tag,setTag]=useState('All');
    const handleTagChange=(newtag)=>{
        setTag(newtag);
    };
    const filtereProject=projectData.filter((project)=>
        project.tag.includes(tag)
    );
    const cardvariants={
        initial: {y:50,opacity:0},
        animate: {y:0,opacity:1}
    }
  return (
    <section id="projects">
        <h2 className='text-center text-3xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center mb-8 gap-2 py-2 '>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag==='All'}/>
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag==='Web'}/>
            <ProjectTag onClick={handleTagChange} name="A.I" isSelected={tag==='A.I'}/>
            <ProjectTag onClick={handleTagChange} name="Iot" isSelected={tag==='Iot'}/>
        </div>
        <ul ref={ref} className="grid mb-8 md:grid-cols-3 gap-8 md:gap-12">{filtereProject.map((project,index)=>
        <motion.li key={index} variants={cardvariants} initial="initial" animate={isinview?"animate":"initial"} transition={{duration: 0.3,delay:index*0.4}}  >
        <ProjectCard key={project.id} title={project.title} description={project.description} imgurl={project.images} giturl={project.g_url}/>
        </motion.li> 
        )}
        
        </ul>
    </section>
  )
}

export default ProjectSection
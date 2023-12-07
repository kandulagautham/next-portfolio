"use client"
 import React,{useTransition,useState} from 'react'
 import Image from 'next/image'
 import TabComponent from './TabComponent'
 const AboutSection = () => {
    const [tab,setTab]=useState("skills");
    const [isPending,startTransition]=useTransition();
    const handleTabchange=(id)=>{
        startTransition(()=>{setTab(id);});
    };
const tab_data=[
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>PYTHON</li>
                <li>C</li>
                <li>NODE JS</li>
                <li>MYSQL</li>
                <li>SOLIDITY</li>
                <li>TENSORFLOW</li>
                <li>AWS</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>PES UNIVERSITY          8.78</li>
                <li>NARAYANA PU COLLEGE     85.53</li>
                <li>BETHANY HIGH SCHOOL     87.5</li>
                
            </ul>
        )
    },
    {
        title:"Others",
        id:"others",
        content:(
            <ul className='list-disc pl-2'>
                <li>PES UNIVERSITY          3 x MRD SCHOLARSHIP-TOP 15%</li>
                <li>PES UNIVERSITY          MAAYA SPONSORSHIP HEAD</li>
                <li>BETHANY HIGH SCHOOL     1 x EXCELLENCE IN COMPUTERS</li> 
            </ul>
        )
    }
]
   return (
     <section  className='text-white' id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16 '>
            <Image  alt="pic" className='mt-1px rounded-2xl'src="/PIC1.png" width={450} height={450}/>
        <div className='mt-4 md:mt-0 text-left flex-col'>
            <h2 className='text-4xl font-bold text-white mb-4 mt-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
            As a final-year Computer Science engineer, my academic journey has cultivated a diverse skill set,
            emphasizing collaboration, effective communication, and adept problem-solving. I&apos;ve gained hands-on
            experience in applying advanced AI/ML techniques like deep learning and reinforcement learning,
            providing valuable insights into artificial intelligence applications. My enthusiasm for emerging
            technologies extends to exploring trends in blockchain, including Ethereum, and the dynamic realm 
            of IoT. Seamlessly integrating this knowledge, I bring a nuanced understanding of web development,
            ensuring the creation of robust and user-friendly applications. Proficient in both front-end and 
            back-end technologies, coupled with expertise in version control tools like Git, I am well-prepared
            to contribute innovative solutions to the ever-evolving landscape of technology.
            </p>
            <div className='flex flex-row justify-start mt-8'>
                <TabComponent selectTab={()=>handleTabchange("skills")} active={tab === "skills"}>Skills</TabComponent>
                <TabComponent selectTab={()=>handleTabchange("education")} active={tab === "education"}>Education</TabComponent>
                <TabComponent selectTab={()=>handleTabchange("others")} active={tab === "others"}>Others</TabComponent>
            </div>
            <div className='mt-8'>{tab_data.find((t)=>t.id===tab).content}</div>
        </div>
        </div>
     </section>
   )
 }
 
 export default AboutSection;
import React from 'react'
import { CodeBracketIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
const ProjectCard = ({imgurl,title,description,giturl}) => {
  return (
    <div>
        <div 
        className="h-52 md:h-72 rounded-t-xl relative group" 
        style={{background:`url(${imgurl})`,backgroundSize:"cover"}}>
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-800'>
            <Link href={giturl} className='h-14 w-14 border-2 relative rounded-full border-gray-400 hover:border-white'>
                <CodeBracketIcon className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-8 w-8 text-gray-400 cursor-pointer hover:text-white'/>
            </Link>
        </div>
        </div>
        <div className='text-white rounded-b-xl bg-black py-6 px-4 group transform transition duration-300 hover:scale-105'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-gray-300 hidden group-hover:flex'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
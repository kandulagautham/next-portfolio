import React from 'react'

const ProjectTag = ({name,onClick,isSelected}) => {
    const buttonStyle= isSelected ? "text-white border-teal-300" : "text-white border-slate-600 hover:border-white"
  return (
        <button onClick={()=> onClick(name)} className={` ${buttonStyle}   mr-2 rounded-full border-2  px-4 py-2 text-lg cursor-pointer`}>{name}</button>
  )
}

export default ProjectTag
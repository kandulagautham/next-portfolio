"use client";
import React,{useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import {Bars3Icon} from "@heroicons/react/24/solid"
//import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
const navbarcomp=[
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact",
    }
];
const NavBar = () => {
    const [navbarOpen,setnavbarOpen]=useState(true);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href="/">
            <Image src="/New folder/favicon_io/apple-touch-icon.png" className='text-2xl md :text-5xl text-white font-semibold' width={75} height={50}></Image>
            </Link>
        <div className="block md:hidden">
            {
                navbarOpen ? (
                <button onClick={()=>setnavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                    <Bars3Icon className='h-5 w-5' ></Bars3Icon>
                    </button>):
                (<button onClick={()=>setnavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                    <div className='h-5 w-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
                    </div>
                </button>)
            }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p:0 sm:flex-row md:space-x-8 mt-0">
                {
                    navbarcomp.map((list1,index)=>(
                        <li key={index}>
                                <NavLink  href={list1.path} title={list1.title}/>
                        </li>
                    ))
                }
            </ul>
        </div>
        </div>
        {
        navbarOpen ? 
        null
        :
        <ul className='flex  flex-col py-4 gap-4 items-center'>
        {navbarcomp.map((link,index)=> 
        <li key={index}>
            <button onClick={()=>setnavbarOpen(true)}>
                <NavLink href={link.path} title={link.title}/>
            </button>
        </li>)}
    </ul>
    }
    </nav>
  )
}

export default NavBar;


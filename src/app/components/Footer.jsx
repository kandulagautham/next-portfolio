import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='footer border border-t-gray-700 border-l-transparent border-r-transparent text-white z-10'>
        <div className='container p-12 flex justify-between'>
            <span>
                <Image src="/New folder/favicon_io/apple-touch-icon.png" className='text-2xl md :text-5xl text-white font-semibold mt-0' width={75} height={50}></Image>
            </span>
            <p className='text-gray-500 mt-8'>All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
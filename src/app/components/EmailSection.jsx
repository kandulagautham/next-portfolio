"use client"
import React,{useState} from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkdenIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    /*const [emailsubmitted,setemailsubmitted]=useState(false);
    const handelSubmit= async(e)=>
    {
        e.preventDefault();
        const data={
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata=JSON.stringify(data);
        const endpoint='/api/send';
        const options={
            method:'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSONdata,
        }
        const responce=await fetch(endpoint,options);
        const resData=await responce.json();
        if (responce.status===200){
            console.log('Message Sent');
            setemailsubmitted(true);
        }
    };*/
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id="contact">
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-teal-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4  -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div>
            <h5 className='text-white text-xl font-bold my-2 mb-4'>Let&apos;s Connect </h5>
            <p className='text-grey-400 max-w-md mt-4 mb-4' >
                I&apos;m curently looing for new opportunities,my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className='socials flex flex-row gap-2 mt-4'>
                <Link href='https://github.com/kandulagautham'>
                    <Image src={GithubIcon} alt='GithubIcon'/>
                </Link>
                <Link href='https://www.linkedin.com/in/gautham-saaketh'>
                    <Image src={LinkdenIcon} alt='LinkdenIcon'/>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col gap-4' action="https://formspree.io/f/mrgwnelp" method="POST">
                <div className="">
                    <label  className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                    <input name='email' className='bg-black border border-gray-500 placeholder-gray-100 text-gray-100 text-sm rounded-lg block w-full p-2.5' type='email' id='email' required placeholder='abc@example.com'/>
                </div>
                <div className="">
                    <label  className='text-white block mt-2 mb-2 text-sm font-medium'>Subject</label>
                    <input name='subject' className='bg-black border border-gray-500 placeholder-gray-100 text-gray-100 text-sm rounded-lg block w-full p-2.5' type='text' id='sunject' required placeholder='Hello'/>
                </div>
                <div className='w-full'>
                    <label  className='text-white block mb-2 text-sm font-medium '>Message</label>
                    <textarea name="message" id="messgae" required placeholder="Let's Talk About....." className='bg-black border border-gray-500 placeholder-gray-100 text-gray-100 text-sm rounded-lg block w-full p-2.5'></textarea>
                </div>
                <button type="submit" className=' bg-teal-500 hover:bg-teal-400 font-medium px-5 py-2.5 rounded-lg w-full'>Send Message</button>
            {
                emailsubmitted && (
                    <p className='text-green-500 text-sm mt-2'>Email sent successfully</p>
                )
            }
            </form>
        </div>
    </section>
  )
}

export default EmailSection
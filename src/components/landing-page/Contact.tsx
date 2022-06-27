import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className=' md:px-72 w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact</p>
                <p className='py-4'>Submit the form below or shoot me an email - nmugishaserge@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] border-2 hover:bg-pink-50 hover:border-pink-600 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]  border-2 hover:bg-pink-50 hover:border-pink-600' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2  border-2 hover:bg-pink-50 hover:border-pink-600' name="message" rows={7} placeholder='Message'></textarea>
            <button className='text-white bg-pink-500 border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
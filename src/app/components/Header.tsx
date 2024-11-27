import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    
    <div className='flex gap-[32px] bg-[#f7f7f7]'>
        <div className='ml-12 mt-2'>
            <Image src={"/image/Ddsgnr Library.svg"} alt='hero image' width={130} height={40}/>
        </div>
    <div className='flex gap-[30px] bg-white ml-60 m-2'>
        <button> Home </button>
        <button> Courses</button>
        <button> Services</button>
        <button> Achievement</button>
        <button> About Us</button>
        <button> Testimonial</button>
        <button className='text-black border-2 border-black px-[10px] rounded-[4px]'> Log in </button>
        <button className='text-white bg-black px-[10px] rounded-[4px]'> Sign up</button>
    </div>
    </div>
  )
}

export default Header

 
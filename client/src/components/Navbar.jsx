import React from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className='bg-[#fffAfA] h-16 shadow-lg flex justify-around items-center'>
        <div className='flex gap-1'>
            <span className='text-[#6522ad] font-bold'>Find</span>
            <span className='text-[#39c868] font-bold'>Your</span>
            <span className='text-[#6522ad] font-bold'>Fellow</span>
        </div>

      <div className='hidden sm:block'>
      <ul className='w-80 max-w-xl flex justify-between h-15'>
        <Link className='font-medium hover:border-red-500 hover:border-b-2 h-6 m-y-auto ' to='/home'>Home</Link>
        <Link className='font-medium hover:border-red-500 hover:border-b-2 h-6 m-y-aut' to='/events' >Events</Link>
        <Link className='font-medium hover:border-red-500 hover:border-b-2 h-6 m-y-aut' to='/about'>About</Link>
        
        <SignedOut>
        <li onClick={() => navigate("/home")} className='font-medium hover:border-red-500 hover:border-b-2 h-6 m-y-aut cursor-pointer'>
        <SignInButton className='font-medium hover:border-red-500 hover:border-b-2 h-6 m-y-auto' />

        </li>
        
      </SignedOut>
      <SignedIn>
        <UserButton className='font-medium hover:border-red-500 hover:border-b-2 h-6 m-y-aut' />
      </SignedIn>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
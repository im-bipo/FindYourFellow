import React from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";



const Navbar = () => {

  return (
    <nav className='bg-[#fffAfA] h-16 shadow-lg flex justify-around items-center w-screen'>
        <div className='flex  gap-1 sm:ml-20'>
            <span className='text-[#6522ad] font-bold'>Find</span>
            <span className='text-[#39c868] font-bold'>Your</span>
            <span className='text-[#6522ad] font-bold'>Fellow</span>
        </div>

      <div className='hidden sm:block'>
      <ul className='w-80 max-w-xl flex justify-between items-center h-15'>
      <SignedIn>
        <Link className='font-medium hover:border-red-500 hover:border-b-2 h-6 m-y-auto ' to='/'>Home</Link>
        <Link className='font-medium hover:border-red-500 hover:border-b-2 h-6 m-y-aut' to='/events' >Events</Link>
        <Link className='font-medium hover:border-red-500 hover:border-b-2 h-6 m-y-aut' to='/about'>About</Link>
        
        <UserButton className='font-medium hover:border-red-500 hover:border-b-2 h-6 m-y-aut' afterSignOutUrl='/landing' />
      </SignedIn>
        <SignedOut>
        <Link className='font-medium hover:border-red-500 hover:border-b-2 h-6 mx-auto' to='/signin'>Signin</Link>
      </SignedOut>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
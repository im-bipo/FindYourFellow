import React from 'react'
import { SignUp } from '@clerk/clerk-react'

const Signup = () => {
  return (
    <div>
     <SignUp signinUrl="/signup" forceRedirectedUrl="/home" />
    </div>
  )
}

export default Signup
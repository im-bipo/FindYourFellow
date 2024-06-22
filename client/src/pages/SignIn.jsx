
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className='grid place-items-center mt-20'>
      <SignIn signinUrl="/signin" forceRedirectedUrl={"/home"} />
    </div>
  );
}

export default SignInPage;

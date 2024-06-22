import React, { useState } from 'react';

const notFound = () => {

    return (
     <div className='flex justify-center items-center flex-col'>
     <h1 className='font-black text-7xl mt-32'>404 ERROR</h1>
     <p className='mt-10'>Page Not Found!!!</p>
     </div>
    );
};

export default notFound;

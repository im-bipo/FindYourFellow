import React from 'react'
import CardList from '../components/Cards/CardList'
import Filter from '../components/eventsFilter/Filter'

const Events = () => {
  return (
    <div>
      <h1 className='gap-5 m-14  text-3xl sm:text-5xl font-semibold flex justify-center'>
        <span className='text-[#6522ad]'>Events</span>
        <span className='text-[#39c868]'>Happening</span> </h1>
        <div>
          <Filter/>
        </div>
      <CardList />
    </div>
  )
}

export default Events
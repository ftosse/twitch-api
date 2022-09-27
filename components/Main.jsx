import React from 'react'
import Categories from './Categories'
import Hero from './Hero'
import Games from './Games'
import IconBar from './IconBar'
import LiveChannels from './LiveChannels'

const Main = () => {
  return (
    <div className='absolute left-[20px] xl:center mt-20'>
        <Hero/>
        <IconBar />
        <Games />
        <LiveChannels />
        <Categories />
    </div>
  )
}

export default Main

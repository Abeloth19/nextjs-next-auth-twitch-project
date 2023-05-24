import React from 'react'
import Category from './Category'
import Hero from './Hero'
import Icon from './Icon'
import Channel from './Channel'

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[220px]'>
        <Hero />
        <Channel />
        <Icon />
        <Category />
    </div>
  )
}

export default Main

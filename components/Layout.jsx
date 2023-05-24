import React from 'react'
import Main from './Main'
import Menu from './Menu'

const Layout = () => {
  return (
    <div className='pt-[60px] flex w-full'>
        <Menu />
        <Main />
    </div>
  )
}

export default Layout
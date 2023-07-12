import React from 'react'
import Navbar from '../component/navbar';

const Layout = ({children}:any) => {
  return (
    <>
        <Navbar/>

        { children}

        
    </>
  )
}

export default Layout

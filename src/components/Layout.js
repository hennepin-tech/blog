import React, { useState, useEffect} from 'react'

import Header from './header/Header'
import Footer from './footer/Footer'

import '../styles/reset.css'

const Layout = ({ children }) => {

  const [height, setHeight] = useState(127)

  useEffect(() => {
    const header = document.getElementById('header')
    window.addEventListener('load', () => { 
      if (!header) return;
      let elHeight = header.getBoundingClientRect().height
      setHeight(elHeight) 
    })
    window.addEventListener('resize', () => { 
      if (!header) return;
      let elHeight = header.getBoundingClientRect().height
      setHeight(elHeight) 
    })
  }, [])

  return (
    <>
      <Header />
      <main style={{
        // marginTop: '127px' || height
      }}>
        { children }
      </main>
      <Footer />
    </>
  )
}

export default Layout
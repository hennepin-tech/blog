import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Nav from './Nav'

import '../../styles/header.scss'

const Header = () => {
  const logo = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {eq: "png"}, name: {eq: "logo-htc"}}) {
        nodes {
          publicURL
        }
      }
    }
  `)

  return (
    <header
    id="header"
      ref={el => {
        // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
        if (!el) return;

        console.log(el.getBoundingClientRect().height); // prints 200px
      }}
    >
      <div>
        <img src={logo.allFile.nodes[0].publicURL} alt="The Hennepin Technical College logo"/>
      </div>
      <Nav />
    </header>
  )
}

export default Header
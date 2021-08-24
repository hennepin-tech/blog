import React from 'react'
import DropDown from './DropDown'

import '../../styles/nav.scss'

import { data } from './navData'

const Nav = () => {
  return (
    <nav>
      <ul>
        {/* maps over each item in navData to programatically create the main navigation */}
        {data.map((item, index) => <DropDown item={item} index={index} key={index}/>)}
      </ul>
    </nav>
  )
}

export default Nav
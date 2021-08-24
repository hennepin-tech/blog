import React from 'react'

// react-accessible-dropdown-menu-hook docs
// https://sparksuite.github.io/react-accessible-dropdown-menu-hook/docs/
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

const DropDown = ({ item, index }) => {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(item.items.length);
  return (
    <>
    <li className="bump">
      <button 
        {...buttonProps} 
        className={isOpen ? 'open' : ''}
        style={index === 0 ? { marginLeft: 0 } : {} }
      >
        {item.text}
      </button>
      <ul className={isOpen ? 'visible' : ''} role='menu'>
        {item.items.map((subitem, index) => {
          return <li key={index}>
            <a href={subitem.link} {...itemProps[index]}>
              {subitem.text}
            </a>
          </li>
        })}
      </ul>
    </li>
    <span 
      className="orange-pipe" 
      style={index === item.items.length ? { display: 'none' } : {} }
    > | </span>
    </>
  )
}

export default DropDown
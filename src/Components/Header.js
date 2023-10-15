import React from 'react'

const Header = () => {
  return (
    <header>
    <h2 className='logo'>Logo</h2>
    <nav className='navigation'>
      <a href='#'>Home</a>
      <a href='#'>About</a>
      <a href='#'>Services</a>
      <a href='#'>Contact</a>
      <button className='btnLogin-popup'>Login</button>
  </nav>
  </header>
  )
}

export default Header

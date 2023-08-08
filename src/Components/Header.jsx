import React from 'react'

const Header = ( prop ) => {
    
  return (
      <nav style={{ minHeight: "10vh", backgroundColor: 'blue',color:'white',fontWeight:'bolder',textTransform:'capitalize',padding:'10px',letterSpacing:'2px' }}>
          
          <h1 >{prop.appname }</h1>
      </nav>
  )
}

export default Header;
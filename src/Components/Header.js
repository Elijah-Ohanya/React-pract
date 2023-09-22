import React from 'react'

const Header = (prop) => {
  return (
      <header>
          <nav>
              <h1>
              {
                  prop.header
             } 
            </h1>
          </nav>
    </header>
  )
}

export default Header
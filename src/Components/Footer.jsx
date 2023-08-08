import React from 'react'

const Footer = (prop) => {
  return (
      <footer style={{
          textAlign: 'center', paddingTop:'10px',backgroundColor:'blue',color:'white'}}>
          {prop.footername}
      </footer>
  )
}

export default Footer;
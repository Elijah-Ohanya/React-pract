import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

const App = () => {
  const listofcolor = [
    {
      id: 1,
      name:'Blue'
    },
    {
      id: 2,
      name:'Green'
    },
    {
      id: 3,
      name:'White'
    }
  ]
  return (
    <div>
      <Header/>
      <Main list={listofcolor} />
      <Footer/>
    </div>
  )
}

export default App

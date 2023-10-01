import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

const App = () => {
  const listofcolor = [
    {
      id: 1,
      name:'blue'
    },
    {
      id: 2,
      name:'green'
    },
    {
      id: 3,
      name:'white'
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

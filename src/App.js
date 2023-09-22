import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

const App = () => {
  const h1 = 'Groceries List'
  const h3 = 'Copyright @ 2023'
  const listofobj = [
    {
      id: 1,
      name:'tele'
    },
    {
      id: 2,
      name:'chair'
    },
    {
      id: 3,
      name:'table'
    }

  ]
  return (
    <div className='App'>
      <Header header={h1} />
      <Main names={listofobj} />
      <Footer footer={h3} />
    </div>
  )
}

export default App
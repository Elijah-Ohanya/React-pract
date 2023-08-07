import { useState } from "react";

const App = () => {
   const [count ,setCount]=useState(0)
  const [name, setName] = useState('Fireman');
  const [shop,setShop]=useState('Adebabs')
  const handleclick = () => {
    setCount(prev=>prev+1)
}
  const handleh1 = () => {
   setName('Elijah')
  }
  const handleh2 = () => {
    setShop('Tutors')
  }
  return (
    <div>
      <button
        onClick={handleclick}
        style={{ width: '50px',height:'50px', color:'blue',borderRadius:'50%'}}
      >
        {count}
      </button>
      <h1
        onMouseOver={handleh1}
      >
        {name}
      </h1>
      <h2
        onMouseLeave={handleh2}
      >
        {shop}
      </h2>
    </div>
  )
 }


export default App;
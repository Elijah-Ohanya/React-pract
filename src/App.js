import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { data } from "./Data/Db";


const App = () => {
  const [items, setItems] = useState(
    data
  );
  
  return (
    <>
      <Header appname="groceries list" />
      <Main
        mainname='main'
        data={items}
      />
      <Footer footername='copyright @ 2023'/>
    </>
  )
}

export default App;


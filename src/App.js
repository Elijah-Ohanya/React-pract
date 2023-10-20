import React from 'react'
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');

// registerLink.addEventListener('click', () => {
//   wrapper.classList.add('active');
// });
const App = () => {
  return (
    <div className='body'>
     <Header/>
      <Main />
      {/* <Footer/> */}
    </div>
  )
}

export default App;

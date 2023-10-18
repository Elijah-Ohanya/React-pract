import React from 'react'

const Main = () => {
  return (
    <div className='wrapper'>
      {/* for the icon */}
      {/* <span></span> */}
        <div className='form-box login'>
          <h2>Login</h2>
          <form action='#'>
            <div className='input-box'>
              <span className='icon'></span>
            <input
              placeholder='Enter your Email Address'
              type='email' required />
              <label>Email:</label>
            </div>
            <div className='input-box'>
              <span className='icon'></span>
            <input
              placeholder='Pls include your password required'
              type='password' required />
            <label>Password:</label>
            
            </div> <br></br>
            <div className='remember-forgot'>
                      <label>
                          <input type='checkbox' />
                          Remember me     
                      </label>     
                           <a href='#'> Forgot Password?</a>
                  </div><br/>
          <button type='submit' className='btn'>Login</button>
                  <div className='login-register'>
                      <p>Don't have an account <a href='#' className='register-link'>Register Here!!</a></p>
                  </div>
          </form>
      </div>

















      
      <div className='form-box register'>
          <h2>Registration</h2>
          <form action='#'>
            <div className='input-box'>
              <span className='icon'></span>
            <input
              placeholder='Enter your name'
              type='text' required />
              <label>Username:</label>
            </div>
            <div className='input-box'>
              <span className='icon'></span>
            <input
              placeholder='Include your password required'
              type='password' required />
            <label>Password:</label>
            
          </div> <br></br><br></br>
          <div className='remember-forgot'>
                      <label>
                          <input type='checkbox' />
                            I agree to the terms & conditions.
                      </label>     
                          
                  </div>
          
          <button type='submit' className='btn'>Register</button>
                  <div className='login-register'>
            <p>Already have an account <a href='#' className='login-link'>Login</a></p>
            
                  </div>
          </form>
      </div>
    </div>
  )
}

export default Main

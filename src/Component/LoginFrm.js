import React from 'react'
import './Style/LoginPage.scss'

export default function LoginFrm() {
  return (
    <div className='Login_frm'>
        <div className='frm_body'>
            <div className='frm_cont'> 
                <h3> Login your Account </h3>
                <form className='login_frm_con'>
                    <p>
                        <input className='input-field' type='email' placeholder='Username' required/>
                    </p>
                    <p>
                        <input className='input-field' type='password' placeholder='Password' required/>
                    </p>
                    <ul className='check-opt'>
                        <li><input type='checkbox'/> Remember me</li>
                        <li><a href='/resetPassword'> Lost your password ? </a></li>
                    </ul>
                    <button type='submit' className='login_btn'> Login </button>
                </form>
            </div>
        </div>
    </div>
  )
}

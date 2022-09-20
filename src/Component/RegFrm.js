import React from 'react'
import { Link } from 'react-router-dom'

export default function RegFrm() {
  return (
    
    <div className='Login_frm'>
        <div className='frm_body'>
            <ul className='frm_titles'>
                <li ><Link to='/user ' className='frm_title_btn'> Login </Link></li>
                <li ><Link to='/register ' className='frm_title_btn'> Our Register </Link></li>
            </ul>
            <div className='frm_cont'> 
                <h3> Register An Account </h3>
                <form className='login_frm_con'>
                    <p>
                        <input className='input-field' type='Username' placeholder='Username' required/>
                    </p>
                    <p>
                        <input className='input-field' type='email' placeholder='E-mail address' required/>
                    </p>
                    <p>
                        <input className='input-field' type='password' placeholder='Password' required/>
                    </p>
                    <ul className='check-opt'>
                        <p>
                            Your personal data will be used to support your experience throughout this website, 
                            to manage access to your account, and for other purposes described in ourprivacy policy.
                        </p>
                    </ul>
                    <button type='submit' className='login_btn'> Register </button>
                </form>
            </div>
        </div>
    </div>
    
  )
}
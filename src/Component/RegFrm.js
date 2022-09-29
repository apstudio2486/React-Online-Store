import React from 'react'

export default function RegFrm() {
  return (
    
    <div className='Login_frm'>
        <div className='frm_body'>
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
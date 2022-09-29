import React from 'react';
import { Link } from 'react-router-dom';
import './Style/UserOpt.scss';

export default function UserOpt () {
  return (
    <>
        <ul className='frm_titles'>
            <li><Link to='./login' className='frm_title_btn'> Login </Link></li>
            <li><Link to='./register' className='frm_title_btn'> Our Register </Link></li>
        </ul>
    </>
  )
}

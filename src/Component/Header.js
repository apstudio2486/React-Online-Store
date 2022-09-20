import React from 'react'
import { Link } from 'react-router-dom'
import './Style/Header.scss'
// import Menu from '../Component/Menu';
// import { render } from '@testing-library/react';

function Header() { 

  function showmenu(){
  //     let menubar = document.getElementById('menuShow');
  //     menubar = true;
  //     alert(menubar)
  }
//   if (showmenu == true) {
//         // render();
//         // return(<Menu/>  )      
    // }

  return (
   <>
    <div className='Header'>
        <div className='head-body container'>
            <div className='menu'>
                <span> <input className='search-box' type='text' placeholder='Search' /> <i className='fas fa-search'/> </span>
                <h2 className='title'> Online Store </h2>
                <ul className='menu-opt'>
                    <li><Link to='/user'><i className='far fa-user'/> </Link></li>
                    <li><Link to='/bookmark'><i className='far fa-bookmark'/></Link></li>
                    <li><Link to='/cart' onClick={showmenu}><i className='fas fa-shopping-cart'/></Link></li>
                    <li><Link onClick={showmenu}><i className='fas fa-bars' id='menuShow'/></Link></li>
                </ul>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Header
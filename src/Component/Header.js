import React from 'react'
import { Link } from 'react-router-dom'
import './Style/Header.scss'
import './Style/Menu.scss'


function Header() { 
    function openMenu() {
        const Menuclose = document.getElementById('menuClick');
        Menuclose.style.width = '100%';   
    }
    
    function closeMenu() {
        const Menuclose = document.getElementById('menuClick');
        Menuclose.style.width = '0';    
    }
    
  return (
   <>
    <div className='Header' id='sticky'>
        <div className='head-body container'>
            <div className='menu'>
                <span> <input className='search-box' type='text' placeholder='Search' /> <i className='fas fa-search'/> </span>
                <h2 className='title'> <Link href='/'> Online Store</Link> </h2>
                <ul className='menu-opt'>
                    <li><Link to='/profile'><i className='far fa-user'/> </Link></li>
                    <li><Link to='/bookmark'><i className='far fa-bookmark'/></Link></li>
                    <li><Link to='/cart'><i className='fas fa-shopping-cart'/></Link></li>
                    <li><Link onClick={openMenu}><i className='fas fa-bars'/></Link></li> 
                </ul>
            </div>
        </div>
    </div>
    {/* ========================== Menu Section Start =========================== */}
    
    <div className='Menu_sec' id='menuClick'>
        <div className='menu-body container'>
            <h2 className='cross'><i className='fas fa-times' onClick={closeMenu}/></h2>
            
            <ul className='menu-opt'>
                <li><a href='/'> Home </a> </li>
                <li><a href='/'> Products </a> </li>
                <li><a href='/'> Pages </a> </li>
                <li><a href='/'> Blogs </a> </li>
            </ul>
            <div className='add'>
                <div>
                    <h2># Conatct Us #</h2>
                    <div className='add-detail'>
                        <p>Add : 69 Halsey St, Ny 10002, New York, United States</p><br/>
                        <span> Email : </span>
                        <a href='mailto:support.center@helendo.co'> support.center@helendo.co </a><br/>
                        <span> Contact no : </span>
                        <a href='callto:+918547 632521'> (0091) 8547 632521 </a>
                    </div>
                    <div className='follow'>
                        <h3># Follow us on #</h3>
                        <a href='/'> <i className='fab fa-facebook-f'/> </a>
                        <a href='/'> <i className='fab fa-twitter' /> </a>
                        <a href='/'> <i className='fab fa-google' /> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Header
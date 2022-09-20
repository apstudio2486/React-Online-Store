import React from 'react'
import './Style/Menu.scss'

export default function Menu() {

    function closeMenu() {
        const closeMenu = document.getElementById('menu-click');
        closeMenu.style.width = 0;
        closeMenu.style.transition = 3;
        // closeMenu.style 
    }


  return (
    <div className='Menu' id='menu-click'>
        <div className='menu-body'>
            <h2 className='cross'><i className='fas fa-times' id='cross-close' onClick={closeMenu}/></h2>
            <ul className='menu-opt'>
                <li><a href='/'> Home </a> </li>
                <li><a href='/'> Products </a> </li>
                <li><a href='/'> Pages </a> </li>
                <li><a href='/'> Blogs </a> </li>
            </ul>
            {/* <i className='fas fa-sort-down'/>
                <i className='fas fa-sort-down'/>
                <i className='fas fa-sort-down'/>
                <i className='fas fa-sort-down'/> */}
            <div className='add'>
                <div>
                    <h2> Conatct Us </h2>
                    <div className='add-detail'>
                        <span>69 Halsey St, Ny 10002, New York, United States</span>
                        <a href='mailto:support.center@helendo.co'> support.center@helendo.co </a><br/>
                        <a href='callto:+918547 632521'> (0091) 8547 632521 </a>
                    </div>
                    <div className='follow'>
                        <h3> Follow us on </h3>
                        <a href='/' className='fab fa-facebook-f' />
                        <a href='/' className='fab fa-twitter' />
                        <a href='/' className='fab fa-google' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

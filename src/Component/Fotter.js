import React from 'react'
import './Style/Fotter.scss'

export default function Fotter() {
  return (
    <div className='Fotter'>
        <div className='foot-body'>
            <div className='sec_2'>
                <h4 className='sec_title'> Help & information </h4>
                <ul className='menu-opt'>
                    <li><a href='/'> Home </a></li>
                    <li><a href='/'> Products </a></li>
                    <li><a href='/'> Pages </a></li>
                    <li><a href='/'> Blogs </a></li>
                </ul>
            </div>
            <div className='sec_3'>
                <h4 className='sec_title'> About </h4>
                <ul className='last_opt'>
                    <li><a href='/'>Terms & condition</a></li>
                    <li><a href='/'>Policy</a></li>
                    <li><a href='/'>Map</a></li>
                </ul>
            </div>
            <div className='sec_1'>
                <form className='subscribe'>
                    <input type='email' className='search-box' placeholder='Enter Your Email id' />
                    <button type='submit' className='search-btn'> Subscribe </button>
                </form>
                <pre>
                    <h4 className='sec_title'> Address :</h4>
                    <ul className='Add'>
                        <li> <i className='fas fa-map-marker-alt'/> Helendo, Chicago, USA 2022 </li>
                        <li> <i className='fas fa-phone'/><a href='callto:+918547 632521'> (0091) 8547 632521 </a> </li>
                    </ul>
                    <div className='follow'>
                        <h4 className='sec_title'> Follow us on :</h4>
                        <i className='fab fa-facebook-f' />
                        <i className='fab fa-twitter' />
                        <i className='fab fa-google' />
                    </div>
                </pre>
            </div> 
        </div>
    </div>
  )
}

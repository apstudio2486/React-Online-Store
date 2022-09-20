import React from 'react';
import './Style/counter.scss';

export default function Counter() {
  return (
    <div className='counter'>
        <div className='container'>
            <div className='counter-body'>
                <div className='Counter-data'>
                    <h2 className='title'> Deco Collection <span>50% OFF</span> </h2>
                    <p className='detail'>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced for those. 
                        Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum
                    </p>
                    <div className='count'>
                        <ul className='count-list'>
                            <li><h3>73</h3><p>DAYS</p></li><span>:</span>
                            <li><h3>13</h3><p>HOURS</p></li><span>:</span>
                            <li><h3>11</h3><p>MINTS</p></li><span>:</span>
                            <li><h3>40</h3><p>SECS</p></li>
                        </ul>
                    </div>
                    <a href='/' className='shopeNow-btn'> Shope now <i className='fas fa-arrow-right'/></a>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

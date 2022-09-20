import React from 'react'
import './Style/SliderItem.scss'


export default function Slideitem(props) {
  return (
    <div className='SlideItem'>
        <div className='items-body'>
            <ul className='prod-view'>
                <li className='Image_efc'>
                    <img className='img_slide' alt='' src={props.pro_img} width="100%" />
                    <ul className='Hover_icone'>
                        <li><i className='img_hov_icone fas fa-plus'/></li>
                        <li><i className='img_hov_icone fas fa-shopping-bag'/></li>
                        <li><i className='img_hov_icone far fa-heart'/></li>
                    </ul>
                </li>
                <li>
                    <a href='/'> {props.pro_name} </a>
                </li>
                <li>
                    <p> {props.pro_prize}.00 </p>
                </li>

            </ul>
        </div>
    </div>
  )
}

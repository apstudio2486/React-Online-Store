// import React from 'react';
// import './Style/BlogList.scss';

// export default function BlogList(props) {
//   return (
//     <div className='BlogList'>
//         <div className='blog-detail'>
//             <ul className='blogList-detail'>
//                 <li>
//                     <img 
//                         src = {this.props.image_list}
//                         alt='' width='100%' 
//                     />
//                 </li>
//                 <li>
//                     <h3 className='blogitem-title'>{this.props.title_blog}</h3>
//                 </li>
//                 <li>
//                     <span>{this.props.date}</span> /
//                     <a href='/'> Admin </a> / in
//                     <a href='/'> deco </a> /
//                 </li>
//             </ul>
//         </div>
//     </div>
//   )
// }

import React, { Component } from 'react'
import './Style/BlogList.scss';

export default class BlogList extends Component {
  render() {
    return (
        <div className='BlogList'>
            <div className='blog-detail'>
                <ul className='blogList-detail'>
                    <li className='blog_img'>
                        <img
                            src = {this.props.image_list}
                            alt='Blog sec'
                            width='100%'
                        />
                    </li>
                    <li>
                        <a href='/' className='blogitem-title'>{this.props.title_blog}</a>
                    </li>
                    <li>
                        <span>{this.props.date}</span> /
                        <a href='/'> Admin </a> / in
                        <a href='/'> deco </a> /
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}


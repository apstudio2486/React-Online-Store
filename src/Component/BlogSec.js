import React from 'react';
import './Style/BlogSec.scss';
import BlogList from './BlogList';

import img_1 from './Image/374x243 (1).jpg';
import img_2 from './Image/374x243 (2).jpg';
import img_3 from './Image/374x243 (3).jpg';

export default function BlogSec(props) {
  return (
        <div className='BlogSec'>
            <div className='container'>
                <span className='blog_title'>
                    Our Blog
                </span>
                <div className='blogSet'>
                    <BlogList 
                        image_list = {img_1}
                        title_blog = "Unique products that will impress your home in 2022."
                        date = 'November 27, 2023'
                    />
                    <BlogList 
                        image_list = {img_2}
                        title_blog = "Navy Blue & White Striped Area Rugs "
                        date = 'November 25, 2023'
                    />
                    <BlogList 
                        image_list = {img_3}
                        title_blog = "Helendo White Coated Staircase Floating"
                        date = 'November 18, 2023'
                    />
                </div>
            </div>
        </div>
  )
}

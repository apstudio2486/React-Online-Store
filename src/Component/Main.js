import React from 'react';
import Slider from './Slider';
import './Style/Main.scss'
import ItemSlide from './ItemSlide';
import ProductList from './ProductList';
import Counter from './Counter';
import BlogSec from './BlogSec';

export default function Main() {
  return (
    <div className='Main'>    
        <Slider/>
        <ProductList/>
        <ItemSlide/>
        <Counter/>
        <BlogSec/>
    </div>
  )
}

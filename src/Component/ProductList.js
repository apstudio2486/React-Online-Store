import React from 'react'

import img_1 from './Image/nancy-chair.png'
import img_2 from './Image/table-wood-pine.png'
import img_3 from './Image/art-deco-home.png'
import ProductItem from './ProductItem'

export default function ProductList(props) {
  return (
    <div className='pro_item'>
        <ProductItem 
            image = {img_1}
            name='Nancy Chair' 
            prize='90'
            dtails='When an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
            />
        <ProductItem 
            image = {img_2}
            name='Table Wood Pine' 
            prize='50'
            dtails='Excepteur sint occaecat cupidatat non proident, sunt in culpaqui
                    officia deserunt mollit anim id est laborum.'
        />
        <ProductItem 
            image = {img_3}
            name='Art Deco Home' 
            prize='30'
            dtails='Many desktop publishing packages and web page editors now use
            Lorem Ipsum as their default model text, and a search for.'
        />
        
    </div>
  )
}

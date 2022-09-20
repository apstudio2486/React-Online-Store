import React from 'react'
import PageName from './PageName'
import './Style/Cart.scss'

export default function ViewCart() {
  return (
    <div className=''>
        <PageName pageName='Cart'/>
        <div className='cart_cont'>
            <div className='container'>
                <div className='cart_body'>
                    <table className='cart_table'>
                        <thead className='t_header'>
                            <tr>
                                <th>Product</th>
                                <th>Prize</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th colSpan={3}> Total Product </th>
                                <th> .. </th>
                            </tr>
                            
                        </thead>
                    </table>
                    <div className='btns_coupon'>
                        <div className='flex_sec'>
                            <a href='/' className='btn_black'><i className='fas fa-arrow-left'/> Continue Shoping </a>
                            <a href='/' className='btn_border'> Clear Cart </a>
                        </div>
                        <div className='flex_sec'>
                            <div className='coupon_sec'>
                                <div>
                                    <span>
                                        <h2> Coupon Discount </h2>
                                        <p>
                                            <span>Enter your coupon code if you have one.</span><br/>
                                            <input className='coupon_box' type='text' placeholder='Coupon Code' />
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className='total_box'>
                                <div>
                                    <ul className='totalBox_cont'>
                                        <li><h3>SubTotal : </h3><span> .. $ </span></li>
                                        <hr/>
                                        <li><h3>Total : </h3><span> .. $ </span></li>
                                    </ul>                                    
                                </div>
                            </div>
                        </div>
                        <div className='flex_sec'>
                            <a href='/' className='btn_border'> Apply Coupon Code </a>
                            <a href='/' className='btn_black'> Proced to checkout </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

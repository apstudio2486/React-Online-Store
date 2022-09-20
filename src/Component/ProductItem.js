import React, { Component } from 'react';
import './Style/ProductItem.scss'

export default class ProductItem extends Component {
    render() {
    return (
      <div className='pro_item'>
            <div className='container'>
                <div className='Items'>
                    <div className='pro-dtail'>
                        <div className='pro-img'>
                            <img 
                                src= {this.props.image}
                                alt=''
                            />
                        </div>
                        <div className='pro-content'>
                            <div className='pro-title'>
                                <p>FEATURED PRODUCT</p>
                                <h2><a className='pro-name' href='/'>{this.props.name}</a></h2>
                            </div>
                            <div className='item-dtail'>
                                <p>
                                    {this.props.dtails}
                                </p>
                                <a href='/' className='Buy-btn'> Only ${this.props.prize} <i className='fas fa-arrow-right'/> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

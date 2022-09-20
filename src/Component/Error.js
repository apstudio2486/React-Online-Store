import React, { Component } from 'react'
import './Style/Error.scss'

export default class Error extends Component {
  render() {
    return (
      <div className='ErrorPage'>
        <div className='container'>
            <div className='Error_cont'>
                <ul className='error_list'>
                    <li> <h2> {this.props.error_title} </h2> </li>
                    <li>  {this.props.error} </li>
                    <li>  {this.props.errorMsg} </li>
                    <li> <a href='/'> Back to Home </a> </li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

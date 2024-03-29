import React, { Component } from 'react'
import './Style/PageName.scss';

export default class PageName extends Component {
  render() {
    return (
      <div>
        <div className='PageName-page'>
            <div className='container'>
                <div className='login-cont'>
                    <h3 className='login-title'>
                        {this.props.pageName}
                    </h3>
                    <ul className='login-opt'>
                        <li>
                            <a href='/'> Home </a>
                        </li>/
                        <li>
                            <i> {this.props.pageName} </i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
};
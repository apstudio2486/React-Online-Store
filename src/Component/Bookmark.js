import React from 'react'
import PageName from './PageName'
import './Style/Bookmark.scss'
import Error from './Error'

export default function Bookmark(props) {
  return (
    <div>
        <PageName pageName='Bookmark'/>
        <div className='Bookmark'>
          <div className='container'>
            <div className='bookmark_content'>
                <Error 
                      error_title="🤕 Oops ! No data awaylabe 🤕"
                      error="It seems we can't find what you're looking for. Perhaps searching can help or go back"
                      errorMsg="We are working in this page so that reason we are not found it please try agin leter...!"
                />
            </div>
          </div>
        </div>
    </div>
  )
}
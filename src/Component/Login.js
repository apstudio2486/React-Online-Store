import React from 'react';
import { Route,Routes} from 'react-router-dom';
import RegFrm from './RegFrm';
import LoginFrm from './LoginFrm';
import PageName from './PageName';


export default function Login(props) {
  return (
    <div>
          <PageName pageName='Login'/>
          <LoginFrm/>
          <Routes>
            {/* <Route path='/user' element={<LoginFrm/>}></Route> */}
            <Route path='./register' element={<RegFrm/>}></Route>
          </Routes>
    </div>
  )
}

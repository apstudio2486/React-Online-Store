import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginFrm from './LoginFrm';
import { Outlet } from 'react-router-dom';
import RegFrm from './RegFrm';
import UserOpt from './UserOpt';   




export default function UserSetup(props) {
  return (
    <div>
      <UserOpt/>
      <Routes>
          <Route path='/' active element={<LoginFrm/>}/>
          <Route path='./register' element={<RegFrm/>}/>
      </Routes>
      <Outlet/>
    </div>
  )
}

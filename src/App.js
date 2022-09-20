import './App.scss';
import {Routes, Route} from "react-router-dom";
import Header from './Component/Header';
import Main from './Component/Main';
import Fotter from './Component/Fotter'
import Login from './Component/Login';
import Bookmark from './Component/Bookmark';
import Error from './Component/Error'
import RegFrm from './Component/RegFrm';
import ViewCart from './Component/ViewCart';


function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Main/>}></Route>  
        <Route path='/user' element={<Login/>}></Route>  
        <Route path='/register' element={<RegFrm/>}></Route>  
        <Route path='/bookmark' element={<Bookmark/>}></Route>  
        <Route path='/cart' element={<ViewCart/>}></Route>  
        <Route path='*' element={<Error 
                                  error_title="🤕 Oops ! page not found 🤕"
                                  error="It seems we can't find what you're looking for. Perhaps searching can help or go back"
                                  errorMsg="We are working in this page so that reason we are not found it please try agin leter...!"
                                />}>
        </Route>  
      </Routes>

      <Fotter/>
    </div>
  );
}

export default App;

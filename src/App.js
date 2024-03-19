import './App.scss';
import { Routes,Route } from "react-router-dom";
import Header from './Component/Header';
import Main from './Component/Main';
import Fotter from './Component/Fotter'
import UserSetup from './Component/UserSetup';
import Bookmark from './Component/Bookmark';
import Error from './Component/Error'
import ViewCart from './Component/ViewCart';


function App() {
  return (
    <div className="App">
      <Header id="header"/>
      <Routes>
          <Route exact path='/' element={<Main/>}/>  
          <Route path='/profile*' element={<UserSetup/>}/>
          <Route path='/bookmark' element={<Bookmark/>}/>  
          <Route path='/cart' element={<ViewCart/>}/>  
          <Route path='*' element={<Error 
                                    error_title="🤕 Oops ! page not found 🤕"
                                    error="It seems we can't find what you're looking for. Perhaps searching can help or go back"
                                    errorMsg="We are working in this page so that reason we are not found it please try agin leter...!"
                                  />} />
      </Routes>
      <Fotter/>
    </div>
  );
}

export default App;

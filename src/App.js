import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FormPage from './components/Form';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
   
   <div>
    <Router>
      <Routes>
        <Route path = "/" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path = "/registration" element={<Registration/>}/>
      </Routes>
      <Routes>
        <Route path = "/form" element={<FormPage/>}/>
      </Routes>
        
    </Router>
   </div>
  );
}

export default App;

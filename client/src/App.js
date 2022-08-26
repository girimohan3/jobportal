import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FormPage from './components/Form';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
   
   <div>
    <Router>
      <Home>
      <Routes>
        <Route path = "/" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path = "/registration" element={<Registration/>}/>
      </Routes>
      <Routes>
        <Route path = "/form" element={<FormPage/>}/>
      </Routes>
      </Home>
        
    </Router>
   </div>
  );
}

export default App;

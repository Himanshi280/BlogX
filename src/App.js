import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
   
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './componentes/home';
import Register from './componentes/register';
import Login from './componentes/login';
import Forgot from './componentes/forgot';
import Reset from './componentes/reset';
import Mainpage from './componentes/mainpage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/regi" element={<Register/>} />
          <Route path="/log" element={<Login/>} />
          <Route path="/forgot" element={<Forgot/>} />
          <Route path="/reset" element={<Reset/>} />
          <Route path="/main" element={<Mainpage/>} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

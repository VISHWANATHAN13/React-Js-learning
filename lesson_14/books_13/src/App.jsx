import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import {Provider} from 'react-redux';
import store from './app/Store';

const App = () => {
  return (

    <Provider store={store}>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route> 
        <Route path="/login" element={<Login />}>Login</Route> 
        <Route path="/settings" element={<Settings />}>Settings</Route> 
      </Routes>
    </BrowserRouter>
    </Provider>

  )
}

export default App;
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom';

import React from 'react';
import Home from './pages/Home';
import Users from './pages/Users';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/users/:username?' element={<Users />}></Route>
       <Route path='/contact' element={<Contact />}></Route>
       <Route path='/about' element={<About />}></Route>
       <Route path='*' element={<Error />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const AppRouter = () => {
  return (
    <div>
          <Routes>
              <Route path='/' element={<Home/> } />
              <Route path='/contact' element={< Contact/> } />
              <Route path='/navbar' element={<Navbar/> } />
      </Routes>
    </div>
  );
}

export default AppRouter;

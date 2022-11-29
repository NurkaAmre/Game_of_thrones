import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import NavBar from './components/NavBar';
import './App.module.css';
import Footer from './components/Footer';

import About from './pages/About';

const App = () => {
  (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={(
            <Characters />
        )}
        />
        <Route path="/characterlist/:characterdetail" element={<CharacterDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;

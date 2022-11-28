import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CharacterDetails from './pages/CharacterDetails';
import CharacterList from './pages/CharacterList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route
        path="/"
        element={(
          <CharacterList />
        )}
      />
      <Route path="/country/:countryinfo" element={<CharacterDetails />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </>

  );

export default App;

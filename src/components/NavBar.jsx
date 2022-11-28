import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <section className="navFlex">
      <p>
        <NavLink to="/">
          <button type='button'>&larr;</button>
        </NavLink>
      </p>
      <nav>
        <NavLink to="/">
          CharacterList
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
      </nav>
    </section>
  </>

);

export default NavBar;

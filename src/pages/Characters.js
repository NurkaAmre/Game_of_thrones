import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import fetchCharacters from '../redux/Dragons/fetchAPI';
import Hero from '../components/Hero';
import s from './Characters.module.css';

const Characters = () => {
  const [search, setSearch] = useState('');
  const characters = useSelector((state) => state.characters.characters);
  const status = useSelector((state) => state.characters.status);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCharacters());
  // });

  const showChar = () => {
    if (status === 'loading') {
      return <div><p className="message">Loading...</p></div>;
    }

    if (status === 'failed') {
      return <div><p className="failMessage">Sorry, Try again later</p></div>;
    }
    return (
      <ul className={s.Grid}>
        {// eslint-disable-next-line consistent-return, array-callback-return
          characters.map((val) => {
            if (search === '') {
              return val;
            } if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          }).map((character, index) => (
            <NavLink
              key={character.name}
              to={{
                pathname: '/country/countryinfo',
                search: character.name,
              }}
              state={character}
            >
              <li id={index} className={s.characterContainer} aria-hidden="true">
                <img
                  id={index}
                  key={character.lastName}
                  src={character.image}
                  alt={`${character.lastName}`}
                  height="100"
                  width="150"
                />
                <p id={index} className={s.characterName}>{character.name}</p>
              </li>
            </NavLink>
          ))
        }
      </ul>
    );
  };

  return (
    <main>
      <Hero />
      <input type="text" placeholder="Search characters" className={s.search} onChange={(e) => setSearch(e.target.value)} />
      <section>
        <section className={s.characters}>
          {showChar()}
        </section>
      </section>
    </main>
  );
};

export default Characters;

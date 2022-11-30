import React from 'react';
import { useLocation } from 'react-router-dom';
import s from './CharacterDetails.module.css';

const CharacterDetails = () => {
  const character = useLocation().state;
  const {
    firstName, lastName, fullName, title, family, imageUrl,
  } = character;

  return (
    <>
      <section className={s.infoContainer}>
        <div className='s.image-section'>
          <img src={imageUrl} alt="character img" height="500" width="300" className={s.img} />
        </div>
        <div className='s.info-section'>
          <ul className={s.infoList}>
            <li>
              <p>First Name: <span className={s.span}>{firstName}</span></p>
            </li>
            <li>
              <p>Last Name: <span className={s.span}>{lastName}</span></p>
            </li>
            <li>
              <p>Full Name: {fullName}</p>
            </li>
            <li>
              <p>Title: {title}</p>
            </li>
            <li>
              <p>Family: {family}</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CharacterDetails;

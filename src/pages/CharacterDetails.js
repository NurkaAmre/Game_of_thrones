import React from 'react';
import { useLocation } from 'react-router-dom';
import s from './CharacterDetails.module.css';

const CharacterDetails = () => {
  const character = useLocation().state;
  const {
    firstName, lastName, fullName, title, family, image,
  } = character;

  return (
    <>
      <section className={s.infoContainer}>
        <img src={image} alt="country flag" height="200" width="300" className={s.flag} />
        <ul className={s.infoList}>
          <li>
            <p>First Name:</p>
            {' '}
            <span>{firstName}</span>
          </li>
          <li>
            <p>Last Name:</p>
            {' '}
            <span>{lastName}</span>
          </li>
          <li>
            <p>Full Name:</p>
            {' '}
            <span>{fullName}</span>
          </li>
          <li>
            <p>Title:</p>
            {' '}
            <span>{title}</span>
          </li>
          <li>
            <p>Family:</p>
            {' '}
            <span>{family}</span>
          </li>
          <li>
            <p>Image: </p>
            {' '}
            <span>{image}</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default CharacterDetails;
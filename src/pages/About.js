import React from 'react';

import s from './About.module.css';

const About = () => (
  <>
    <section className={s.about}>
      <h2>
        Game Of || Thrones
      </h2>
      <p>
        Game of Thrones is an American fantasy drama television series created by David Benioff and
        D.B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire,
        a series of fantasy novels
        by George R.R. Martin, the first of which is A Game of Thrones.
        The show was shot in the United Kingdom,
        Canada, Croatia, Iceland, Malta, Morocco, and Spain.
        It premiered on HBO in the United States on April 17,
        2011, and concluded on May 19, 2019,
        with 73 episodes broadcast over eight seasons.
      </p>

      <div className={s.iconsContainer}>
        <label className='label'>Choose a season:</label>
        <select name="seasons" id="seasons">
          <option value="season1">Season 1</option>
          <option value="season1">Season 1</option>
          <option value="season1">Season 1</option>
          <option value="season1">Season 1</option>
          <option value="season1">Season 1</option>
          <option value="season1">Season 1</option>
          <option value="season1">Season 1</option>
          <option value="season1">Season 1</option>
        </select>
      </div>
    </section>
  </>
);

export default About;

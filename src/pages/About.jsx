import React from 'react';

const About = () => (
  <>
    <section className="about">
      <h2>
        About
      </h2>
      <p>
        This is a project created with React, Redux and
        {' '}
        <a href="https://thronesapi.com/">REST countries API.</a>
      </p>
      <p>
        Do you want to learn about how the project works or you just want to say hi?
        Feel free to reach out on my social media:
      </p>
      <div className="iconsContainer">
        <a href="https://twitter.com/AmreNurgul">Twitter</a>
        <a href="https://www.linkedin.com/in/amre-nurgul/">Linkedin</a>
        <a href="https://github.com/NurkaAmre">GitHub</a>
      </div>
    </section>
  </>
);

export default About;

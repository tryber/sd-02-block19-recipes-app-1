import React from 'react';
import propTypes from 'prop-types';

const Instructions = ({ instructions }) => {
  return (
    <section className="instructions-section">
      <h2>Instructions</h2>
      <p className="gray">{instructions}</p>
    </section>
  );
}

Instructions.propTypes = {
  instructions: propTypes.string.isRequired,
}

export default Instructions;

import React from 'react';

import './StarWars.css';

const Character = props => {
  return (
    <div className='character-card'>
      <h2>{props.starwarsChar.name}</h2>
      <p>Born: {props.starwarsChar.birth_year}</p>
      <p>Gender: {props.starwarsChar.gender}</p>
      <p>Height: {props.starwarsChar.height}cm</p>
      <p>Weight: {props.starwarsChar.mass}kg</p>
    </div>
  );
}

export default Character;

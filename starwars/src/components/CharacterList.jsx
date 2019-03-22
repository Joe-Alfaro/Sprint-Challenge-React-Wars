import React from 'react';

import Character from './Character.jsx'

const CharacterList = props => {
  return (
    <div className="character-list">
      {props.starwarsChars.map(starwarsChar =>(
        <Character starwarsChar={starwarsChar}/>
      ))}
    </div>
  );
}

export default CharacterList;

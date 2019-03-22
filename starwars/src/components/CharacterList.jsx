import React from 'react';

const CharacterList = props => {
  return (
    <div className="character-list">
      {props.starwarsChars.map(character =>(
        <h2>{character.name}</h2>
      ))}
   </div>
  );
}

export default CharacterList;

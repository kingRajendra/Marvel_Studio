import React, { useState, useEffect } from 'react';

function Characters({ match }) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const { characterId } = match.params;
    const API_KEY = 'fb6ec927d41b6c771a97de92e80173fd';
    const API_ENDPOINT = `https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=${API_KEY}`;

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(data => setCharacter(data.data.results[0]));
  }, [match.params]);

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <p>{character.description}</p>
    </div>
  );
}

export default Characters;
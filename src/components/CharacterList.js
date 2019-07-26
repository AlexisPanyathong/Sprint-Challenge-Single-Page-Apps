import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from "./CharacterCard";
import ImageCard from "./ImageCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    //handle success
    .then(response => {
      console.log(`rickandmorty api`, response.data);

      setCharacters(response.data.results);
    });
  }, []);
  console.log(characters);

  return (
      <section className='character-list grid-view'>

      <h2>TODO: `array.map()` over your state here!</h2>

      {characters.map(character => (
      // <ImageCard key={character.url} imgUrl={character.url}/>
        <CharacterCard key={character.name} info={character}/>
      ))}
    </section>
  );
}

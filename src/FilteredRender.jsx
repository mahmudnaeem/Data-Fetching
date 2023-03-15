import { useEffect } from 'react'
import React from "react"
import axios from "axios"
import CharDetails from "./CharDetails";

export default function FilteredRender({ searching, searchTerm, characters, setCharacters, searchKey, error, setError}) {
    

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/?${searchKey}=${searchTerm}`)
        .then(response => 
          setCharacters(response.data.results),
          error => setError(error),
        );
    }, [searchKey, searching]);
    
    
  
    return <CharDetails data={characters} />;
  }

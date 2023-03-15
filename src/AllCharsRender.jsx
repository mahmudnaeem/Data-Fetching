import { useEffect } from 'react'
import React from "react"
import axios from "axios"
import CharDetails from "./CharDetails"

export default function AllCharsRender({ characters, setCharacters, setSearching }) {
    // const [characters, setCharacters] = useState([])
  
    useEffect(() => {
      axios.get("https://rickandmortyapi.com/api/character")
        .then(chars => {
          setCharacters(chars.data.results),
          setSearching(false)

        })
    }, [])
    
    return <CharDetails data={characters} />
  }
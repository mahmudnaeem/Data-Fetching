import { useState } from 'react'
import React from "react"
import axios from "axios"
import {ErrorBoundary} from 'react-error-boundary'
import SearchByFilter from './SearchForm'
import FilteredRender from './FilteredRender'

import AllCharsRender from './AllCharsRender'



function ErrorFallback({error, resetErrorBoundary}) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
      
    )
    
  }



function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [characters, setCharacters] = useState([])
  const [searchKey, setSearchKey] = useState("name")
  const [error, setError] = useState(null)
 

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const onOptionChange = e => {
    setSearchKey(e.target.value)
  }

  function handleSearch() {   
        axios.get(`https://rickandmortyapi.com/api/character/?${searchKey}=${searchTerm}`)
        .then(response => 
          setCharacters(response.data.results),
          error => setError(error)
      );
}


  return (
    <div>
      <div className='header'>
            <h1>Rick and Morty Characters</h1>
            <SearchByFilter handleSearchTerm={handleSearchTerm} searchTerm={searchTerm}  searchKey={searchKey}  onOptionChange={onOptionChange} handleSearch={handleSearch}/>
      </div>
      <div className="content">
       <ErrorBoundary error={error} setError={setError}
                FallbackComponent={ErrorFallback}
                onReset={() => {<AllCharsRender characters={characters} setCharacters={setCharacters} />}}>

                <FilteredRender searchTerm={searchTerm} characters={characters} setCharacters={setCharacters}  searchKey={searchKey} error={error} setError={setError}/>
        </ErrorBoundary>

      </div>
    </div>
  )
}

export default App





// App
// InputBox
// SearchCharList
//   CharacterCard
// AllCharacterList
//   CharacterCard
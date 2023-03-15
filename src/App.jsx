import {  useState } from 'react'
import React from "react"
import {ErrorBoundary} from 'react-error-boundary'
import SearchByFilter from './SearchForm'
import FilteredRender from './FilteredRender'
import AllCharsRender from './AllCharsRender'





// function ErrorFallback({error, resetErrorBoundary}) {
//     return (
//       <div role="alert">
//         <p>Something went wrong:</p>
//         <pre>{error.message}</pre>
//         <button onClick={resetErrorBoundary}>Try again</button>
//       </div>
//     )
//   }


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [characters, setCharacters] = useState([])
  const [searchKey, setSearchKey] = useState("name")
  const [searching, setSearching] = useState(false)
  const [error, setError] = useState(null)
 

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const onOptionChange = e => {
    setSearchKey(e.target.value)
  }

  function handleSearch() {
    setSearching(true);

    
}


  return (
    <div>
      <div className='header'>
        <h1>Rick and Morty Characters</h1>

        <SearchByFilter handleSearchTerm={handleSearchTerm} searchTerm={searchTerm}  searchKey={searchKey}  onOptionChange={onOptionChange} handleSearch={handleSearch}/>
        
      </div>
      
      <div className="content">
        {
          searchTerm.length > 0 && searching ? (
            // <ErrorBoundary error={error} setError={setError}
            //     FallbackComponent={ErrorFallback}

            //     onReset={() => {<AllCharsRender characters={characters} setCharacters={setCharacters} />}}>
                    
                <FilteredRender searching={searching} setSearching={setSearching} searchTerm={searchTerm} characters={characters} setCharacters={setCharacters}  searchKey={searchKey} error={error}/>

            // </ErrorBoundary>

          ) : (
            <AllCharsRender characters={characters} setCharacters={setCharacters} setSearching={setSearching}/>
          )
        }
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
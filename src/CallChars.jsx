import { useEffect, useState } from 'react'
import React from "react"
import axios from "axios"


function RenderChars({ image, name, status, species, gender }) {
  return (
    <div className="card">
      <img src={image} />
      <div className="container">
        <h4><b>Name: {name.toUpperCase()}</b></h4>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  )
}

function FilteredRender({ searching, searchTerm, characters, setCharacters, searchKey}) {
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?${searchKey}=${searchTerm}`)
      .then((response) => {
        setCharacters(response.data.results);
      });
  }, [searchKey, searching]);
  
  

  return <CharDetails data={characters} />;
}


function SearchByFilter({ handleSearchTerm, searchTerm, searchKey, onOptionChange, handleSearch }) {

  return (
    <div className="search-area">
        <div className='input-area'>
            <input
                type="text"
                placeholder="Search by name/status/gender/species"
                value={searchTerm}
                onChange={handleSearchTerm} />

            <button type='button' onClick={handleSearch}>Search</button>
        </div>
        <div className='filter-area'>
            <input
                type="radio"
                name="searchKey"
                value="name"
                id="name"
                checked={searchKey === "name"}
                onChange={onOptionChange}
            />
            <label htmlFor="name">Name</label>

            <input
                type="radio"
                name="searchKey"
                value="status"
                id="status"
                checked={searchKey === "status"}
                onChange={onOptionChange}
            />
            <label htmlFor="status">Status</label>

            <input
                type="radio"
                name="searchKey"
                value="species"
                id="species"
                checked={searchKey === "species"}
                onChange={onOptionChange}
            />
            <label htmlFor="species">Species</label>

            <input
                type="radio"
                name="searchKey"
                value="gender"
                id="gender"
                checked={searchKey === "gender"}
                onChange={onOptionChange}
            />
            <label htmlFor="gender">Gender</label>
        </div>
    </div>
  )
}


function CharDetails({ data }) {
  if (!data.length) {
    return (
      <h1>No Data Found</h1>
    )
  }

  return (
    data.map(elements => (
      <RenderChars
        key={elements.id}
        image={elements.image}
        name={elements.name}
        gender={elements.gender}
        status={elements.status}
        species={elements.species}
      />
    ))
  )
}

function AllCharsRender({ characters, setCharacters }) {
  // const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(chars => {
        setCharacters(chars.data.results)
      })
  }, [])
  
  return <CharDetails data={characters} />
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [characters, setCharacters] = useState([])
  const [searchKey, setSearchKey] = useState("name")
  const [searching, setSearching] = useState(false)

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  
  const onOptionChange = e => {
    setSearchKey(e.target.value)
  }

  function handleSearch() {
    setSearching(true);
}



  // console.log(searchKey)

  return (
    <div>
      <div className='header'>
        <h1>Rick and Morty Characters</h1>

        <SearchByFilter handleSearchTerm={handleSearchTerm} searchTerm={searchTerm}  searchKey={searchKey}  onOptionChange={onOptionChange} handleSearch={handleSearch}/>
        
      </div>
      
      <div className="content">
        {
          searchTerm.length > 0 && searching ? (
            <FilteredRender searching={searching} searchTerm={searchTerm} characters={characters} setCharacters={setCharacters}  searchKey={searchKey}/>
          ) : (
            <AllCharsRender characters={characters} setCharacters={setCharacters} />
          )
        }
      </div>
    </div>
  )
}

export default App



// App Compo 
// h1
// Input Box => State jodi True 
// if (inputChar) {
//   SearchCharList
// }
// AllCharacterList


// App
// InputBox
// SearchCharList
//   CharacterCard
// AllCharacterList
//   CharacterCard
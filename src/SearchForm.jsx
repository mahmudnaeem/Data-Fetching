

export default function SearchByFilter({ handleSearchTerm, searchTerm, searchKey, onOptionChange, handleSearch }) {

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
  
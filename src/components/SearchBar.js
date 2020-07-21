import React from 'react';

// Displays search component which includes text field, search button and sort list
const SearchBar = ({handleSearch, searchBook, handleSort}) => {
    return (
        <div className="search-container">
                <form onSubmit={searchBook}  className="search-fields">
                    <input onChange={handleSearch} type='text' className="search-box" placeholder="Enter a Book Title" />
                    <button type='submit' className='button button__search'>Search</button>
                    <select defaultValue='Sort' onChange={handleSort} className="search-filter">
                        <option value='Sort'>Sort</option>
                        <option value='Newest'>Newest</option>
                        <option value='Oldest'>Oldest</option>
                    </select>
                </form>
        </div>
    )
}

export default SearchBar;
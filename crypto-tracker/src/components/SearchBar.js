import React from 'react'

const SearchBar = (props) => {

    const handleInput = e => {
        props.handleSearch(e)
    }

    return (
        <div>
            <h1>Search a Currency</h1>
            <form>
                <input 
                type="text" 
                placeholder="Search" 
                onChange={handleInput}/>
            </form>
        </div>
    )
}

export default SearchBar

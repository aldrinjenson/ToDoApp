import React from 'react'
// eslint-disable-next-line
const Search = ({Search}) => {
    return (
        <div className='container'>
            <div className="search-bar">
                <div className="input-field">
                    <input type='search' onChange={(e)=>{Search(e.target.value)}} type="text" name="" id="search-box"/>
                    <label htmlFor="search-box">Search Todos</label>
                </div>
            </div>
        </div>
    )
}

export default Search

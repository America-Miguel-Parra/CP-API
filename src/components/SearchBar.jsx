import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchCP, setSearchCP] = useState('')

    const handleInputChange = (e) => {
        setSearchCP(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        onSearch(searchCP)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                className="form-control text-center p-3" 
                placeholder="Ingresa el código postal..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={searchCP}
                onChange={handleInputChange}
            />
            <button type="submit"
                className="btn btn-outline-secondary mt-3" >Buscar</button>
        </form>
    )
}

export default SearchBar;
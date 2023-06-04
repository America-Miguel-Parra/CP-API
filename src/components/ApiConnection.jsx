import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'

const ApiConnection = () => {
    const [zipCode, setZipCode] = useState([])

    const handleSearch = async (searchCP) => {
        const response = await fetch(`https://postali.app/codigo-postal/${searchCP}.json`)
        const data = await response.json()
        // console.log(data)
        setZipCode(data)
    }

    return (
        <>
            <div>
                <SearchBar
                    onSearch={handleSearch}
                />
            </div>

            {
                zipCode.map((details) => {
                    return (
                        <div className="container col-md-4 text-center">
                            <div className="card-body">
                                <h1>{details.d_codigo}</h1>
                                <p>{details.d_asenta}</p>
                                <p>{details.d_mnpio}</p>
                                <p>{details.d_estado}</p>
                                <p>{details.d_ciudad}</p>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}

export default ApiConnection
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
                        <div className="card text-center mt-5">
                            <div class="card-header">
                                <h1 className='card-title'>{details.d_codigo}</h1>
                            </div>
                            <div className="card-body">
                                <p className='card-title'>{details.d_tipo_asenta} - {details.d_asenta}</p>
                                <p className='card-title'>Zona - {details.d_zona}</p>
                                <p className='card-title'>Municipio - {details.d_mnpio}</p>
                                <p className='card-title'>Estado - {details.d_estado}</p>
                                <p className='card-title'>Cuidad - {details.d_ciudad}</p>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}

export default ApiConnection
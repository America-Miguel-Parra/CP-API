import React, { useEffect, useState } from 'react'

const ApiConnection = () => {
    const [zipCode, setZipCode] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://postali.app/codigo-postal/68375.json')
            const data = await response.json()
            // console.log(data)
            setZipCode(data)
        }
        getData();

    })

    return (
        <>
            {
                zipCode.map((details) => {
                    return (
                        <div>
                            <h1>{details.d_codigo}</h1>
                            <p>{details.d_asenta}</p>
                            <p>{details.d_mnpio}</p>
                            <p>{details.d_estado}</p>
                            <p>{details.d_ciudad}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ApiConnection
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

                        <div className="container col-md-4 text-center">
                            <div className="card-body">
                                <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Ingresa el código postal..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button className="btn btn-outline-dark" type="button" id="button-addon2">Buscar</button>
                                    <h1>{details.d_codigo}</h1>
                                    <p>{details.d_asenta}</p>
                                    <p>{details.d_mnpio}</p>
                                    <p>{details.d_estado}</p>
                                    <p>{details.d_ciudad}</p>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}

export default ApiConnection

import React, { useEffect, useState } from 'react'
import { getVehicles } from './VehicleService'
import VehicleItem from './VehicleItem'


function Vehicle() {
    let [vehicles, setVehicles] = useState([])

    useEffect(() => {
        getVehicles().then(data => {
            console.log(data)
            setVehicles(data)
        })
    }, [])



    return (

        <div>
        

            <div className="row row-cols-1 row-cols-md-4 g-1 pt-5 my-1">
                {/* Dispalying vehicle: Start */}

                {
                    vehicles.map((v) => {
                        return (
                            <VehicleItem
                                models={v.models}
                                type={v.type}
                                price={v.price}
                                licensePlate={v.licensePlate}
                                status={v.status}

                            />
                        )
                    })
                }
                {/* Dispalying vehicle :End */}
            </div>
        </div>
    )
}

export default Vehicle

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

          



         {/* Dispalying vehicle: Start */}
        <div class="row row-cols-1 row-cols-md-3 g-4">
        

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
import React, { useEffect, useState } from 'react'
import AdminVehicleForm from './AdminVehicleForm'
import { getVehicles } from '../Vehicle/VehicleService'
import AdminVehicleItem from './AdminVehicleItem'

function AdminVehicle() {


   let [adminVehicles, setAdminVehicles] = useState([])
   let [selectedAdminVahicle,setSelectedAdminvehicle]=useState(null)
  
      useEffect(() => {
          getVehicles().then(data => {
              console.log(data)
              setAdminVehicles(data)
          })
      }, [])

      const refreshVehicle=()=>{
        getVehicles().then(data=>{
          setAdminVehicles(data)
        })
        
      }


      // to see selected vehicle
      const handleSelectedAdminVehicle=(selectedVehicle)=>{
              setSelectedAdminvehicle(selectedVehicle);
              console.log("Handle",selectedAdminVahicle)

      }


  return (
    <div>
        {/* Form */}

            <AdminVehicleForm 
              onAddvehicle={refreshVehicle}
              selectedAdminVahicle={selectedAdminVahicle}
              onUpdateVehicle={refreshVehicle}
              
            />
        {/* Form */}
        
          {/* Dispalying vehicle: Start */}
          <div class="row row-cols-1 row-cols-md-3 g-4">
        

        {
            adminVehicles.map((v) => {
                return (
                    <AdminVehicleItem
                    models={v.models}
                    type={v.type}
                    price={v.price}
                    licensePlate={v.licensePlate}
                    status={v.status}
                    vehicle_link={v._links.self.href}
                    onDeleteVehicle={refreshVehicle}
                    // i am sending to this function to adminVehicleItem
                    onSelectVehicle={handleSelectedAdminVehicle}
                    // it is props of adminVehicleForm
                      />
                )
            })
        }
        {/* Dispalying vehicle :End */}
    </div>
</div>

      

  
  )
}

export default AdminVehicle
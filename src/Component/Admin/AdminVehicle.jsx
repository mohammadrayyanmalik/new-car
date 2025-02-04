import React, { useEffect, useState } from 'react'
import AdminVehicleForm from './AdminVehicleForm'
import { getVehicleAtoZ, getVehicles, getVehicleStatusAvailable, getVehicleStatusNotAvailable, getVehicleZtoA } from '../Vehicle/VehicleService'
import AdminVehicleItem from './AdminVehicleItem'

function AdminVehicle() {


   let [adminVehicles, setAdminVehicles] = useState([])
   let [selectedAdminVahicle,setSelectedAdminvehicle]=useState(null)
   let [searchQuery, setSearchQuery] = useState("");
  
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

      // to sort data

      const sort=async(choice)=>{
        switch(choice)
        {
          case 1:
            setAdminVehicles(await getVehicleAtoZ())
            break;
            case 2:
              setAdminVehicles(await getVehicleZtoA())
              break;
        }
      }


       // to sort data

       const sortStatus=async (status)=>{
        setAdminVehicles(await getVehicleStatusAvailable(status))
       }


  return (
    <div>
        {/* Form */}

            <AdminVehicleForm 
              onAddvehicle={refreshVehicle}
              selectedAdminVahicle={selectedAdminVahicle}
              onUpdateVehicle={refreshVehicle}
              setSelectedAdminvehicle={setSelectedAdminvehicle}
              
            />
        {/* Form */}

        <div className="col">
            {/* Showing number of vehicles : start */}
            <button type="button" className=" numberOfVehicleButton">
              Number of Vehicles{" "}
              <span className="badge bg-primary" mb-3>
                {adminVehicles.length}
              </span>
            </button>
            {/* Showing number of Vehicles : end */}

            
        {/* sorting start */}
        <ul className="list-group sortinglist">
              <li
                className="list-group-item"
                onClick={() => {
                  sort(1)
                }}
              >
                A to Z
              </li>
              <li
                className="list-group-item"
                onClick={() => {
                  sort(2)
                }}
              >
                Z to A
              </li>
            </ul>
        {/* sorting end */}



        {/* sorting Status start*/}

        <ul className="list-group sortinglist">
              <li
                className="list-group-item"
                onClick={() => {
                  sortStatus("available")
                }}
              >
                Available
              </li>
              <li
                className="list-group-item"
                onClick={() => {
                  sortStatus("Not Available")
                }}
              >
                Not Avalable
              </li>
            </ul>
        {/* sort status end */}
     

         {/*==================================================== search :Start =============================*/}

         <div className="mb-3 searchQuery">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder='Search here'
                onChange={(e)=>{setSearchQuery(e.target.value)}}
              />
              
            </div>

            {/*======================================= Search :End======================================== */}
        
          {/* Dispalying vehicle: Start */}
          <div class="row row-cols-1 row-cols-md-3 g-4">
        

        {
            adminVehicles.filter(p=>{
              return p.models.toLowerCase()
              .includes(searchQuery.toLowerCase()) 
            }).map((v) => {
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
</div>

      

  
  )
}

export default AdminVehicle
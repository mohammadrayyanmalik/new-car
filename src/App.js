import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Body1 from './Component/Body1';
import Body2 from './Component/Body2';
import Body3 from './Component/Body3';
import Footer from './Component/Footer';
import Vehicle from './Component/Vehicle/Vehicle';
import Registration from './Component/Registration';
import Login from './Component/Login';
import LocationDetails from './Component/LocationDetails';
import AdminVehicleForm from './Component/Admin/AdminVehicleForm';
import AdminVehicle from './Component/Admin/AdminVehicle';




const route=createBrowserRouter([
  {
    path:"/",
    element:<>
    <Navbar/>
    <Header/>
    {/* <Body1/> */}
    <Body2/>
    <Body3/>
    <Footer/>
    </>
  },
  {
    path:"/vehicles",
    element:<>
    <Vehicle/>
    </>
  },
  {
    path:"/registration",
    element:<><Navbar/><Registration/></>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/locationDetails",
    element:<>
     <Navbar/>
    <LocationDetails/>
    <Footer/>
    </>
  },
  {
    path:"/vehicle-admin",
    element:<>
    <Navbar/>
   <AdminVehicle/>
    </>
  }
 
  
])

function App() {

  return (
    <div>
      <RouterProvider router={route} />

    </div>
  );
}

export default App;

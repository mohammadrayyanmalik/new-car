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
    path:"/vehicle",
    element:<>
    <Vehicle/>
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

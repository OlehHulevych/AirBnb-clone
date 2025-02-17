

import './App.css'

import {Route, Routes} from "react-router-dom";
import MainComponent from "./MainComponent.tsx";
import PropertyItem from "./Components/PropertyItem/PropertyItem.tsx";


function App() {
 

  return (
     <Routes>
       <Route path={"/"} element={<MainComponent/>}/>
         <Route path={"/property"} element={<PropertyItem/>}/>
     </Routes>
  )
}

export default App

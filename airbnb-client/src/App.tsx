

import './App.css'

import {Route, Routes} from "react-router-dom";
import MainComponent from "./MainComponent.tsx";


function App() {
 

  return (
     <Routes>
       <Route path={"/"} element={<MainComponent/>}/>
     </Routes>
  )
}

export default App


import './App.css'
import {Route, Routes} from "react-router-dom";
import MainComponent from "./MainComponent.tsx";
import PropertyItem from "./Components/PropertyItem/PropertyItem.tsx";
import ResultedPage from "./Components/PropertyByFilter/ResultedPage.tsx";


function App() {
 

  return (
     <Routes>
       <Route path={"/"} element={<MainComponent/>}/>
         <Route path={"/property"} element={<PropertyItem/>}/>
         <Route path = {"/searched"} element={<ResultedPage/>}/>
     </Routes>
  )
}

export default App

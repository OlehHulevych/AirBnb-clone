

import './App.css'
import Layout from "./Layout.tsx";
import Home from "./Components/Home/Home.tsx";

import ProperticeByArea from "./Components/ProperticeByAreaComponent/ProperticeByArea.tsx";
import PropertiecByClassification from "./Components/ProperticeByClassification/PropertiecByClassification.tsx";
import {FilterProvider} from "./context/FilterContext.tsx";
import LatestPropertyComponent from "./Components/LatestProprties/LatestPropertyComponent.tsx";


function App() {
 

  return (
      <FilterProvider>
    <Layout>
      <Home/>
        <ProperticeByArea/>
        <PropertiecByClassification/>
      <LatestPropertyComponent/>
    </Layout>
      </FilterProvider>
  )
}

export default App



import './App.css'
import Layout from "./Layout.tsx";
import Home from "./Components/Home/Home.tsx";

import ProperticeByArea from "./Components/ProperticeByAreaComponent/ProperticeByArea.tsx";
import PropertiecByClassification from "./Components/ProperticeByClassification/PropertiecByClassification.tsx";


function App() {
 

  return (
    <Layout>
      <Home/>
        <ProperticeByArea/>
        <PropertiecByClassification/>
    </Layout>
  )
}

export default App

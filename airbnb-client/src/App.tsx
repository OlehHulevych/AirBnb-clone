

import './App.css'
import Layout from "./Layout.tsx";
import Home from "./Components/Home/Home.tsx";

import ProperticeByArea from "./Components/ProperticeByAreaComponent/ProperticeByArea.tsx";


function App() {
 

  return (
    <Layout>
      <Home/>
        <ProperticeByArea/>
    </Layout>
  )
}

export default App

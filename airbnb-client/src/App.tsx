

import './App.css'
import Layout from "./Layout.tsx";
import Home from "./Components/Home/Home.tsx";
import Sidebar from "./Components/BurgerMenu/Sidebar.tsx";


function App() {
 

  return (
    <Layout>
        <Sidebar/>
      <Home/>
    </Layout>
  )
}

export default App


import {Row, Container, Col, Navbar, Nav} from "react-bootstrap"
import {useState, useContext} from "react";

import { FaHouseChimney } from "react-icons/fa6";
import BurgerIcon from "../BurgerMenu/BurgerIcon.tsx";
import Sidebar from "../BurgerMenu/Sidebar.tsx";
import { MainContext } from "../../context/MainContext.tsx";


export default function Header(){
    const {setOpen} = useContext(MainContext);
    const[opened, setOpened] = useState<boolean>(false);
  return(

      <Navbar className={"absolute z-100 flex w-full max-h-36 p-4  items-center justify-between border-solid border-white border-b-2"}>
          <Navbar.Brand className={"flex w-1/2 "}>
          <FaHouseChimney className={"text-6xl text-white mr-2"}/>
              <Col>
                 <h1 className={"text-white text-3xl font-roboto"}>AirBab</h1>
                  <h2 className={"text-white font-roboto"}>Real Estate</h2>
              </Col>
          </Navbar.Brand>
          <BurgerIcon open={opened} setOpened={setOpened} />
          <Navbar className={"w-1/2 max-[730px]:hidden"} id="basic-navbar-nav" >
              <Nav className={"flex justify-around"}>
                      <Nav.Link>Home</Nav.Link>
                      <Nav.Link>Area</Nav.Link>
                      <Nav.Link>Latest Properties</Nav.Link>
                      <Nav.Link>Contact Us</Nav.Link>  
              </Nav>
          </Navbar>
            <div  className="w-1/12 max-[730px]:mr-10 max-[730px]:w-1/8 ">
                <img onClick={()=>setOpen(true)} className= "w-1/2 rounded-full cursor-pointer max-[600px]:w-full  " src="./icons/user_placeholder.png" alt="" />
            </div>
          <Sidebar opened={opened}/>
      </Navbar>
    
  )
} 

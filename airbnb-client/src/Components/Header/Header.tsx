// @ts-ignore
import {Row, Container, Col, Navbar, Nav} from "react-bootstrap"
import {useState} from "react";

import { FaHouseChimney } from "react-icons/fa6";
import BurgerIcon from "../BurgerMenu/BurgerIcon.tsx";
import Sidebar from "../BurgerMenu/Sidebar.tsx";


export default function Header(){
    
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
          <Navbar className={"w-1/2 max-[600px]:hidden"} id="basic-navbar-nav" >
              <Nav className={"flex justify-around"}>
                      <Nav.Link>Home</Nav.Link>
                      <Nav.Link>Area</Nav.Link>
                      <Nav.Link>Latest Properties</Nav.Link>
                      <Nav.Link>Contact Us</Nav.Link>
              </Nav>
          </Navbar>
          <Sidebar opened={opened}/>
      </Navbar>
    
  )
} 

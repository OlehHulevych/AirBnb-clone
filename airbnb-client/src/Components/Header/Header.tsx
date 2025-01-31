// @ts-ignore
import {Row, Container, Col, Navbar, Nav} from "react-bootstrap"

import { FaHouseChimney } from "react-icons/fa6";
import BurgerIcon from "../BurgerMenu/BurgerIcon.tsx";


export default function Header(){
  return(

      <Navbar className={"fixed flex w-full max-h-36 p-4  items-center justify-between border-solid border-white border-b-2"}>
          <Navbar.Brand className={"flex w-1/2 "}>
          <FaHouseChimney className={"text-6xl text-white mr-2"}/>
              <Col>
                 <h1 className={"text-white text-3xl font-roboto"}>AirBab</h1>
                  <h2 className={"text-white font-roboto"}>Real Estate</h2>
              </Col>
          </Navbar.Brand>
          <BurgerIcon />
          <Navbar className={"w-1/2 max-[600px]:hidden"} id="basic-navbar-nav" >
              <Nav className={"flex justify-around"}>
                      <Nav.Link>Home</Nav.Link>
                      <Nav.Link>About us</Nav.Link>
                      <Nav.Link>Estates</Nav.Link>
                      <Nav.Link>Contact Us</Nav.Link>
              </Nav>
          </Navbar>
      </Navbar>
    
  )
} 

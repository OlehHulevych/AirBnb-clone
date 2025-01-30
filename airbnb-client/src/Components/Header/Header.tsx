// @ts-ignore
import {Row, Container, Col} from "react-bootstrap"
import { FaHouseChimney } from "react-icons/fa6";


export default function Header(){
  return(

      <Row className={"fixed flex w-full max-h-36 p-4  items-center justify-between border-solid border-white border-b-2"}>
          <div className={"flex "}>
          <FaHouseChimney className={"text-6xl text-white mr-2"}/>
              <Col>
                 <h1 className={"text-white text-3xl font-roboto"}>AirBab</h1>
                  <h2 className={"text-white font-roboto"}>Real Estate</h2>
              </Col>
          </div>
          <Col className={"text-white w-1/4"}>
              <nav >
                  <ul className={"flex justify-around"}>
                      <li>Home</li>
                      <li>About us</li>
                      <li>Estates</li>
                      <li>Contact Us</li>
                  </ul>
              </nav>
          </Col>
      </Row>
    
  )
} 

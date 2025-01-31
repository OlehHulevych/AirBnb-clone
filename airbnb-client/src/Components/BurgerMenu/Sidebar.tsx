import React from 'react';
import {Nav} from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";


const Sidebar = () => {
    return (
        <div className={"fixed top-0 right-0 w-1/2 min-h-screen bg-slate-400  "}>
            <Nav className={" flex flex-col text-white  pl-2"}>
                <div className={"flex h-1/2 items-center pt-2 mb-8"}>
                    <FaRegUserCircle className={"text-5xl"}/>
                    <div className={"ml-2"}>Username</div>
                </div>
                <Nav.Link className={"text-2xl mb-2 font-bold transform :scale-125  "}>Home</Nav.Link>
                <Nav.Link className={"text-2xl mb-2 font-bold  "}>About us</Nav.Link>
                <Nav.Link className={"text-2xl mb-2 font-bold  "}>Estates</Nav.Link>
                <Nav.Link className={"text-2xl mb-2 font-bold  "} >Contact Us</Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
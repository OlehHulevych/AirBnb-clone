
import {Nav} from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";

type props= {
    opened:boolean
}

const Sidebar = ({opened}:props) => {
    return (
        <>
        <div className={`fixed top-0 ${opened? "right-0": "-right-100"} w-full transition-all duration-175 z-100  max-w-[275px] min-h-screen bg-slate-400 hidden max-[600px]:block max-[400px]: w-1/2  `}>
            <Nav className={" flex flex-col text-white  pl-2"}>
                <div className={"flex h-1/2 items-center pt-2 mb-8"}>
                    <FaRegUserCircle className={"text-5xl"}/>
                    <div className={"ml-2 cursor-pointer"}>Username</div>
                </div>
                <Nav.Link className={"text-2xl mb-2 font-bold duration-500 transform hover:scale-130 hover:translate-x-10 max-[400px]: text-xl  "}>Home</Nav.Link>
                <Nav.Link className={"text-2xl mb-2 font-bold duration-500 transform hover:scale-130 hover:translate-x-10 max-[400px]: text-xl  "}>About us</Nav.Link>
                <Nav.Link className={"text-2xl mb-2 font-bold duration-500 transform hover:scale-130 hover:translate-x-10 max-[400px]: text-xl  "}>Estates</Nav.Link>
                <Nav.Link className={"text-2xl mb-2 font-bold duration-500 transform hover:scale-130 hover:translate-x-10 max-[400px]: text-xl  "} >Contact Us</Nav.Link>
            </Nav>
        </div>
            <div className={` ${opened? "w-full": "w-0"}  absolute transition-none    min-h-screen top-0 left-0 z-90 bg-black-50 bg-gray-950/75 `}>
            </div>
        </>
    
    );
};

export default Sidebar;
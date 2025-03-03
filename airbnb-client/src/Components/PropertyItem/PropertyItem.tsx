import Layout from "../../Layout.tsx";
import { FaCity } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { LuSquareArrowOutUpLeft } from "react-icons/lu";
import { FaWifi } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";
import { MdOutlinePets } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { TbToolsKitchen3 } from "react-icons/tb";
import Footer from "../Footer/Footer.tsx";
import {useState} from "react";
import { IoCloseSharp } from "react-icons/io5";
import PhotoProperties from "./PhotoProperties.tsx";
import InformationOfProperty from "./InformationOfProperty.tsx";
import DescriptionOfProperty from "./DescriptionOfProperty.tsx";
import DetailsOfProperty from "./DetailsOfProperty.tsx";




const PropertyItem = () => {
    
    const stockImages = [
        {
            id:0,
            url:"./stocks/big_image.jpg",
        },
        {
            id:1,
            url:"./stocks/small_image1.jpg",
        },
        {
            id:2,
            url:"./stocks/small_image2.jpg"
        },
        {
            id:3,
            url:"./stocks/big_image.jpg",
        },
        {
            id:4,
            url:"./stocks/small_image1.jpg",
        },
        {
            id:5,
            url:"./stocks/small_image2.jpg"
        }
    ]
    
    const [index, setIndex] = useState<number>(0)
    const [open, setOpen] = useState<boolean>(false);
    
    
    
    
    const nextPhoto =()=>{
        setIndex(index=>{
           if(index===stockImages.length+1) return 0
            return index+1
        })
    };
    const previousPhoto =()=>{
        setIndex(index=>{
            if(index===0) return stockImages.length-1
            return index-1;
        })
    };
    return (
        <Layout>
            <div className={"bg-slate-500 w-full min-h-screen flex flex-col pt-26 relative     "}>
                <PhotoProperties/>
                <InformationOfProperty/>
                <div className={"mt-4 px-20 text-white max-[595px]:px-10 max-[780px]:px-5"}>
                    <h2 className={"font-semibold text-3xl max-[470px]:text-2xl"}>Description</h2>
                    <DescriptionOfProperty/>
                    
                    <DetailsOfProperty/>
                    
                    <Footer/>
                    
                </div>
                {open &&  <div className={"w-full bg-gray-950/75 fixed min-h-screen top-0 z-200   "}>

                    <div onClick={()=>nextPhoto()} className={ "block w-[30px] h-[30px] border-solid border-r-white border-white border-r-3 border-b-3 top-[50%] left-[2%] absolute transform rotate-135 cursor-pointer hover:scale-115 hover:transition-all z-100"}></div>
                    <div onClick={()=>previousPhoto()} className={ "block w-[30px] h-[30px] border-solid border-r-white border-white border-r-3 border-b-3 top-[50%] right-[2%] absolute transform rotate-315 cursor-pointer hover:scale-115 z-100 hover:transition-all"}></div>
                    <div className={`w-full min-h-screen flex justify-between items-center   duration-400 ease-in-out relative  `}>
                        <IoCloseSharp className={"text-white text-6xl absolute top-2 right-5 cursor-pointer max-[600px]:text-4xl max-[600px]:top-10"}/>
                        <img className={` w-[70%]  h-[80%] absolute left-[15%] max-[850px]:h-[50%] max-[600px]:h-[40%] max-[600px]:w-[80%] max-[600px]:left-[10%] max-[400px]:h-[30%]   `} src={"./stocks/big_image.jpg"} alt=""/>
                    </div>
                </div>  }
                

                
            </div>
            
        </Layout>
    );
};

export default PropertyItem;
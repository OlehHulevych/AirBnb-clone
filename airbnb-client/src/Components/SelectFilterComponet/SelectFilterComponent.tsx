import {useContext, useState} from "react";
import {FilterContext} from "../../context/FilterContext.tsx";


const SelectFilterComponent = () => {
    const [openLocation, setOpenLocation]= useState<Boolean>(false)
    const [openPropertyType, setOpenPropertyType,] = useState<Boolean>(false)
    const [openRange, setOpenRange] = useState<Boolean>(false)
    
    const {location, setLocation,range, setRange, propertyType, setPropertyType  } = useContext(FilterContext)
   
    return (
        <div className={" absolute p-2 left-1/6 w-4/6 height-[600px] bg-white  z-100 flex py-10 -transform -translate-y-20 drop-shadow-xl"}>
            <div className={"border-r-2 border-solid border-slate-200 w-1/4 pl-4 relative"}>
                <div className={"mb-2 font-semibold text-xl"}>Locations</div>
                <div className={"flex "}>
                    <div className={"text-slate-400"}>Select your city</div>
                    <div onClick = {()=>setOpenLocation(!openLocation)} className={`border-b-2 border-r-2 border-solid border-black w-[10px] h-[10px] ml-3 transform rotate-45 translate-y-1 cursor-pointer ${openLocation?'rotate-225 translate-y-3':'rotate-45'} transition-all duration-100 ease-in-out`}></div>
                    <div className={`absolute w-full ${openLocation?'h-[250px]':'h-[0px]'}   bg-white top-[120%] -left-2 overflow-y-scroll overflow-x-hidden transition-all duration-200 ease-in-out`}>
                        <ul className={"pl-6 flex flex-col justify-around "}>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"} value={"Washington"}>Washington</li>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>New York</li>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>Ohio</li>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>Texas</li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
            
            <div className={"border-r-2 border-solid border-slate-200 w-1/4 pl-4 relative"}>
                <div className={"mb-2 font-semibold text-xl"}>Property type</div>
                <div className={"flex"}>
                    <div className={"text-slate-400"}>Select your city</div>
                    <div onClick = {()=>setOpenPropertyType(!openPropertyType)} className={`border-b-2 border-r-2 border-solid border-black w-[10px] h-[10px] ml-3 transform  translate-y-1 cursor-pointer ${openPropertyType?'rotate-225 translate-y-3':'rotate-45'} transition-all duration-100 ease-in-out`}></div>
                    <div className={`absolute ${openPropertyType?'h-[250px]':'h-[0px]'} w-full  bg-white top-[120%] -left-2 overflow-y-scroll overflow-x-hidden transition-all duration-200 ease-in-out`}>
                        <ul className={"pl-6 flex flex-col justify-around "}>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>Washington</li>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>New York</li>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>Ohio</li>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>Texas</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className={"border-r-2 border-solid border-slate-200 w-1/4 pl-4 relative"}>
                <div className={"mb-2 font-semibold text-xl"}>Rent Range</div>
                <div className={"flex"}>
                    <div className={"text-slate-400"}>Select your rent range</div>
                    <div onClick = {()=>setOpenRange(!openRange)}  className={`border-b-2 border-r-2 border-solid border-black w-[10px] h-[10px] ml-3 transform rotate-45 translate-y-1 cursor-pointer ${openRange?'rotate-225 translate-y-3':'rotate-45'} transition-all duration-100 ease-in-out`}></div>
                    <div className={`absolute w-full ${openRange?'h-[250px]':'h-[0px]'} bg-white top-[120%] -left-2 overflow-y-scroll overflow-x-hidden transition-all duration-200 ease-in-out`}>
                        <ul className={"pl-6 flex flex-col justify-around "}>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>Washington</li>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>New York</li>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>Ohio</li>
                            <li className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>Texas</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className={"w-1/4  tex-center  flex items-center"}>
                <button className={"py-2 font-semibold px-6 text-2xl text-white  mx-auto my-0 cursor-pointer bg-blue-800 rounded-lg hover:bg-blue-400 tansition-all duration-200"}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SelectFilterComponent;
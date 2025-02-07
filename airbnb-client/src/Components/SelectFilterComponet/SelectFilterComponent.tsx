import {useContext, useState} from "react";
import {FilterContext} from "../../context/FilterContext.tsx";
import { IoOptionsOutline } from "react-icons/io5";


const SelectFilterComponent = () => {
    const [openLocation, setOpenLocation]= useState<Boolean>(false)
    const [openPropertyType, setOpenPropertyType,] = useState<Boolean>(false)
    const [openRange, setOpenRange] = useState<Boolean>(false)
    const [type, setType] = useState<string>("Rent")
    const [mobileFilter, setMobileFilter] = useState<boolean>(false);
    
    // @ts-ignore
    const {location, setLocation,range, setRange, propertyType, setPropertyType  } = useContext(FilterContext)
   
    return (
        <>
            
        <div className={" absolute p-2 left-1/6 max-[890px]:left-1/10 w-4/6 max-[890px]:w-5/6 max-[645px]:w-full max-[645px]:left-0 height-[600px] bg-white  z-50 flex py-10 -transform -translate-y-20 drop-shadow-xl"}>
            
            <div className={" flex absolute -top-20 left-3/7"}>
                <div onClick={()=>setType("Rent")} className={`${type=="Rent"?"bg-blue-700 after:bg-blue-700":"bg-blue-500"} cursor-pointer text-center block w-[100px] h-[50px]   relative hover:bg-blue-300 hover:after:bg-blue-300 after:absolute after:w-[45px] after:h-[20px] after:bg-blue-500 after:block after:mt-10 after:left-6 after:-top-2 after:transform after:rotate-45 mr-2 `}>Rent</div>
                <div onClick={()=>setType("Buying")} className={`${type=="Buying"?"bg-blue-700 after:bg-blue-700":"bg-blue-500"} cursor-pointer text-center block w-[100px] h-[50px] bg-blue-500 relative hover:bg-blue-300 hover:after:bg-blue-300 after:absolute after:w-[45px] after:h-[20px] after:bg-blue-500 after:block after:mt-10 after:left-5 after:-top-2 after:transform after:rotate-45 `}>Sale</div>
            </div>
            <div className={"border-r-2 border-solid border-slate-200 w-1/4 pl-4 relative max-[520px]:hidden"}>
                <div className={"mb-2 font-semibold text-xl max-[890px]:text-lg max-[540px]:text-sm"}>Locations</div>
                <div className={"flex "}>
                    <div className={"text-slate-400 max-[710px]:text-sm"}>{location||"Select your city"}</div>
                    <div onClick = {()=>setOpenLocation(!openLocation)} className={`border-b-2 border-r-2 border-solid border-black w-[10px] h-[10px] max-[540px]:w-[7px] max-[540px]:h-[7px] ml-3 max-[890px]:ml-1  transform rotate-45 translate-y-1 cursor-pointer ${openLocation?'rotate-225 translate-y-3':'rotate-45'} transition-all duration-100 ease-in-out `}></div>
                    <div className={`absolute w-full ${openLocation?'h-[250px]':'h-[0px]'}   bg-white top-[120%] -left-2 overflow-y-scroll overflow-x-hidden transition-all duration-200 ease-in-out`}>
                        <ul className={"pl-6 flex flex-col justify-around "}>
                            <li onClick={(event)=>setLocation(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"} >Washington</li>
                            <li onClick={(event)=>setLocation(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>New York</li>
                            <li onClick={(event)=>setLocation(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>Ohio</li>
                            <li onClick={(event)=>setLocation(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>Texas</li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
            
            <div className={"border-r-2 border-solid border-slate-200 w-1/4 pl-4 relative max-[520px]:hidden"}>
                <div className={"mb-2 font-semibold text-xl max-[890px]:text-lg max-[540px]:text-sm"}>Property type</div>
                <div className={"flex"}>
                    <div  className={"text-slate-400 max-[710px]:text-sm "}>{propertyType || "Select Type"}</div>
                    <div onClick = {()=>setOpenPropertyType(!openPropertyType)} className={`border-b-2 border-r-2 border-solid border-black w-[10px] h-[10px] ml-3 max-[890px]:ml-2 transform  translate-y-1 cursor-pointer ${openPropertyType?'rotate-225 translate-y-3':'rotate-45'} transition-all duration-100 ease-in-out`}></div>
                    <div className={`absolute ${openPropertyType?'h-[250px]':'h-[0px]'} w-full  bg-white top-[120%] -left-2 overflow-y-scroll overflow-x-hidden transition-all duration-200 ease-in-out`}>
                        <ul className={"pl-6 flex flex-col justify-around "}>
                            <li onClick={(event)=>setPropertyType(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>House</li>
                            <li onClick={(event)=>setPropertyType(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>Flat</li>
                           

                        </ul>
                    </div>
                </div>
            </div>
            <div className={"border-r-2 border-solid border-slate-200 w-1/4 pl-4 relative max-[520px]:hidden"}>
                <div className={"mb-2 font-semibold text-xl max-[890px]:text-lg "}>{type=="Rent"?"Rent Range":"Price Range"}</div>
                <div className={"flex"}>
                    <div className={"text-slate-400 max-[710px]:text-sm"}>{range+"+"|| "Select range"}</div>
                    <div onClick = {()=>setOpenRange(!openRange)}  className={`border-b-2 border-r-2 border-solid border-black w-[10px] h-[10px] ml-3 transform rotate-45 translate-y-1 cursor-pointer ${openRange?'rotate-225 translate-y-3':'rotate-45'} transition-all duration-100 ease-in-out`}></div>
                    <div className={`absolute w-full ${openRange?'h-auto':'h-[0px]'} bg-white top-[120%] -left-2 overflow-y-scroll overflow-x-hidden transition-all duration-200 ease-in-out`}>
                        
                        {type=="Rent" && (
                            <ul className={"pl-6 flex flex-col justify-around "}>
                                <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>1000</li>
                                <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>5000</li>
                                <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>4000</li>
                                <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>5000</li>
                            </ul>
                            )}

                        {type=="Buying" && (
                            <ul className={"pl-6 flex flex-col justify-around "}>
                                <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>100000</li>
                                <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>500000</li>
                                <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>1000000</li>
                                <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2"}>2000000</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className={"w-1/4 max-[520px]:w-full flex items-center max-[520px]:text-center max-[520px]:justify-center "}>
                <IoOptionsOutline onClick = {()=>setMobileFilter(true)} className={"text-5xl mr-2 hidden max-[520px]:block cursor-pointer"}/>
                <button className={"py-2 font-semibold px-6 text-2xl text-white  mx-auto my-0 max-[520px]:mx-0  cursor-pointer bg-blue-800 rounded-lg hover:bg-blue-400 transition-all duration-200 max-[710px]:px-4 max-[710px]:text-xl"}>
                    Search
                </button>
            </div>
        </div>
            {mobileFilter && <div className={`   fixed w-full min-h-screen top-0 left-0 bg-white z-100 hidden max-[520px]:block pt-2 px-5  `}>
                <div className={" w-full  flex flex-col mb-5 "}>
                    <div className={"mb-2 font-semibold text-xl max-[890px]:text-lg max-[540px]:text-sm "}>Locations</div>
                    <div className={""}>
                        <div className={"flex w-full justify-between"}>
                            <div className={"text-slate-400 max-[710px]:text-sm "}>{location||"Select your city"}</div>
                            <div onClick = {()=>setOpenLocation(!openLocation)} className={`border-b-2 border-r-2 border-solid border-black w-[10px] h-[10px] max-[540px]:w-[10px] max-[540px]:h-[10px] max-[420px]:h-[7px] max-[420px]:w-[7px] ml-3 max-[890px]:ml-4 max-[420px]:ml-2   transform rotate-45 translate-y-1 cursor-pointer ${openLocation?'rotate-225 translate-y-3':'rotate-45'} transition-all duration-100 ease-in-out   `}></div>
                        </div>
                        <div className={` w-full ${openLocation?'h-auto':'h-[0px]'}   bg-white   overflow-y-scroll overflow-x-hidden transition-all duration-200 ease-in-out`}>
                            <ul className={" flex flex-col justify-around pt-3 "}>
                                <li onClick={(event)=>setLocation(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"} >Washington</li>
                                <li onClick={(event)=>setLocation(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>New York</li>
                                <li onClick={(event)=>setLocation(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>Ohio</li>
                                <li onClick={(event)=>setLocation(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>Texas</li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className={" w-full mb-4 "}>
                    <div className={"mb-2 font-semibold text-xl max-[890px]:text-lg max-[540px]:text-sm"}>Property type</div>
                    <div className={"w-full"}>
                        <div className={"flex w-full justify-between"}>
                            <div  className={"text-slate-400 max-[710px]:text-sm "}>{propertyType || "Select Type"}</div>
                            <div onClick = {()=>setOpenPropertyType(!openPropertyType)} className={`border-b-2 border-r-2 border-solid border-black w-[10px] h-[10px] ml-3 max-[890px]:ml-2 max-[420px]:h-[7px] max-[420px]:w-[7px] transform  translate-y-1 cursor-pointer ${openPropertyType?'rotate-225 translate-y-3':'rotate-45'} transition-all duration-100 ease-in-out`}></div>
                        </div>
                        <div className={` ${openPropertyType?'h-auto':'h-[0px]'} w-full  bg-white   overflow-y-scroll overflow-x-hidden transition-all duration-200 ease-in-out`}>
                            <ul className={" flex flex-col justify-around "}>
                                <li onClick={(event)=>setPropertyType(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>House</li>
                                <li onClick={(event)=>setPropertyType(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>Flat</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={" w-full  relative "}>
                    <div className={"mb-2 font-semibold text-base "}>{type=="Rent"?"Rent Range":"Price Range"}</div>
                    <div className={"w-full"}>
                        <div className={"flex w-full justify-between"}>
                            <div className={"text-slate-400 max-[710px]:text-sm "}>{range+"+"|| "Select range"}</div>
                            <div onClick = {()=>setOpenRange(!openRange)}  className={`border-b-2 border-r-2 border-solid border-black w-[10px] h-[10px] max-[420px]:h-[7px] max-[420px]:w-[7px] ml-3 transform rotate-45 translate-y-1 cursor-pointer ${openRange?'rotate-225 translate-y-3':'rotate-45'} transition-all duration-100 ease-in-out`}></div>
                        </div>
                        <div className={`w-full ${openRange?'h-[250px]':'h-[0px]'} bg-white  -left-2 overflow-y-scroll overflow-x-hidden transition-all duration-200 ease-in-out`}>

                            {type=="Rent" && (
                                <ul className={" flex flex-col justify-around "}>
                                    <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>1000</li>
                                    <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>5000</li>
                                    <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>4000</li>
                                    <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>5000</li>
                                </ul>
                            )}

                            {type=="Buying" && (
                                <ul className={" flex flex-col justify-around "}>
                                    <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>100000</li>
                                    <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>500000</li>
                                    <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>1000000</li>
                                    <li onClick={(event)=>setRange(event.currentTarget.textContent)} className={"text-lg font-semibold mb-2 text-slate-600 cursor-pointer transform duration-200 hover:scale-115 hover:translate-x-2 max-[420px]:text-base"}>2000000</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <button onClick = {()=>setMobileFilter(false)} className={"absolute bottom-1/4 left-5/12 py-2 font-semibold px-6 text-2xl text-white  mx-auto my-0 max-[520px]:mx-0  cursor-pointer bg-blue-800 rounded-lg hover:bg-blue-400 transition-all duration-200 max-[710px]:px-4 max-[710px]:text-xl"}>Save</button>
            </div> }
            
        </>
    );
};

export default SelectFilterComponent;
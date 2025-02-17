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



const PropertyItem = () => {
    return (
        <Layout>
            <div className={"bg-slate-500 w-full min-h-screen flex flex-col pt-26 relative   "}>
                <div className={"w-full flex"}>
                    <div className={`w-1/2 h-auto cursor-pointer after:w-full after:h-full relative after:content-[""] hover:after:bg-black after:absolute after:opacity-40 after:top-0 after:transition-all after:duration-300 after:ease-in-out `}>
                        <img className={"h-full w-full "} src="./stocks/big_image.jpg" alt=""/>
                    </div>
                    <div className={"w-1/2 flex flex-wrap "}>
                        <div className={`w-1/2 h-1/2 cursor-pointer after:w-full after:h-full relative after:content-[""] hover:after:bg-black after:absolute after:opacity-40 after:top-0 after:transition-all after:duration-300 ease-in-out `}>
                            
                            <img className={`w-full h-full `} src="./stocks/small_image1.jpg" alt=""/>
                            
                        </div>
                        <div className={`w-1/2 h-1/2 cursor-pointer after:w-full after:h-full relative after:content-[""] hover:after:bg-black after:absolute after:opacity-40 after:top-0 after:transition-all after:duration-300 ease-in-out `}>
                            <img className={"w-full h-full"} src="./stocks/small_image2.jpg" alt=""/>
                        </div>
                        <div className={`w-1/2 h-1/2 cursor-pointer after:w-full after:h-full relative after:content-[""] hover:after:bg-black after:absolute after:opacity-40 after:top-0 after:transition-all after:duration-300 ease-in-out`}>
                            <img className={`w-full h-full `} src="./stocks/small_image3.jpg" alt=""/>
                        </div>
                        <div className={`w-1/2 h-1/2 cursor-pointer after:w-full after:h-full relative after:content-[""] hover:after:bg-black after:absolute after:opacity-40 after:top-0 after:transition-all after:duration-200 ease-in-out`}>
                            <img className={"w-full h-full"} src="./stocks/small_image4.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className ={"w-full flex pt-6 px-20 justify-between max-[780px]:px-5 "}>
                    <div className={"w-1/2  px-4 text-white cursor-default max-[595px]:w-full   "}>
                        <h2 className={"font-semibold text-2xl "}>Entire chalet in Murau, Austria</h2>
                        <div className={"flex mt-2 "}>
                            <div className={"mr-2 text-lg"}>2 bedrooms</div>
                            <div className={"mr-2 text-lg"}>1 kitchen</div>
                        </div>
                        <div className={"flex mt-4 h-auto items-center"}>
                            <img className={"w-[10%] rounded-full mr-2 "} src="./icons/user_placeholder.png" alt=""/>
                            <div className={"text-base"}>Hosted by Burger</div>
                        </div>
                        <div className={"mt-4"}>
                            <div className={"flex mb-2 h-auto items-center"}>
                                <FaCity className={"text-4xl max-[470px]:text-2xl"}/>
                                <div className={"ml-2 text-lg "}>Near city center</div>
                            </div>
                            <div className={"flex h-auto items-center mb-2 "}>
                                <FaParking className={"text-4xl max-[470px]:text-2xl"}/>
                                <div className={"ml-2 text-lg"}>Near parking</div>
                            </div>
                            <div className={"flex h-auto items-center mb-2 "}>
                                <FaBus className={"text-4xl max-[470px]:text-2xl"}/>
                                <div className={"ml-2 text-lg"}>Near Bus Stop</div>
                            </div>
                        </div>
                    </div>
                    <div className={" max-h-[250px] bg-white items-center flex flex-col rounded-xl max-[900px]:h-auto  max-[595px]:w-full max-[595px]:fixed max-[595px]:bottom-0 max-[595px]:left-0 "}>
                        <div className={"text-2xl max-[780px]:text-xl "}>Price</div>
                        <div className={"text-4xl font-semibold text-green-700 max-[900px]:text-3xl max-[780px]:text-2xl "}>$ 40000000</div>
                        <button className={"w-2/3 px-8 py-2 bg-red-400 mt-2 rounded-xl cursor-pointer text-xl font-semibold text-white hover:bg-red-500 max-[900px]:w-1/2 max-[780px]:py-1 max-[685px]:w-[100px] "}>Visit</button>
                        <div className={"px-8 py-2 max-[990px]:px-2 max-[900px]:px-4 max-[780px]:px-2"}>
                            You take this property in mortgage for
                            <div className={"text-red-500 font-semibold"}>500$/month</div>
                        </div>
                    </div>
                </div>
                <div className={"mt-4 px-20 text-white max-[595px]:px-10 max-[780px]:px-5"}>
                    <h2 className={"font-semibold text-3xl max-[470px]:text-2xl"}>Description</h2>
                    <div className={"text-lg whitespace-pre-wrap mt-4 max-[780px]:text-base "}>
                        The apartment’s highlight is the spacious and bright living room, connected to a modern kitchen corner equipped with a kitchen unit and appliances (24.3 m²), with direct access to the balcony offering views of the modern surroundings and greenery. There are also 2 bedrooms (12.8 and 12.7 m²), a storage room (2.1 m²), a bathroom with a bathtub and space for a washing machine and dryer (5.4 m²), a separate toilet, and an entrance hall. The windows are plastic double-glazed with outdoor electric shutters on all windows. The floors are vinyl, with tiles in part of the apartment. The internet provider is the local L-Data or O2. The heating in the building is central gas with its own boiler room and radiators in the rooms. The building has an elevator. Monthly fees for the homeowners association + repair fund are CZK 5,718 + garage parking CZK 621, plus electricity advances based on consumption. The apartment does not have gas.

                        This is a sought-after, private location with good transportation accessibility and civic amenities, yet close to nature, making this project an attractive living option both for personal use and investment. A 5-minute walk from the building is the Blatnická bus stop, which will take you to the Zličín metro in 6 minutes. A children's playground is behind the building, and there are several kindergartens and elementary schools in the area. You’ll find grocery stores, restaurants, and basic services within walking distance. The Zličín Shopping Center is an 8-minute drive away, 6 minutes to the Řepy Shopping Center, and 10 minutes to Motol Hospital. The area is also traversed by a popular bike path to Lány in the Křivoklátsko region. We are happy to assist you with any mortgage arrangements for free. Please feel free to contact me for a personal tour. PENB: B

                        When contacting the real estate agency, please use the estate ID 50085041.

                        Parametry nemovitosti
                    </div>
                    
                    <div className={"w-full pt-6 flex justify-center items-center text-black "}>
                        <div className={"w-1/2 h-auto bg-white px-8 py-4 max-[780px]:w-full "}>
                            <div className={"w-full flex justify-between mb-5 border-b-2 border-solid pb-2"}>
                                <LuSquareArrowOutUpLeft className={"text-2xl "}/>
                                <div className={"text-xl"}>23.25 m²</div>
                            </div>
                            <div className={"w-full flex justify-between mb-2 border-b-2 border-solid pb-2"}>
                                <FaWifi className={"text-2xl "}/>
                                <div className={"text-xl"}>WI-FI</div>
                            </div>
                            <div className={"w-full flex justify-between mb-2 border-b-2 border-solid pb-2"}>
                                <CiTempHigh className={"text-2xl "}/>
                                <div className={"text-xl"}>Yes</div>
                            </div>
                            <div className={"w-full flex justify-between mb-2 border-b-2 border-solid pb-2"}>
                                <MdOutlinePets className={"text-2xl "}/>
                                <div className={"text-xl"}>Yes</div>
                            </div>
                            <div className={"w-full flex justify-between mb-2 border-b-2 border-solid pb-2"}>
                                <MdBedroomParent className={"text-2xl "}/>
                                <div className={"text-xl"}>2</div>
                            </div>
                            <div className={"w-full flex justify-between mb-2 border-b-2 border-solid pb-2"}>
                                <TbToolsKitchen3 className={"text-2xl "}/>
                                <div className={"text-xl"}>1</div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className={"w-full"}>
                    </div>
                    <Footer/>
                </div>
            </div>
        </Layout>
    );
};

export default PropertyItem;
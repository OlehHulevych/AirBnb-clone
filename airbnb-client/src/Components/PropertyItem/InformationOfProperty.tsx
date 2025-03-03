import { FaCity } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { FaBus } from "react-icons/fa";

const InformationOfProperty = () => {
    return (
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
    );
};

export default InformationOfProperty;
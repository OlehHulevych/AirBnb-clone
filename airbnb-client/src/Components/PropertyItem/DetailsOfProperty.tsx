
import {LuSquareArrowOutUpLeft} from "react-icons/lu";
import {FaWifi} from "react-icons/fa";
import {CiTempHigh} from "react-icons/ci";
import {MdBedroomParent, MdOutlinePets} from "react-icons/md";
import {TbToolsKitchen3} from "react-icons/tb";

const DetailsOfProperty = () => {
    return (
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
    );
};

export default DetailsOfProperty;
import { LuSquareArrowOutUpLeft } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdKitchen } from "react-icons/md";

const LatestPropertyItemComponent = () => {
    return (
        <div className={"w-[30%] h-auto bg-white pb-4 drop-shadow-xl mr-6 mt-4 max-[800px]:w-[42%] max-[550px]:w-[100%] "}>
            <div className={"mb-2 w-full"}>
                <img className={"w-full"} src="./stocks/Home_1.png" alt=""/>
            </div>
            <div className={"pt-4 px-4"}>
                <div className={"uppercase text-lg max-[600px]:text-base max-[550px]:text-lg "}>The beautiful House in Prague 4+1 </div>
                <div className={"flex mb-2"}>
                    <div className={"text-green-200 font-bold text-xl max-[850px]:text-lg mr-2"}>$</div>
                    <div className={"text-xl max-[850px]:text-lg"}>555,555</div>
                </div>
                <div className={"flex"}>
                    <LuSquareArrowOutUpLeft className={"text-2xl max-[850px]:text-xl mr-2"}/>
                    <div className={"text-xl max-[850px]:text-lg max-[550px]:text-lg "}>23.24</div>
                </div>
                <div className={"mt-2 w-full flex  "}>
                    <div className={" flex h-auto items-center mr-2"}>
                        <MdOutlineBedroomParent className={"text-xl mr-1 "}/>
                        <div className={"text-lg"}>4</div>
                    </div>
                    <div className={" flex h-auto items-center"}>
                        <MdKitchen className={"text-xl mr-1"}/>
                        <div className={"text-lg"}>1</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LatestPropertyItemComponent;
import { FaMapMarkerAlt } from "react-icons/fa";


const PropertyElementByArea = () => {
    return (
        <div style={{backgroundImage:`url('./Cities/Washington.png')`}} className={"block w-[30%] max-[800px]:w-[40%] border-2 border-black h-[200px] p-5  border-solid bg-no-repeat bg-cover  rounded-xl group ease-in cursor-pointer relative mb-6 mr-6 max-[600px]:w-full  "}>
                <div>
                    
                    <div className={"text-4xl text-white font-semibold group-hover:text-5xl transition-all duration-100 max-[820px]:text-2xl"}>Washington</div>
                    <div className={"text-xl text-white group-hover:text-2xl max-[820px]:text-lg"}>25 listings</div>
                </div>
            <FaMapMarkerAlt className={"absolute bottom-8 text-3xl transform text-white group-hover:scale-120 duration-120 transale-all"}  />
        </div>
    );
};

export default PropertyElementByArea;

type props = { 
    name:string,
    photo:string,
    subtext:string,
    
}
const PropertyCardItem = ({name,photo,subtext}:props) => {
    return (
        <div className={"w-1/4 height-30  pb-10 pt-6 px-5 hover:bg-white transition-all duration-300 ease-in-out max-[769px]:w-1/2 max-[430px]:w-full max-[430px]:text-center "}>
            <img className={"mb-8 max-[430px]:my-0 max-[430px]:mx-auto"} src={`./icons/${photo}`} alt=""/>
            <div>
                <div className={"text-2xl font-semibold mb-2 mb-8 "}>{name}</div>
                <p>{subtext}</p>
            </div>
        </div>
    );
};

export default PropertyCardItem;
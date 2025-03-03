

const PhotoProperties = () => {
    return (
        <div className={"w-full flex "}>
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
    );
};

export default PhotoProperties;
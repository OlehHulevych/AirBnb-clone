import PropertyElementByArea from "./PropertyElementByArea.tsx";


const ProperticeByArea = () => {
    return (
        <div className={ "w-full min-h-screen "} >
            <div className={"text-center pt-32"}>
                <h2 className={"text-5xl font-roboto font-semibold mb-4"}>Propertice by Area</h2>
                <p className={"text-xl"}>Select you dream house according your are, find property in the every town and wherever </p>
            </div>
            <div className={"w-full px-10 py-10 flex"}>
                <PropertyElementByArea/>
            </div>
        </div>
    );
};

export default ProperticeByArea;
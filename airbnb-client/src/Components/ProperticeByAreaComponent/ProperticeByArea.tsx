import PropertyElementByArea from "./PropertyElementByArea.tsx";
import SelectFilterComponent from "../SelectFilterComponet/SelectFilterComponent.tsx";


const ProperticeByArea = () => {
    return (
        <div className={ "w-full min-h-auto relative  "} >
            <SelectFilterComponent/>
            <div className={"text-center pt-32"}>
                <h2 className={"text-5xl font-roboto font-semibold mb-4 max-[680px]:text-3xl"}>Propertice by Area</h2>
                <p className={"text-xl max-[680px]:text-lg"}>Select you dream house according your area, find property in the every town and wherever </p>
            </div>
            <div className={"w-full px-10 py-10 flex flex-wrap justify-center max-[768px]:px-5   "}>
                <PropertyElementByArea/>
                <PropertyElementByArea/>
                <PropertyElementByArea/>
                <PropertyElementByArea/>
                <PropertyElementByArea/>
                <PropertyElementByArea/>
            </div>
        </div>
    );
};

export default ProperticeByArea;
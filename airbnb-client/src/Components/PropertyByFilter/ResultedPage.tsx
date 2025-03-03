import SelectFilterComponent from "../SelectFilterComponet/SelectFilterComponent.tsx";
import {FilterProvider} from "../../context/FilterContext.tsx";

import LatestPropertyItemComponent from "../LatestProprties/LatestPropertyItemComponent.tsx";

const ResultedPage = () => {
    
    return (
        <FilterProvider>
        <div className={"w-full min-h-screen relative pt-43"}>
            <SelectFilterComponent/>
            <div className={"w-full flex flex-wrap justify-between px-10 py-20"}>
                <LatestPropertyItemComponent/>
                <LatestPropertyItemComponent/>
                <LatestPropertyItemComponent/>
                <LatestPropertyItemComponent/>
                <LatestPropertyItemComponent/>
                <LatestPropertyItemComponent/> 
            </div>
        </div>
        </FilterProvider>
    );
};

export default ResultedPage;
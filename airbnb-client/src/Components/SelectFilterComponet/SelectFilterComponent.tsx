

const SelectFilterComponent = () => {
    return (
        <div className={" absolute p-2 left-1/6 w-4/6 height-[600px] bg-slate-400 z-100 flex py-10 -transform translate-y-2"}>
            <div className={"border-r-2 border-solid border-slate-200 w-1/4 pl-4"}>
                <div className={"mb-2"}>Locations</div>
                <div>Select your city</div>
            </div>
            <div className={"border-r-2 border-solid border-slate-200 w-1/4 pl-4"}>
                <div className={"mb-2"}>Locations</div>
                <div>Select your city</div>
            </div>
            <div className={"border-r-2 border-solid border-slate-200 w-1/4 pl-4"}>
                <div className={"mb-2"}>Locations</div>
                <div>Select your city</div>
            </div>
            <div className={"w-1/4 pl-4"}>
                <div className={"mb-2"}>Locations</div>
                <div>Select your city</div>
            </div>
        </div>
    );
};

export default SelectFilterComponent;
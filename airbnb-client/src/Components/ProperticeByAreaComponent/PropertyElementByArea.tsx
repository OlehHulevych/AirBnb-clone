import React from 'react';

const PropertyElementByArea = () => {
    return (
        <div style={{backgroundImage:`url('./Cities/Washington.png')`}} className={"block w-1/3 border-2 border-black h-[200px] p-5  border-solid bg-no-repeat bg-cover  rounded-xl group"}>
            <div >
                <div>
                    <div className={"text-4xl text-white font-semibold group-hover:text-5xl transition-all duration-100"}>Washington</div>
                    <div className={"text-xl text-white group-hover:text-2xl"}>25 listings</div>
                </div>
            </div>
        </div>
    );
};

export default PropertyElementByArea;
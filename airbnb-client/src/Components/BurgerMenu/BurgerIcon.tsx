import * as React from "react";


type props ={
    open:boolean,
    setOpened:React.Dispatch<React.SetStateAction<boolean>>
}
const BurgerIcon = ({open, setOpened}:props) => {
    
    return (
        <div onClick={()=>setOpened(!open)} className={"hidden max-[730px]:block absolute right-3 z-101"} >
            <div className={"border-2 border-white border-solid mb-2 w-[40px]"}></div>
            <div className={"border-2 border-white border-solid mb-2"}></div>
            <div className={"border-2 border-white border-solid mb-2"}></div>
        </div>
    );
};

export default BurgerIcon;
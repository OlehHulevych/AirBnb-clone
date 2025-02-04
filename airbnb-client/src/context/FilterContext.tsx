import {createContext, ReactNode, useState} from "react";

type ContextType = {
    location:string,
    setLocation:React.Dispatch<React.SetStateAction<string>>
    propertyType:string,
    setPropertyType:React.Dispatch<React.SetStateAction<string>>
    range:Number,
    setRange:React.Dispatch<React.SetStateAction<any>>
    
}



const  FilterContext = createContext<ContextType|undefined>(undefined)

interface providerProps{
    children:ReactNode
}

const FilterProvider:React.FC<providerProps> = ({children}) =>{
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("")
    const [range, setRange] = useState(0)
    
    return (
        <FilterContext.Provider value={{
            location:location,
            setLocation:setLocation,
            propertyType:propertyType,
            setPropertyType:setPropertyType,
            range:range,
            setRange:setRange
        }}>{children}</FilterContext.Provider>
    )
}

export {FilterProvider, FilterContext}
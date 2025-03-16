import {createContext, ReactNode, useState} from "react";

type ContextType = {
    open:boolean,
    registration:boolean,
    login:boolean,
    setLogin:React.Dispatch<React.SetStateAction<boolean>>
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    setRegistration:React.Dispatch<React.SetStateAction<boolean>>
}



const  MainContext = createContext<ContextType|undefined>(undefined)

interface providerProps{
    children:ReactNode
}

const MainProvider:React.FC<providerProps> = ({children}) =>{
    const [open, setOpen] = useState<boolean>(true);
    const [login,setLogin] = useState<boolean>(false);
    const [registration, setRegistration] = useState<boolean>(true)
    
    
    return (
        <MainContext.Provider value={{
            open:open,
            login:login,
            registration:registration,
            setRegistration:setRegistration,
            setLogin:setLogin,
            setOpen:setOpen
           
        }}>{children}</MainContext.Provider>
    )
}

export {MainProvider, MainContext}
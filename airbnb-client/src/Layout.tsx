
import Header from "./Components/Header/Header.tsx";
import { ReactNode} from "react";

type props = {
    children:ReactNode
}

const Layout = ({children}:props) => {
    return (
        <>
          <Header/>
            {children}
        </>
    );
};

export default Layout;
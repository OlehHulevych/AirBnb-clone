import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={"w-full h-auto flex py-4 items-center justify-center flex-col"}>
            
                <img  src="./icons/logo_footer.png" alt=""/>
                <div className={"mb-2"} >Call : +123 400 123</div>
                <div className={"mb-2 text-center"}> Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</div>
                <div className={"font-semibold"}>Email: example@mail.com</div>
                <div className={"flex pt-2  my-0 "}>
                    <a className={"text-lg block p-2 bg-slate-300 mr-2 transition-all hover:bg-slate-700 hover:text-white "} href="">
                        <FaFacebookF/>
                    </a>
                    <a className={"text-lg block p-2 bg-slate-300 mr-2 transition-all hover:bg-slate-700 hover:text-white"} href="">
                        <FaLinkedinIn/>
                    </a>
                    <a className={"text-lg block p-2 bg-slate-300 mr-2 transition-all hover:bg-slate-700 hover:text-white"} href="">
                        <FaInstagram/>
                    </a>
                </div>
           
            
        </div>
    );
};

export default Footer;
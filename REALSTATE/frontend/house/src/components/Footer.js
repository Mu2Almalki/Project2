import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";



function Footer (){
    return(
        <div className="Fotr">
            <hr></hr>
         <a href="https://www.instagram.com/"><BsInstagram/></a>
        <a href="https://www.facebook.com/"><AiOutlineFacebook/></a>
        <a href="https://web.telegram.org/k/" ><SiTelegram/></a>
        <hr></hr>
        </div>
    )
}



export default Footer;
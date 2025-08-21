
import { BsQrCodeScan } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";


const Header = ({title}) => {
return(
    <main className="header">
            <h1 className="headertitle">{title}</h1>
        <div className="buttons">
            <BsQrCodeScan className="headerbtn1" title="QR"/>
            <CiCamera className="headerbtn2" title="Camera"/>
            <IoMdMore className="headerbtn3" title="More Option"/>
        </div>
    </main>
)
}

export default Header;
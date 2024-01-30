import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const { loggedInUser, setUserName } = useContext(UserContext);

    return (
        <div className="flex justify-between">
            <div className="logo-container">
                <img className="w-20" alt="img"  src={LOGO_URL}>
                </img>
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-2">
                    <li className="px-4"><Link to='/'>Home</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"><Link to='/about'>About Us</Link></li>
                    <li className="px-4"><Link to='/contact-us'>Contanct Us</Link></li>
                    <button className="login px-4" onClick={()=> {
                        if (btnName === 'Login') {
                            setUserName("Anonymous User")
                            setBtnName('Logout')
                        }else{
                            setUserName("Ketan Suthar")
                            setBtnName('Login')
                        }
                    }}>{btnName}</button>
                    <li className="px-2 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;

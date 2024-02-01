import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [btnName, setBtnName] = useState('Login');
    const { loggedInUser, setUserName } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);


    return (
        <nav className="flex items-center justify-between flex-wrap pt-3 pl-2 pb-3 sticky top-0 z-50 bg-white">
            <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
                <img src="https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60" className="w-100 h-10 mr-2" alt="Logo" />
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
                <div className="text-sm lg:flex-grow">
                    <ul className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"><Link to='/'>Home</Link></li>
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"><Link to='/cart'>Cart({cartItems?.length})</Link></li>
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"><Link to='/about'>About Us</Link></li>
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"><Link to='/contact-us'>Contanct Us</Link></li>
                    {/* <button className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4" onClick={()=> {
                        if (btnName === 'Login') {
                            setUserName("Anonymous User")
                            setBtnName('Logout')
                        }else{
                            setUserName("Ketan Suthar")
                            setBtnName('Login')
                        }
                    }}>{btnName}</button>
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">{loggedInUser}</li> */}
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;

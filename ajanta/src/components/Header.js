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
        <nav className="flex items-center justify-between flex-wrap pt-3 pl-2 pb-3 sticky top-0 z-50 bg-white border-2 border-gray-100">
            <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
                <img className="w-100 h-10 mr-2" alt="Logo" src='https://4.bp.blogspot.com/-75Xd5SkWY1c/Vm43dVBUGxI/AAAAAAAADDQ/KedYDTymC7E/s1600/Ajanta%2BPainting%2BPadmapani%2B03.jpg' />
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
                <div className="text-sm lg:flex-grow text-[18px]">
                    <ul className="block mt-4 lg:inline-block lg:mt-0 text-white-200 ml-10">
                        <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7"><Link to='/'>Home</Link></li>
                        <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7"><Link to='/contact-us'>Contanct Us</Link></li>
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
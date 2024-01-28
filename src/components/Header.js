import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [btnName, setBtnName] = useState('Login')

    return (
        <div className="flex justify-between">
            <div className="logo-container">
                <img className="w-20" src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000">
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
                            setBtnName('Logout')
                        }else{
                            setBtnName('Login')
                        }
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;

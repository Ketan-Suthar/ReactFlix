import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [btnName, setBtnName] = useState('Login')

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000">
                </img>
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li>Cart</li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact-us'>Contanct Us</Link></li>
                    <button className="login" onClick={()=> {
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

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000">
                </img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Cart</li>
                    <li>About Us</li>
                    <li>Contanct Us</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo"
            alt="restaurant-logo"
            src="https://experience-fresh.panasonic.eu/wp-content/uploads/2018/12/Paneer-Tikka-Masala-head-banner-1.jpg"></img>
            <h3>Patang</h3>
            <h4>Noth Indian, Gujarati</h4>
            <h4>4.4 Stars</h4>
            <h4>30 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>

            <div className="restaurant-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
             {/* Header */}
             <Header />
             {/* Body */}
             <Body />
             {/* Footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);


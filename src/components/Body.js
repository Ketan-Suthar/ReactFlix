import RestaurantCard, { withNonVegLabel, withVegLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_HOME_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [resDataState, setResDataState] = useState([]);
    const [filteredResDataState, setFilteredResDataState] = useState([]);
    const [searchText, setSearchText] = useState("");
    const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_HOME_API, {"method": "GET"});
        
        const json = await data.json();
        let res = json.data.cards.filter(i => i?.card?.card?.id==="restaurant_grid_listing")[0]
        const restaurants = res?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResDataState(restaurants)
        setFilteredResDataState(restaurants)
    }

    const onlineStatus = useOnlineStatus();
    const VegCard = withVegLabel(RestaurantCard)
    const NonVegCard = withNonVegLabel(RestaurantCard)

    if(onlineStatus === false) {
        return (
            <h1>Looks like you are offline</h1>
        )
    }

    if (!resDataState || resDataState.length === 0) {
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black"
                        value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={()=>{
                        const result = resDataState.filter((i) => i.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        if(result && result.length > 0)
                            setFilteredResDataState(result);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="filter-btn px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => {
                        setFilteredResDataState(resDataState.filter((i) => i.info.avgRatingString >= 4.4));
                    }}>Top Restaurants
                    </button>
                </div>
                <div className="m-4 p-4  flex items-center">
                    <label>UserName <input type="text" className="border border-black p-2"
                                        value={loggedInUser} 
                                        onChange={(e) => setUserName(e.target.value)}/></label>
                </div>
            </div>

            <div className="restaurant-container flex flex-wrap">
                {
                    filteredResDataState?.map(
                        i => (
                           <Link key={i.info.id} to={"/restaurant/" + i.info.id}> 
                                {
                                    i?.info?.veg ? (<VegCard data={i} />) : (<NonVegCard data={i} />)
                                }
                           </Link>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Body;

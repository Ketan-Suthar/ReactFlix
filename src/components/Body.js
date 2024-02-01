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
            <div className="restaurant-container flex min-h-screen w-full flex-wrap content-center justify-between p-5 bg-gray-100">
                {
                    filteredResDataState?.map(
                        i => (
                           <Link key={i.info.id} to={"/restaurant/" + i.info.id}> 
                                <RestaurantCard data={i} />
                           </Link>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Body;

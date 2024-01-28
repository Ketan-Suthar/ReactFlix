import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_HOME_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [resDataState, setResDataState] = useState([]);
    const [filteredResDataState, setFilteredResDataState] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_HOME_API, {"method": "GET"});
        
        const json = await data.json();
        let res = json.data.cards.filter(i => i?.card?.card?.id==="restaurant_grid_listing")[0]
        const restaurants = res?.card?.card?.gridElements?.infoWithStyle?.restaurants
        console.log(restaurants)
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
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-btn" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        console.log(searchText);
                        const result = resDataState.filter((i) => i.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        if(result && result.length > 0)
                            setFilteredResDataState(result);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    console.log("button clicked");
                    setFilteredResDataState(resDataState.filter((i) => i.info.avgRatingString >= 4.4));
                }}>Top Restaurants</button>
            </div>

            <div className="restaurant-container">
                {
                    filteredResDataState && filteredResDataState.map(
                        i => (
                           <Link key={i.info.id} to={"/restaurant/" + i.info.id}> <RestaurantCard data={i}/> </Link>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Body;

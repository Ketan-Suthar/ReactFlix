import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resDataState, setResDataState] = useState([]);
    const [filteredResDataState, setFilteredResDataState] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
            "method": "GET",
          });
        
        const json = await data.json();
        let res = json.data.cards.filter(i => i?.card?.card?.id==="restaurant_grid_listing")[0]
        console.log(res?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setResDataState(res?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResDataState(resDataState)
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
                        i => (<RestaurantCard key={i.info.id} data={i}/>)
                    )
                }
            </div>
        </div>
    )
}

export default Body;

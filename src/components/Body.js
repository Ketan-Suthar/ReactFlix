import CategoryCard, { withNonVegLabel, withVegLabel } from "./CategoryCard";
import { useEffect, useState } from "react";
import { SWIGGY_HOME_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import CategoryCard from "./CategoryCard";

const Body = () => {
    const [resDataState, setResDataState] = useState([]);
    const [filteredResDataState, setFilteredResDataState] = useState([]);

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
        return <h1>Loading...</h1>
    }

    return (
        <div className="body">
            <div className="restaurant-container flex min-h-screen w-full flex-wrap content-center justify-between p-5">
                {
                    filteredResDataState?.map(
                        i => (<CategoryCard key={i.info.id} data={i} />)
                    )
                }
            </div>
        </div>
    )
}

export default Body;

import RestaurantCard from "./RestaurantCard";
import { zomato_data } from "../utils/mockData"
import { useState } from "react";

const Body = () => {
    let resData = [...zomato_data]
    const [resDataState, setResDataState] = useState(resData);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("button clicked");
                    setResDataState(resData.filter((i) => i.info.rating.aggregate_rating >= 4.0));
                }}>Top Restaurants</button>
            </div>

            <div className="restaurant-container">
                {
                    resDataState.map(
                        i => (<RestaurantCard key={i.info.resId} data={i}/>)
                    )
                }
            </div>
        </div>
    )
}

export default Body;

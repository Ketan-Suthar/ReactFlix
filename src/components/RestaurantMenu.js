import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = (props) => {
    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);

    if (!resData || resData == null) {
        return (<h1>Loading...</h1>);
    }

    let { name, cuisines} = resData?.data?.cards[0]?.card?.card?.info;
    cuisines = cuisines?.join(", ");
    let foodItems = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.
                    cards?.find((i) => "itemCards" in i?.card?.card)?.card?.card?.itemCards
    if (foodItems === undefined) {
        foodItems = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.
                        cards?.find((i) => "categories" in i?.card?.card)?.card?.card?.categories
    }
    console.log(foodItems);

    return (
        <div className="menu">
           <h1>{name}</h1>
           <h1>{cuisines}</h1>
           <h2>Menu</h2>
           <ul>
                {
                    foodItems && foodItems.map(element => {
                        return (
                            <li key={element?.card?.info?.id}>{element?.card?.info?.name} - RS {element?.card?.info?.price/100}</li>
                        )
                    })
                }
           </ul>
        </div>
    )
}

export default RestaurantMenu;

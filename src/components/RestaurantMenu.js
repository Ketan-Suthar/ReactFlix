import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = (props) => {
    const [showIndex, setShowIndex] = useState(0);

    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);

    if (!resData || resData == null) {
        return (<h1>Loading...</h1>);
    }

    let { name, cuisines} = resData?.data?.cards[0]?.card?.card?.info;
    cuisines = cuisines?.join(", ");
    let foodItems = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.
                    cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    return (
        <div className="text-center">
           <h1 className="font-bold my-6 text-2xl">{name}</h1>
           <p className="font-bold text-lg">{cuisines}</p>
           {
                foodItems && foodItems.map((element, ind) => {
                    return (
                        <RestaurantCategory 
                            data={element?.card?.card} 
                            showItems={showIndex === ind}
                            setShowIndex = {() => ind === showIndex ? 
                                setShowIndex(-1) : setShowIndex(ind)}
                        />
                    )
                })
            }
        </div>
    )
}

export default RestaurantMenu;

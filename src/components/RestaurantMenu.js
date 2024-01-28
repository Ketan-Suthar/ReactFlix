import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_RES_API } from "../utils/constants";

const RestaurantMenu = (props) => {
    const [resData, setResData] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let response = await fetch(SWIGGY_RES_API + resId);
        response = await response.json();
        // const groupedCard = response?.data?.cards?.filter((i) => "groupedCard" in i)[0]?.groupedCard
        // const cards = groupedCard?.cardGroupMap?.REGULAR?.cards;
        // const foodItems = cards?.filter((i) => "title" in i?.card?.card)
        // const burgerWraps = foodItems?.filter((i) => i?.card?.card?.title == 'Burgers & Wraps')[0]
        console.log(response);
        setResData(response)
    }

    if (!resData || resData == null) {
        return (<h1>Loading...</h1>);
    }

    let { name, cuisines} = resData?.data?.cards[0]?.card?.card?.info;
    cuisines = cuisines?.join(", ");
    let foodItems = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(foodItems);

    return (
        <div className="menu">
           <h1>{name}</h1>
           <h1>{cuisines}</h1>
           <h2>Menu</h2>
           <ul>
                {
                    foodItems.map(element => {
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

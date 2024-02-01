import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const { data } = props
    const { info } = data
    const couisine = data.info.cuisines.join(", ")
    return (
        <div className="m-4 p-4 w-52 restaurant-card bg-gray-100 hover:bg-yellow-100">
            <img className="restaurant-logo"
            alt="restaurant-logo"
            src={CDN_URL + info.cloudinaryImageId}></img>
            <h3>{info.name}</h3>
            <h4>{couisine}</h4>
            <h4>{info.avgRatingString} stars</h4>
            <h4>{info.slaString}</h4>
        </div>
    )
}


export const withVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-500 m-2 p-2"></label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export const withNonVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-red-500 m-2 p-2"></label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;

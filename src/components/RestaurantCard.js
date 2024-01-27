import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const { data } = props
    const { info } = data
    const couisine = data.info.cuisines.join(", ")
    // console.log(data)
    return (
        <div className="restaurant-card">
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

export default RestaurantCard;

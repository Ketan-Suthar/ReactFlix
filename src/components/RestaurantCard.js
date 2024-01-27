
const RestaurantCard = (props) => {
    const {data} = props;
    const {info} = data;
    const couisine = info.cuisine.map((i) => i.name).join(", ")
    // console.log(data)
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo"
            alt="restaurant-logo"
            src={info.image.url}></img>
            <h3>{info.name}</h3>
            <h4>{couisine}</h4>
            <h4>{info.rating.aggregate_rating} stars</h4>
            <h4>{data.order.deliveryTime}</h4>
            <h5>{info.locality.address}</h5>
        </div>
    )
}

export default RestaurantCard;

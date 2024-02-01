import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const { data } = props
    const { info } = data

    return (
        <div className="w-60 bg-white p-3 m-7">
            <img alt="image" className="h-40 w-full object-cover" src={CDN_URL + info.cloudinaryImageId} />
            <ul className="mt-3 flex flex-wrap">
                <li className="mr-auto">
                        {info.name}
                </li>
                <li className="mr-2">
                        {info.avgRatingString}
                </li>
                <li>
                        {info.slaString}
                </li>
            </ul>
        </div>
    )
}

export default RestaurantCard;

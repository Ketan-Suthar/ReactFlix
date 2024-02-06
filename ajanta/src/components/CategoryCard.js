import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
    const { data } = props
    const { info } = data

    return (
        <div className="w-60 bg-white p-3 m-5 border-2 border-gray-100 shadow-lg">
            <Link key={info.id} to={"/restaurant/" + info.id}>
                <div>
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
            </Link>
        </div>
    )
}

export default CategoryCard;

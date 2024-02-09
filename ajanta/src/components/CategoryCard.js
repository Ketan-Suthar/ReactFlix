import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
    const { data } = props

    return (
        <div className="w-60 bg-white p-3 m-5 border-2 border-gray-100 shadow-lg">
            <Link key={data.id} to={"/restaurant/" + "1"}>
                <div>
                    <img alt="image" className="h-40 w-full object-cover" src={"/images/"+data.fileName} />
                    <ul className="mt-3 flex flex-wrap">
                        <li className="mr-auto">
                            {data.name}
                        </li>
                        <li className="mr-2">
                            {data.avgRatingString}
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
    )
}

export default CategoryCard;

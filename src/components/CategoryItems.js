import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL, LOGO_URL } from "../utils/constants";


const CategoryItems = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [imagURL, setImagURL] = useState(false);

    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);

    const imageClick = (imagURL) => {
        console.log("opening modal: " + imagURL);
        setImagURL(imagURL);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    if (!resData || resData == null) {
        return (<h1>Loading...</h1>);
    }

    console.log(resData);

    let { name, cuisines } = resData?.data?.cards[0]?.card?.card?.info;
    cuisines = cuisines?.join(", ");
    let foodItems = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.
        cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(foodItems)
    return (
        <>
            <div className="text-center">
                <h1 className="font-bold my-6 text-2xl">{name}</h1>
                <p className="font-bold text-lg">{cuisines}</p>
                <div className="restaurant-container flex min-h-screen w-full flex-wrap content-center justify-between p-5">
                    {
                        foodItems?.map((element, ind) => {
                            return (element?.card?.card?.itemCards?.map((item) => {
                                return (

                                    <div key={item?.card?.info?.id} className="shadow-xl w-52 bg-white p-1 m-2 border-2 border-gray-200">
                                        <div>
                                            <img onClick={()=>imageClick(item?.card?.info?.imageId ? CDN_URL + item?.card?.info?.imageId : LOGO_URL)} alt="image" className="h-32 w-full object-cover cursor-pointer" src={item?.card?.info?.imageId ? CDN_URL + item?.card?.info?.imageId : LOGO_URL} />
                                            <ul className="mt-3 flex flex-wrap">
                                                <li className="mr-auto text-justify">
                                                    {item.card.info.name}
                                                </li>
                                                <li>
                                                    <span> - ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                )
                            })
                            )
                        })
                    }
                </div>

            </div>
            {showModal && (<div
                className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/80 flex justify-center items-center z-[1000]">

                <a className="fixed z-90 top-2 right-2 text-white text-closebtn font-bold cursor-pointer bg-black h-11 w-9 text-center hover:scale-110 transition duration-500 object-cover"
                    onClick={closeModal}>&times;</a>

                <img id="modal-img" className="max-w-[800px] max-h-[600px] object-cover" src={imagURL} />
            </div>)}
        </>
    )
}

export default CategoryItems;

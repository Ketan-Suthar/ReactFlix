import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handlleClick = () => {
        setShowIndex()
    }

    return (
        <div className="w-6/12 mx-auto my-6">
            <div className="bg-gray-200 shadow-lg p-4">
                <div className="flex justify-between" onClick={handlleClick}>
                    <span>{data.title} ({data?.itemCards?.length})</span>
                </div>
            </div>
            <div>
                {showItems && <ItemList items={data?.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;

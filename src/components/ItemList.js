import { useDispatch } from "react-redux";
import { CDN_URL, LOGO_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            { 
                items?.map((item) => {
                    return (<div key={item.card.info.id}
                                className="p-2 m-2 border-b-2 text-left flex justify-between">
                        
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            
                            <div className="absolute">
                                <button onClick={() => handleAddItem(item)}
                                    className="p-2 bg-white shadow-lg mx-10 rounded-lg">Add+</button>
                            </div>
                            <img alt="" className="w-full" src={item?.card?.info?.imageId ? CDN_URL + item?.card?.info?.imageId : LOGO_URL} />
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;

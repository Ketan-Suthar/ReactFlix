import { useState, useEffect } from "react";
import { SWIGGY_RES_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])    

    const fetchData = async () => {
        let response = await fetch(SWIGGY_RES_API + resId);
        response = await response.json();
        setResInfo(response)
    }

    return resInfo;
}


export default useRestaurantMenu;

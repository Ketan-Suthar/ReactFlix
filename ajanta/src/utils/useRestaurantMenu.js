import { useState, useEffect } from "react";
import { SWIGGY_RES_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])    

    const fetchData = async () => {
        fetch(`http://localhost:3000/data/categoryItems/${resId}.json`)
        .then((res) => res.text())
        .then((text) => {
            const json = JSON.parse(text)
            console.log(json)
            setResInfo(json)
        })
        .catch((e) => console.error(e));
    }

    return resInfo;
}


export default useRestaurantMenu;
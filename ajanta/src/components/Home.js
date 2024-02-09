import { useEffect, useState } from "react";
import { SWIGGY_HOME_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import CategoryCard from "./CategoryCard";
import ImageCarousel from "./ImageCarousel";

const Home = () => {
    const [resDataState, setResDataState] = useState([]);
    const [filteredResDataState, setFilteredResDataState] = useState([]);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        fetch("data/categories.json")
        .then((res) => res.text())
        .then((text) => {
            const json = JSON.parse(text)
            console.log(json)
            setResDataState(json)
            setFilteredResDataState(json)
        })
        .catch((e) => console.error(e));
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return (
            <h1>Looks like you are offline</h1>
        )
    }

    if (!resDataState || resDataState.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="body bg-slate-50">
            <ImageCarousel/>
            <div>
              <h1 className="text-center text-4xl font-bold mt-16">What we sell</h1>
            <div className="restaurant-container flex min-h-screen w-full flex-wrap content-center justify-between p-5">
                {
                    filteredResDataState?.map(
                        i => (<CategoryCard key={i.id} data={i} />)
                    )
                }
            </div>
            </div>
        </div>
    )
}

export default Home;

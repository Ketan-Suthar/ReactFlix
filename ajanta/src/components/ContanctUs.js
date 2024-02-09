import { useEffect, useState } from "react";
import { SWIGGY_HOME_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CDN_URL } from "../utils/constants";


const ContanctUs = () => {
    const [resDataState, setResDataState] = useState(["1", "2", "3"]);

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline</h1>
        )
    }

    if (!resDataState || resDataState.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="body">
            <div className="mt-10 ml-11">
                <h1 className="text-3xl font-bold">Contact Info</h1>
                <div className="restaurant-container flex w-full flex-wrap content-center justify-between">
                    {
                        resDataState?.map((i, ind) => {
                            return ind<3 && (
                            <div key={i} className="w-[350px] flex bg-white p-3 m-5 border-2 border-gray-100 shadow-xl">
                                <div className="w-20 h-full">
                                    <img alt="image" className="w-full h-full object-cover" src="/images/luffyy.png" />
                                </div>
                                <div className="w-50 pl-4">
                                    <ul className="mt-3 text-sm">
                                        <li className="mr-auto text-xl font-bold">
                                            Ketan Suthar
                                        </li>
                                        <li className="mr-2 mt-2">
                                            <div className="flex">
                                                <svg className="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                                </svg>
                                                <p className="ml-2">+91 1234567890</p>
                                            </div>
                                        </li>
                                        <li className="mr-2 mt-2">
                                            <div className="flex">
                                                <svg className="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                                </svg>
                                                <p className="ml-2">ajanta@email.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        )
                    }
                </div>
            </div>
            <div className="mt-10 ml-11">
                <h1 className="text-3xl font-bold">Location</h1>
                <div className="w-4/5 h-80 m-10 border-2 border-black">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2087851501387!2d72.61247347394219!3d22.979348717942422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8546daed21b3%3A0x623cc866e260d155!2sAjanta%20Handicraft!5e0!3m2!1sen!2sin!4v1706954083423!5m2!1sen!2sin"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContanctUs;

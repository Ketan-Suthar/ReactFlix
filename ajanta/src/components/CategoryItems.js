import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL, LOGO_URL } from "../utils/constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CategoryItems = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState(null);

    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);

    const imageClick = (selectedItem) => {
        // console.log("opening modal: " + imagURL);
        setItem(selectedItem);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    if (!resData || resData == null) {
        return (<h1>Loading...</h1>);
    }
    const name = resData?.categoryInfo?.name
    const cuisines = resData?.categoryInfo?.cuisines
    const categoryItems = resData?.items || []
    console.log(categoryItems)

    return (
        <>
            <div className="text-center bg-slate-50">
                <h1 className="font-bold my-6 text-2xl">{name}</h1>
                <p className="font-bold text-lg">{cuisines}</p>
                <div className="restaurant-container flex min-h-screen w-full flex-wrap content-center justify-between p-5">
                    {
                        categoryItems?.map((element, ind) => {
                            return (
                                <div key={element?.id} className="shadow-xl w-52 bg-white p-1 m-2 border-2 border-gray-200">
                            <div>
                                <img onClick={() => imageClick(element)} alt="image" className="h-32 w-full object-cover cursor-pointer p-1" 
                                    src={element?.image ? "/images/" + element?.image : LOGO_URL} />
                                <ul className="mt-3 flex flex-wrap">
                                    <li className="mr-auto text-justify">
                                        {element.name}
                                    </li>
                                    <li>
                                        <span> - ₹ {element.price}</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                            )
                        })
                    }
                </div>

            </div>
            {/* {showModal && (<div
                className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/80 flex justify-center items-center z-[1000]">

                <a className="fixed z-90 top-2 right-2 text-white text-closebtn font-bold cursor-pointer bg-black h-11 w-9 text-center hover:scale-110 transition duration-500 object-cover"
                    onClick={closeModal}>&times;</a>

                <img id="modal-img" className="max-w-[800px] max-h-[600px] object-cover" src={imagURL} />
            </div>)} */}
            {showModal && <ItemModal closeModal={closeModal} item={item} />}
        </>
    )
}


const ItemModal = ({ closeModal, item }) => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/75 z-[101] justify-center items-center flex">
            <a className="fixed z-90 top-2 right-2 text-white text-closebtn font-bold cursor-pointer bg-black h-11 w-9 text-center hover:scale-110 transition duration-500 object-cover"
                onClick={closeModal}>&times;</a>
            <section className="h-4/5 sm:w-4/5 w-full flex justify-center items-center">
                <div className="overflow-scroll no-scrollbar h-full m-4 w-full rounded-md border border-gray-100 text-gray-600 shadow-md bg-white">
                    <div className="flex flex-col text-gray-600 md:flex-row justify-between">
                        <div className="block h-1/2 w-full sm:w-3/5 rounded-md">
                            {/* <img className="block h-full max-w-full rounded-md shadow-lg" src={imagURL} alt="Shop image" /> */}
                            <ImageSection item={item} />
                        </div>
                        <div className="relative p-8 md:w-2/5">
                            <div className="flex flex-col md:flex-row">
                                <h2 className="mb-2 text-2xl font-black">{item.name}</h2>
                            </div>
                            <p className="mt-3 font-sans text-base tracking-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate vero soluta voluptatum error non.</p>
                            <div className="flex flex-col md:flex-row md:items-end">
                                <p className="mt-6 text-xl font-black"> ₹{item?.price}</p>
                                {/* <span className="ml-2 text-xs uppercase" hidden={true}>258 Sales</span> */}
                            </div>
                            <div className="mt-8 flex flex-col sm:flex-row">
                                <button className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-emerald-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>Cart</button>
                                {/* <button className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">Preview</button> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

const ImageSection = ({ item }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const imgs = []
        if(item?.image)
        imgs.push(item?.image)
        let i = 1
        while (true) {
            const key = `image${i}`
            if(key in item){
                imgs.push(item[key])
                ++i
            }else{
                break;
            }
        }
        console.log("imgs:" + imgs)
        setImages(imgs)
    }, [])

    const [isZoomed, setIsZoomed] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [showGIF, setShowGIF] = useState(false);
    const imageRef = useRef(null)

    if(!images || images.length == 0){
        return <h1>Loading...</h1>
    }

    const handleZoom = (e) => {
        console.log("mouse");
        if (imageRef.current) {
            // console.log(imageRef.current.src);
            const { offsetWidth: width, offsetHeight: height } = imageRef.current;
            const x = (((e.pageX) / width) * 100).toFixed(2);
            const y = (((e.pageY) / height) * 100).toFixed(2);
            setPosition({ x, y });
        }

        var mouseX = e.pageX;
        var mouseY = e.pageY;
        // console.log(mouseX, mouseY);
        setMouse({ x: mouseX, y: mouseY });
    }

    return (
        <div className="flex justify-center items-center bg-white ">
            <div className="">
                <ImageCarousel images={images} handleZoom={handleZoom} isZoomed={isZoomed} setIsZoomed={setIsZoomed} 
                    modalOpen={modalOpen} setModalOpen={setModalOpen} showGIF={showGIF} setShowGIF={setShowGIF} imageRef={imageRef} />
                {/* {showGIF && (
                    <>
                        <div key="magnifierLens" style={{ position: 'absolute', backgroundImage: `url("/images//tile._CB483369979_.gif")`, width: '180px', height: '81px', left: `${mouse.x - 40}px`, top: `${mouse.y - 20}px` }}></div>
                    </>
                )}
                {modalOpen && (
                    <>
                        <div key="zoomWindow" className="fixed top-0 right-0 z-100 w-[300px] h-[300px] bg-black/80 z-[1000]" style={{ position: 'absolute', backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 6px 8px 2px', border: '1px solid rgb(148, 148, 148)', display: 'block' }}>
                            <img key="detailImg" className="w-[300px] h-[300px] object-cover" src={imageRef.current.src} style={{ position: 'absolute', left: `${position.x}`, top: `${position.y}` }} />
                        </div>
                    </>
                )} */}
            </div>
        </div>
    );
}

const ImageCarousel = ({images, handleZoom, isZoomed, setIsZoomed, modalOpen, setModalOpen, showGIF, setShowGIF, imageRef}) => {
    return (
        <Carousel showArrows={true} useKeyboardArrows={true} autoPlay={false} infiniteLoop={true} showThumbs={true} thumbWidth={100} swipeable={true} interval={2000} transitionTime={500} showStatus={false} dynamicHeight={false}>

            {images.map((URL, index) => (
                <div key={index} className={`relative ${isZoomed ? 'overflow-hidden' : ''}`}
                    // onMouseMove={(e) => { handleZoom(e); }}
                    // onMouseEnter={() => {
                    //     setIsZoomed(true);
                    //     if (!modalOpen) setModalOpen(true);
                    //     if (!showGIF) setShowGIF(true);
                    // }}
                    // onMouseLeave={() => {
                    //     setIsZoomed(false);
                    //     setModalOpen(false);
                    //     setShowGIF(false);
                    // }}
                >
                    <img ref={imageRef} className="object-center" alt="sample_file" src={"/images/" + URL} />
                </div>
            ))}
        </Carousel>
    )
}

const ItemModal2 = ({ closeModal, imagURL }) => {
    return (
        <div className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/75 flex justify-center items-center z-[1000]">
            <a className="fixed z-90 top-2 right-2 text-white text-closebtn font-bold cursor-pointer bg-black h-11 w-9 text-center hover:scale-110 transition duration-500 object-cover"
                onClick={closeModal}>&times;</a>
            <div className="bg-white border rounded-lg overflow-hidden">
                <img className="h-48 w-full object-cover" src="/images/Gojo.jpg" alt="imageAlt" />
                <div className="p-6">
                    <div className="flex items-baseline">
                        <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">New</span>
                        <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                            2 beds &bull; 2 baths
                        </div>
                    </div>
                    <h4 className="mt-1 font-semibold text-lg leading-tight truncate">Hello</h4>
                    <div className="mt-1">
                        1000
                        <span className="text-gray-600 text-sm"> / wk</span>
                    </div>
                    <div className="mt-2 flex items-center">
                        <svg v-for="i in 5" key="i" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
                        </svg>
                        <span className="ml-2 text-gray-600 text-sm">4.4 reviews</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CategoryItems;

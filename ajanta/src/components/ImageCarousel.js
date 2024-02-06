import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactDOM } from "react-dom";

const images = [
    "./images/Gojo.jpg",
    "./images/l.jpg",
    "./images/luffy.png"
];

const ImageCarousel = () => {
  return (
    <div className="flex justify-center items-center h-[85vh] bg-black">
      <div className="h-[85vh] sm:w-4/5 w-full">
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} interval={2000} transitionTime={500} showStatus={false} dynamicHeight={false}>
        {images.map((URL, index) => (
            <img className="h-[85vh] w-full" alt="sample_file" src={URL} key={index} />
        ))}
      </Carousel>
      </div>
    </div>
  );
}


export default ImageCarousel;


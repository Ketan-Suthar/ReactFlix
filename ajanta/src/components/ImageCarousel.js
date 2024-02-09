import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    "/images/Gojo.jpg",
    "/images/l.jpg",
    "/images/luffy.png"
];

const ImageCarousel = () => {
  return (
    <div className="flex justify-center items-center sm:h-[85vh] h-2/5 bg-black">
      <div className="h-full sm:w-4/5 w-full">
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} interval={2000} transitionTime={500} showStatus={false} dynamicHeight={false}>
        {images.map((URL, index) => (
            <img className="sm:h-[85vh] h-full w-full" alt="sample_file" src={URL} key={index} />
        ))}
      </Carousel>
      </div>
    </div>
  );
}


export default ImageCarousel;


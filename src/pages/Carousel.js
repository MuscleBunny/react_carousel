// import "./Carousel.scss";
import Image from "../components/Image";
import React, {useState, useEffect} from "react"

const Carousel = ({ imageUrls, imgW, imgH }) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const changeSlide = () => {
    setCurrentPosition(prev => {
        if ( prev < window.innerWidth - imageUrls.length * imgW ) {
            return 0;
        }
        return prev - 2;
    });
  };

  useEffect(() => {
    const interval = setInterval(changeSlide, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-carousel">
      <header className="carousel-header"> Image Carousel Component</header>
      {imageUrls && imageUrls.length > 0 && (
        <div className="carousel-container">
          {
             imageUrls.map( (val, index) => {
                const pos = currentPosition+index*imgW;
                return <Image imageSrc={val} imgW={imgW} imgH={imgH} key={index} position={pos} />
                })
          }
        </div>
      )}
    </div>
  );
};

export default Carousel;
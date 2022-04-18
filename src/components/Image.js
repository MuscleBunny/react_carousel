import React, {Fragment} from "react"

const Image = ({ imageSrc, imgW, imgH, position }) => {
    const imageStyle = {
        left: '' + position + 'px',
        position: "absolute",
        };
  return (
    <Fragment>
      <img
        className="original-image"
        src={imageSrc}
        alt="carousel"
        width={imgW}
        height={imgH}
        style={imageStyle}
      />
    </Fragment>
  );
};

export default Image;
import React, { useState } from "react";


export default function App() {
  const imageArray = [
    { src: "images/pic1.jpg", alt: "Closeup of a human eye" },
    { src: "images/pic2.jpg", alt: "Rock that looks like a wave" },
    { src: "images/pic3.jpg", alt: "Purple and white pansies" },
    { src: "images/pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { src: "images/pic5.jpg", alt: "Large moth on a leaf" },
  ];

  const [mainImage, setMainImage] = useState(imageArray[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={mainImage.src}
          alt={mainImage.alt}
        />
        <div className="overlay"></div>
        <button className="dark">Darken</button>
      </div>
      <div className="thumb-bar">
        {imageArray.map((image, index) => (
          <img
            key={index}
            className="thumbnail"
            src={image.src}
            alt={image.alt}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </>
  );
}
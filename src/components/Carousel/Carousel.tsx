import React, { useState } from 'react';

interface Image {
  image: string;
  text: string;
}

const Carousel: React.FC<{ carouselImages: Image[] }> = ({
  carouselImages,
}) => {
  // const [activeIndex, setActiveIndex] = useState<number>(0);

  console.log(carouselImages);

  return (
    <>
      <div>{carouselImages[0]['image']}</div>;
      <div>{carouselImages[1]['image']}</div>;
      <div>{carouselImages[0]['text']}</div>;
      <div>{carouselImages[1]['text']}</div>;
    </>
  );
};

export default Carousel;

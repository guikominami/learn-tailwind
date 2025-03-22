import React, { useState } from 'react';

interface CarouselImages {
  images: Image[];
}

interface Image {
  image: string;
  text: string;
}

const Carousel: React.FC<{
  carouselImages: CarouselImages;
}> = ({ carouselImages }) => {
  // const [activeIndex, setActiveIndex] = useState<number>(0);

  console.log(carouselImages);

  return <div>Carousel</div>;
};

export default Carousel;

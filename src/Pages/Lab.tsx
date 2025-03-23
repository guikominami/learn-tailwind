import React, { useContext } from 'react';

import Container from '../components/Container';
import Box from '../components/Box';
import Carousel from '../components/Carousel/Carousel';

import { LanguageContext } from '../context/language.context';
import { labText } from '../assets/data/language/lab.ts';

const Lab: React.FC = () => {
  const images = {
    '1': {
      image: 'image1',
      text: 'text1',
    },
    '2': {
      image: 'image2',
      text: 'text2',
    },
  };

  const { language } = useContext(LanguageContext);

  console.log(labText[language]);

  return (
    <>
      <Container>
        <>
          <Box>
            <h1 className='text-3xl font-bold'>{images['1']['image']}</h1>
            <p className='mt-4'></p>
          </Box>
          {/* <Box>
            <Carousel carouselImages={images} />
          </Box> */}
        </>
      </Container>
    </>
  );
};

export default Lab;

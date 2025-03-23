import React, { useContext } from 'react';

import Container from '../components/Container';
import Box from '../components/Box';
import Carousel from '../components/Carousel/Carousel';

import { LanguageContext } from '../context/language.context';
import { labText } from '../assets/data/language/lab.ts';

const Lab: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const selectedLanguage = language === 'portuguese' ? 'portuguese' : 'english';

  console.log(labText[selectedLanguage]);

  return (
    <>
      <Container>
        <>
          <Box>
            <h1 className='text-3xl font-bold'>
              {labText[selectedLanguage].title}
            </h1>
            <p className='mt-4'>{labText[selectedLanguage].body1}</p>
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

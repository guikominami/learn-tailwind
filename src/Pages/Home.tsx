import React from 'react';
import Container from '../components/Container';
import Box from '../components/Box';
import Carousel from '../components/Carousel/Carousel';

const Home: React.FC = () => {
  const images = [
    { image: 'image1', text: 'text1' },
    { image: 'image2', text: 'text2' },
  ];

  return (
    <>
      <Container>
        <>
          <Box>
            <h1 className='text-3xl font-bold'>Teste</h1>
            <p className='mt-4'>
              Que merda é essa? Que merda é essa? Que merda é essa? Que merda é
              essa? Que merda é essa? Que merda é essa? Que merda é essa? Que
              merda é essa? Que merda é essa? Que merda é essa?
            </p>
          </Box>
          <Carousel carouselImages={images} />
          <Box>
            <p>teste</p>
          </Box>
        </>
      </Container>
    </>
  );
};

export default Home;

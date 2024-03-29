import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import '@fontsource/montserrat';
import ScrolltoMainBtn from '../commons/ScrolltoMainBtn';
import ScrolltoMainText from '../commons/ScrolltoMainText';

const HeroSection = ({ theme }) => {
  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        h={{ base: '80vh', md: '80vh', lg: '80vh', xl: '80vh' }}
      >
        <Box
          my={{ base: 'auto', md: 3 }}
          mx={'auto'}
          textAlign={'center'}
          pt={{ base: 'auto', md: '100px', lg: '150px', xl: '150px' }}
        >
          <Text
            fontSize={{ base: '20px', md: '40px' }}
            fontWeight={'light'}
            fontFamily={'Montserrat'}
            color={'grey'}
          >
            I'm a Software Engineer, specializing in
            <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>{' '}
            <Text
              as={'span'}
              fontWeight={'bold'}
              color={theme === 'light' ? '#010101' : '#F2F2F2'}
            >
              Animated 3D Website Development
            </Text>{' '}
          </Text>
          <ScrolltoMainText
            title={'Click to know more about me!'}
            theme={theme}
          />
        </Box>
      </Stack>
      <ScrolltoMainBtn />
    </>
  );
};

export default HeroSection;

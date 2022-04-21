import { AspectRatio, Box, Button } from '@chakra-ui/react';
import NextImage from 'next/image';
import React from 'react';

const Hero = ({ src }) => {
    return (
        <Box pos="relative" maxW="1000px" w="100%">
            <AspectRatio ratio={16 / 9}>
                <NextImage
                    objectFit="cover"
                    src={src}
                    alt="hero banner"
                    layout="fill"
                    priority
                />
            </AspectRatio>
            <Button
                pos="absolute"
                bottom={2}
                left={2}
                fontSize={['sm', 'xl']}
                variant="unstyled"
                bg="blackAlpha.500"
                border="2px solid white"
                color="white"
                paddingInline={4}
            >
                Buy Now
            </Button>
        </Box>
    );
};

export default Hero;

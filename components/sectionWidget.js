import React, { useState, useEffect } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import {
    Heading,
    Flex,
    Box,
    ButtonGroup,
    IconButton,
    AspectRatio,
    Text,
    Link,
    Stack,
} from '@chakra-ui/react';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import imgBuilder from '../utils/imgBuilder.js';

export const ChakraNextImage = (props) => {
    const { src, alt, ...rest } = props;
    return (
        <AspectRatio position="relative" {...rest}>
            <NextImage
                objectFit="contain"
                placeholder="blur"
                blurDataURL="/images/product.png"
                layout="fill"
                priority={true}
                src={src}
                alt={alt}
            />
        </AspectRatio>
    );
};

const SectionWidget = ({ title, list }) => {
    const [currentActive, setCurrentActive] = useState(0);

    const next = () => {
        currentActive === list.length - 1
            ? setCurrentActive(0)
            : setCurrentActive(currentActive + 1);
    };
    const prev = () => {
        currentActive === 0
            ? setCurrentActive(list.length - 1)
            : setCurrentActive(currentActive - 1);
    };

    // useEffect(() => {
    //     const myFunc = () => {
    //         currentActive === list.length - 1
    //             ? setCurrentActive(0)
    //             : setCurrentActive((previous) => previous + 1);
    //         console.log('here');
    //     };
    //     const interval = setInterval(myFunc, 10000);

    //     return () => clearInterval(interval);
    // }, [currentActive, list.length]);

    return (
        <React.Fragment>
            {/* DESKTOP ONLY */}
            <Flex flexDir="column" mt={8} d={['none', 'flex']} w="100%">
                <Heading
                    as="h2"
                    fontSize="lg"
                    color="gray.700"
                    mb={2}
                    textAlign="left"
                >
                    {title}
                </Heading>
                <Box w="100%" overflow="auto">
                    <Flex w="max-content" h="auto" p={4} gap={4}>
                        {list.map((item, index) => {
                            return (
                                <Box
                                    key={item._id}
                                    bg="gray.100"
                                    px={4}
                                    py={4}
                                    w={60}
                                >
                                    <ChakraNextImage
                                        src={imgBuilder(
                                            item.image_single,
                                            700,
                                            true
                                        )}
                                        alt="product"
                                        w="100%"
                                        blendMode="multiply"
                                    />

                                    <Box w="100%">
                                        <Text fontSize="sm">
                                            {list[currentActive].manufacturer}
                                        </Text>
                                        <Text color="blue.600" fontSize="sm">
                                            <NextLink href="/page" passHref>
                                                <Link>
                                                    {list[currentActive].name
                                                        .length >= 50
                                                        ? list[
                                                              currentActive
                                                          ].name.slice(0, 50) +
                                                          '...'
                                                        : list[currentActive]
                                                              .name}
                                                </Link>
                                            </NextLink>
                                        </Text>

                                        <Flex align="flex-end">
                                            <Text fontWeight="bold">
                                                $
                                                {list[
                                                    currentActive
                                                ].price.toFixed(2)}
                                            </Text>
                                            <IconButton
                                                isRound
                                                _active={{
                                                    transform: 'scale(1.2)',
                                                    bg: 'pink.300',
                                                }}
                                                _focus={{ bg: 'transparent' }}
                                                _hover={{ bg: 'transparent' }}
                                                ml="auto"
                                                variant="ghost"
                                                colorScheme="blackAlpha"
                                                fontSize="2xl"
                                                icon={<AiOutlineHeart />}
                                            />
                                            <IconButton
                                                isRound
                                                _active={{
                                                    transform: 'scale(1.2)',
                                                    bg: 'teal.300',
                                                }}
                                                _focus={{ bg: 'transparent' }}
                                                _hover={{ bg: 'transparent' }}
                                                variant="ghost"
                                                colorScheme="blackAlpha"
                                                fontSize="2xl"
                                                icon={<AiOutlineShoppingCart />}
                                            />
                                        </Flex>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Flex>
                </Box>
            </Flex>

            {/* MOBILE ONLY */}
            <Flex flexDir="column" d={['flex', 'none']} w="100%">
                {/* Section Name */}
                <Heading
                    as="h2"
                    fontSize="lg"
                    color="gray.700"
                    mb={2}
                    textAlign="center"
                >
                    {title}
                </Heading>

                {/* Carousel */}
                <Flex direction="row" justify="space-around" py={2} px={8}>
                    {list.map((item, index) => {
                        return (
                            <Box
                                key={item._id}
                                bg={
                                    currentActive === index
                                        ? 'gray.500'
                                        : 'transparent'
                                }
                                border="2px"
                                borderColor="gray.500"
                                h={3}
                                w={3}
                                rounded="full"
                                onClick={() => setCurrentActive(index)}
                            ></Box>
                        );
                    })}
                </Flex>

                <Box bg="gray.100" py={4}>
                    <Box pos="relative" mb={2}>
                        <ChakraNextImage
                            src={imgBuilder(
                                list[currentActive].image_single,
                                700,
                                true
                            )}
                            alt="product"
                            mx="auto"
                            minW="250px"
                            w="80%"
                            blendMode="multiply"
                        />
                        <ButtonGroup
                            w="100%"
                            h="100%"
                            spacing="auto"
                            pos="absolute"
                            top="50%"
                            colorScheme="whiteAlpha"
                            transform="translateY(-50%)"
                        >
                            <IconButton
                                variant="unstyled"
                                color="gray.900"
                                h="100%"
                                fontSize="4xl"
                                icon={<MdNavigateBefore />}
                                onClick={() => prev()}
                            />
                            <IconButton
                                variant="unstyled"
                                color="gray.900"
                                h="100%"
                                fontSize="4xl"
                                icon={<MdNavigateNext />}
                                onClick={() => next()}
                            />
                        </ButtonGroup>
                    </Box>
                    <Box px={8} textAlign="left">
                        <Text fontSize="sm">
                            {list[currentActive].manufacturer}
                        </Text>
                        <Text color="blue.600">
                            <NextLink href="/page" passHref>
                                <Link>
                                    {list[currentActive].name.length >= 50
                                        ? list[currentActive].name.slice(
                                              0,
                                              50
                                          ) + '...'
                                        : list[currentActive].name}
                                </Link>
                            </NextLink>
                        </Text>
                        <Flex align="flex-end">
                            <Text fontWeight="bold">
                                ${list[currentActive].price.toFixed(2)}
                            </Text>
                            <IconButton
                                isRound
                                _active={{
                                    transform: 'scale(1.2)',
                                    bg: 'pink.300',
                                }}
                                _focus={{ bg: 'transparent' }}
                                _hover={{ bg: 'transparent' }}
                                ml="auto"
                                variant="ghost"
                                colorScheme="blackAlpha"
                                fontSize="2xl"
                                icon={<AiOutlineHeart />}
                            />
                            <IconButton
                                isRound
                                _active={{
                                    transform: 'scale(1.2)',
                                    bg: 'teal.300',
                                }}
                                _focus={{ bg: 'transparent' }}
                                _hover={{ bg: 'transparent' }}
                                variant="ghost"
                                colorScheme="blackAlpha"
                                fontSize="2xl"
                                icon={<AiOutlineShoppingCart />}
                            />
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </React.Fragment>
    );
};

export default SectionWidget;

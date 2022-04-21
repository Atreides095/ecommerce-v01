import React from 'react';
import NextLink from 'next/link';
import {
    Box,
    Flex,
    Link,
    IconButton,
    ButtonGroup,
    useDisclosure,
    Slide,
    Center,
    Button,
    SimpleGrid,
    AspectRatio,
    Icon,
} from '@chakra-ui/react';
import {
    AiOutlineClose,
    AiOutlineShoppingCart,
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineLaptop,
    AiOutlineMobile,
    AiOutlineVideoCamera,
} from 'react-icons/ai';
import { BsKeyboard } from 'react-icons/bs';
import { IoGameControllerOutline } from 'react-icons/io5';
import { GoDeviceDesktop } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import SearchBar from './searchBar';

const MobileCategoryBtn = ({ icon, text, to }) => {
    return (
        <AspectRatio ratio={1}>
            <NextLink href={to} passHref>
                <Button
                    as="a"
                    variant="solid"
                    d="flex"
                    flexDir="column"
                    whiteSpace="normal"
                    textAlign="center"
                    fontSize="xs"
                    gap={2}
                    color="gray.600"
                >
                    <Icon as={icon} w={16} h={16} />
                    {text}
                </Button>
            </NextLink>
        </AspectRatio>
    );
};

const CategoryBtn = ({ icon, text, to }) => {
    return (
        // <AspectRatio ratio={1}>
        <NextLink href={to} passHref flexShrink={0} flexGrow={1}>
            <Button variant="link" gap={2}>
                <Icon as={icon} w={8} h={8} />
                {text}
            </Button>
        </NextLink>
        // </AspectRatio>
    );
};

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box
            direction="column"
            as="header"
            zIndex={999}
            // position="sticky"
            // top={0}
            borderBottom="2px"
            borderColor="gray.300"
        >
            <Flex
                w="100%"
                zIndex="999"
                px={4}
                py={3}
                h={20}
                maxW="1400px"
                mx="auto"
                align="center"
                justify="space-between"
                bg="whiteAlpha.900"
            >
                {/* Store Logo */}
                <NextLink href="/" passHref>
                    <Link
                        fontSize="4xl"
                        fontWeight="900"
                        textDecoration="none"
                        color="gray.800"
                    >
                        MyStore
                    </Link>
                </NextLink>
                {/* hamburger (only mobile) */}
                <IconButton
                    d={['inline-flex', 'none']}
                    ml="auto"
                    size="lg"
                    aria-label="expand categories"
                    icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    variant="unstyled"
                    fontSize="3xl"
                    onClick={() => onToggle()}
                />
                {/* SearchBar (except mobile) */}
                <Box flexGrow={1} maxW="50ch" d={['none', 'block']}>
                    <SearchBar />
                </Box>

                {/* Navigation (except mobile) */}
                <ButtonGroup size="md" d={['none', 'flex']}>
                    <IconButton
                        isRound
                        aria-label="shopping cart"
                        variant="ghost"
                        fontSize="2xl"
                        icon={<AiOutlineShoppingCart />}
                    />
                    <IconButton
                        isRound
                        fontSize="2xl"
                        aria-label="wishlist"
                        variant="ghost"
                        icon={<AiOutlineHeart />}
                    />
                    <IconButton
                        fontSize="2xl"
                        isRound
                        aria-label="user"
                        variant="ghost"
                        icon={<AiOutlineUser />}
                    />
                </ButtonGroup>
            </Flex>

            {/* Categories (except mobile) */}
            <Box width="100%" overflow="auto">
                <Flex
                    direction="row"
                    d={['none', 'flex']}
                    py={2}
                    w="max-content"
                    overflowX="auto"
                    // d="none"
                    maxW="1400px"
                    mx="auto"
                    justify="center"
                    gap={12}
                    px={12}
                >
                    <CategoryBtn
                        text="Desktop"
                        icon={GoDeviceDesktop}
                        to="/category1"
                    />
                    <CategoryBtn
                        text="Laptops"
                        icon={AiOutlineLaptop}
                        to="/category1"
                    />
                    <CategoryBtn
                        text="Smartphones"
                        icon={AiOutlineMobile}
                        to="/category1"
                    />
                    <CategoryBtn
                        text="Gaming"
                        icon={IoGameControllerOutline}
                        to="/category1"
                    />
                    <CategoryBtn
                        text="Peripherals"
                        icon={BsKeyboard}
                        to="/category1"
                    />
                    <CategoryBtn
                        text={'TV & Video'}
                        icon={AiOutlineVideoCamera}
                        to="/category1"
                    />
                </Flex>
            </Box>

            {/* Expanded categories (mobile version)*/}

            <SimpleGrid
                maxH={isOpen ? '320px' : '0'}
                overflow="hidden"
                transition="all 0.5s"
                bg="gray.300"
                zIndex="900"
                templateColumns="repeat(3, 1fr)"
                templateRows="repeat(auto, 1fr)"
                gap="4px"
                px="4px"
                py={isOpen ? '4px' : 0}
                d={['grid', 'none']}
            >
                <MobileCategoryBtn
                    text="Desktop Computers"
                    icon={GoDeviceDesktop}
                    to="/category1"
                />
                <MobileCategoryBtn
                    text="Laptops"
                    icon={AiOutlineLaptop}
                    to="/category1"
                />
                <MobileCategoryBtn
                    text="Smartphones"
                    icon={AiOutlineMobile}
                    to="/category1"
                />
                <MobileCategoryBtn
                    text="Gaming"
                    icon={IoGameControllerOutline}
                    to="/category1"
                />
                <MobileCategoryBtn
                    text="Peripherals"
                    icon={BsKeyboard}
                    to="/category1"
                />
                <MobileCategoryBtn
                    text={'TV & Video'}
                    icon={AiOutlineVideoCamera}
                    to="/category1"
                />
            </SimpleGrid>
        </Box>
    );
};

export default Header;

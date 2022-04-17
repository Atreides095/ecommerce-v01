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
} from '@chakra-ui/react';
import {
    AiOutlineClose,
    AiOutlineShoppingCart,
    AiOutlineHeart,
    AiOutlineUser,
} from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import SearchBar from './searchBar';

const MobileCategoryBtn = ({ icon, text, to }) => {
    return (
        <AspectRatio ratio={1}>
            <NextLink href={to} passHref>
                <Button as="a" variant="solid">
                    {text}
                </Button>
            </NextLink>
        </AspectRatio>
    );
};

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex direction="column" as="header">
            <Flex
                zIndex="999"
                px={4}
                py={3}
                h={20}
                align="center"
                bg="white"
                borderBottom="2px"
                borderColor="gray.300"
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
                <Box d={['none', 'block']}>
                    <SearchBar />
                </Box>

                {/* Navigation (except mobile) */}
                <ButtonGroup size="md" bg="green" d={['none', 'flex']}>
                    <IconButton
                        isRound
                        aria-label="shopping cart"
                        icon={<AiOutlineShoppingCart />}
                    />
                    <IconButton
                        isRound
                        aria-label="wishlist"
                        icon={<AiOutlineHeart />}
                    />
                    <IconButton
                        isRound
                        aria-label="user"
                        icon={<AiOutlineUser />}
                    />
                </ButtonGroup>
            </Flex>

            {/* Expanded categories (mobile version)*/}
            <Slide
                in={isOpen}
                direction="top"
                d={['grid', 'none']}
                unmountOnExit
            >
                <SimpleGrid
                    bg="gray.300"
                    mt={20}
                    zIndex="10"
                    templateColumns="repeat(3, 1fr)"
                    templateRows="repeat(auto, 1fr)"
                    gap="4px"
                    p="4px"
                >
                    <MobileCategoryBtn text="Category" to="/category1" />
                    <MobileCategoryBtn text="Category" to="/category1" />
                    <MobileCategoryBtn text="Category" to="/category1" />
                    <MobileCategoryBtn text="Category" to="/category1" />
                    <MobileCategoryBtn text="Category" to="/category1" />
                    <MobileCategoryBtn text="Category" to="/category1" />
                </SimpleGrid>
            </Slide>
        </Flex>
    );
};

export default Header;

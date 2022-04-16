import React from 'react';
import NextLink from 'next/link';
import {
    Box,
    Flex,
    Link,
    IconButton,
    ButtonGroup,
    useDisclosure,
} from '@chakra-ui/react';
import {
    AiOutlineShoppingCart,
    AiOutlineHeart,
    AiOutlineUser,
} from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import SearchBar from './searchBar';

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex as="header" gap={12} px={4} py={3} align="center" bg="white">
            {/* Store Logo */}
            <NextLink href="/" passHref>
                <Link
                    fontSize="4xl"
                    fontWeight="900"
                    textDecoration="none"
                    color="blue.900"
                >
                    MyStore
                </Link>
            </NextLink>

            {/* hamburger (only mobile) */}
            <IconButton
                d={['inline-flex', 'none']}
                ml="auto"
                aria-label="expand categories"
                icon={<GiHamburgerMenu />}
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
    );
};

export default Header;

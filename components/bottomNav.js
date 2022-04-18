import React, { useState } from 'react';
import {
    Flex,
    ButtonGroup,
    Button,
    Icon,
    Center,
    Slide,
    useDisclosure,
} from '@chakra-ui/react';
import {
    AiOutlineShoppingCart,
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineSearch,
} from 'react-icons/ai';
import SearchBar from './searchBar';

const NavButton = ({ icon, text, handler }) => {
    return (
        <Button
            rounded={false}
            flex="1 0"
            h="100%"
            fontWeight="normal"
            flexDir="column"
            gap={2}
            fontSize="xs"
            onClick={() => handler()}
        >
            <Icon w={6} h={6} as={icon} color="gray.800" />
            {text}
        </Button>
    );
};

const BottomNav = ({ onOpenShoppingCart, onOpenWishlist }) => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Flex
            d={['flex', 'none']}
            pos="fixed"
            size="lg"
            bottom={0}
            w="100vw"
            h={20}
            direction="column"
        >
            <Slide direction="bottom" in={isOpen} unmountOnExit>
                <Center w="100%" bg="gray.300" py={4} px={3} mb={20}>
                    <SearchBar />
                </Center>
            </Slide>
            <ButtonGroup
                zIndex="999"
                borderTop="2px"
                borderColor="gray.300"
                bg="white"
                variant="outline"
                h="100%"
                isAttached
            >
                <NavButton
                    text="Search"
                    icon={AiOutlineSearch}
                    handler={onToggle}
                />
                <NavButton
                    text="Cart"
                    icon={AiOutlineShoppingCart}
                    handler={onOpenShoppingCart}
                />
                <NavButton
                    text="Wishlist"
                    icon={AiOutlineHeart}
                    handler={onOpenWishlist}
                />
                <NavButton text="User" icon={AiOutlineUser} />
            </ButtonGroup>
        </Flex>
    );
};

export default BottomNav;

import React, { useState } from 'react';
import {
    Box,
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
            <Icon w={6} h={6} as={icon} color="blue.900" />
            {text}
        </Button>
    );
};

const BottomNav = () => {
    // const [searchActive, setSearchActive] = useState(true);
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Flex
            pos="fixed"
            size="lg"
            bottom={0}
            w="100vw"
            h={20}
            direction="column"
        >
            <Slide direction="bottom" in={isOpen} unmountOnExit>
                <Center w="100%" bg="blue.900" py={4} px={3} mb={20}>
                    <SearchBar />
                </Center>
            </Slide>
            {/* </Box> */}
            <ButtonGroup
                zIndex="999"
                borderTop="2px"
                borderColor="blue.900"
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
                <NavButton text="Cart" icon={AiOutlineShoppingCart} />
                <NavButton text="Wishlist" icon={AiOutlineHeart} />
                <NavButton text="User" icon={AiOutlineUser} />
            </ButtonGroup>
        </Flex>
    );
};

export default BottomNav;

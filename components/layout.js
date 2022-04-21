import {
    Box,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import BottomNav from './bottomNav';
import Header from './header';
import Cart from './cart';
import Wishlist from './wishlist';
import Head from 'next/head';

const Layout = ({ children }) => {
    const {
        isOpen: isOpenShoppingCart,
        onOpen: onOpenShoppingCart,
        onClose: onCloseShoppingCart,
    } = useDisclosure();

    const {
        isOpen: isOpenWishlist,
        onOpen: onOpenWishlist,
        onClose: onCloseWishlist,
    } = useDisclosure();

    return (
        <React.Fragment>
            <Header />
            <Box px={4} pb={24} maxW="1400px" mx="auto">
                {children}
            </Box>
            <BottomNav
                onOpenShoppingCart={onOpenShoppingCart}
                onOpenWishlist={onOpenWishlist}
            />

            {/* Cart */}
            <Cart isOpen={isOpenShoppingCart} onClose={onCloseShoppingCart} />

            {/* Wishlist */}
            <Wishlist isOpen={isOpenWishlist} onClose={onCloseWishlist} />
        </React.Fragment>
    );
};

export default Layout;

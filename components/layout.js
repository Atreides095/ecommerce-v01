import {
    Box,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import BottomNav from './bottomNav';
import Header from './header';

const Layout = ({ children }) => {
    const {
        isOpen: isOpenShoppingCart,
        onOpen: onOpenShoppingCart,
        onClose: onCloseShoppingCart,
    } = useDisclosure();

    return (
        <React.Fragment>
            <Header />
            <Box px={4}>{children}</Box>
            <BottomNav onOpenShoppingCart={onOpenShoppingCart} />

            {/* Cart */}
            <Drawer
                isOpen={isOpenShoppingCart}
                onClose={onCloseShoppingCart}
                size="full"
                direction="right"
            >
                {/* <DrawerOverlay /> */}
                <DrawerContent>
                    <DrawerCloseButton />
                </DrawerContent>
            </Drawer>
        </React.Fragment>
    );
};

export default Layout;

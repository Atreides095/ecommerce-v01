import React from 'react';
import {
    Box,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerBody,
    Center,
    DrawerOverlay,
} from '@chakra-ui/react';

const Wishlist = ({ isOpen, onClose }) => {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} size="full" direction="right">
            {/* <DrawerOverlay /> */}
            <DrawerContent>
                <DrawerCloseButton size="xl" p={4} />
                <DrawerBody bg="gray.100">
                    <Center h="100%">NOTHING TO SHOW</Center>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default Wishlist;

import { Box } from '@chakra-ui/react';
import React from 'react';
import BottomNav from './bottomNav';
import Header from './header';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <BottomNav />
        </React.Fragment>
    );
};

export default Layout;

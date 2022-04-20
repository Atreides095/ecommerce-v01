import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        body: 'Inter, sans-serif',
        heading: 'Inter, sans-serif',
    },
    components: {
        Button: {
            baseStyle: {
                _focus: { boxShadow: 'none' },
            },
        },
    },
    styles: {},
});

export default theme;

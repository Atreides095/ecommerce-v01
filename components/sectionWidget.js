import React, { useState } from 'react';
import { Heading, Flex, Box, VStack, Image, Text } from '@chakra-ui/react';
import imgBuilder from '../utils/imgBuilder.js';

const SectionItem = ({ item }) => {
    return (
        <Box>
            <Image
                src={imgBuilder(item.image_single, 700, true)}
                alt="Product"
            />
            <Text textAlign="center" fontSize="sm">
                {item.name}
            </Text>
        </Box>
    );
};

const SectionWidget = ({ title, list }) => {
    const [currentActive, setCurrentActive] = useState(3);

    return (
        <Flex flexDir="column">
            <Heading as="h2" fontSize="lg" color="gray.700" mb={2}>
                {title}
            </Heading>
            <Box w="100%" bg="gray.100" p={4}>
                <SectionItem item={list[currentActive]} />
            </Box>
        </Flex>
    );
};

export default SectionWidget;

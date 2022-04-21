import React from 'react';
import {
    IconButton,
    Input,
    InputGroup,
    InputRightAddon,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    return (
        <InputGroup variant="outline" border="2px" borderColor="gray.300">
            <Input placeholder="Search" bg="white" />
            <InputRightAddon w={16} p="0" border="0">
                <IconButton
                    border={0}
                    borderLeftRadius={0}
                    w="100%"
                    colorScheme="gray"
                    icon={<AiOutlineSearch />}
                />
            </InputRightAddon>
        </InputGroup>
    );
};

export default SearchBar;

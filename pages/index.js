import React from 'react';
import axios from 'axios';
import Hero from '../components/hero';
import { Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import SectionWidget from '../components/sectionWidget';

export default function Home({ popular, recent }) {
    return (
        <Flex direction="column" gap={12} align="center" width="100%">
            <Hero src="/images/heroplaceholder.jpg" />
            <SectionWidget title={'POPULAR ITEMS'} list={popular.products} />
            <SectionWidget title={'NEW ITEMS'} list={recent.products} />
        </Flex>
    );
}

export async function getStaticProps(context) {
    const [popular, recent] = await Promise.all([
        axios.get(`${process.env.SERVER_URI}/api/products`, {
            params: { sort: 'popularity' },
        }),
        axios.get(`${process.env.SERVER_URI}/api/products`, {
            params: { sort: '_id' },
        }),
    ]);
    return {
        props: { popular: popular.data, recent: recent.data },
    };
}

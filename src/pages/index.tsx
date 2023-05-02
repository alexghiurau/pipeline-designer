import React from 'react';
import Link from 'next/link';

import { List, Space, Text, Title } from '@mantine/core';

const Home = () => {
  return (
    <>
      <Title>Pipeline Designer</Title>
      <Text>View and edit pipelines right in the browser.</Text>

      <Text c={'blue'}>Features include:</Text>
      <List>
        <List.Item>Viewing pipelines</List.Item>
        <List.Item>... and more to come!</List.Item>
      </List>

      <Space h={'sm'}></Space>

      <Text>
        <Link href='/pipelines'>Pipelines</Link>
      </Text>
      <Text>
        <Link href=''>Docs</Link>
      </Text>
    </>
  );
};

export default Home;

import React from 'react';

import { Container, List, Text, Title } from '@mantine/core';

const Home = () => {
  return (
    <Container>
      <Title>Pipeline Designer</Title>
      <Text>View and edit pipelines right in the browser.</Text>

      <Text c={'blue'}>Features include:</Text>
      <List>
        <List.Item>Viewing pipelines</List.Item>
        <List.Item>... and more to come!</List.Item>
      </List>
    </Container>
  );
};

export default Home;

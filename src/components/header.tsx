import { Group, Flex, Anchor } from '@mantine/core';
import Link from 'next/link';

const Header = () => {
  return (
    <Flex h={60} bg={'red'} align={'center'} justify={'space-between'}>
      <Anchor component={Link} ml={'2rem'} href={'/'}>
        Pipeline Designer
      </Anchor>

      <Group mr={'2rem'}>
        <Anchor component={Link} href={'/pipelines'}>
          Pipelines
        </Anchor>

        <Anchor component={Link} href={''}>
          Docs
        </Anchor>
      </Group>
    </Flex>
  );
};

export default Header;

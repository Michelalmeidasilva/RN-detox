import React, { FC } from 'react';
import { useTheme } from '@react-navigation/native';

import { Column, Row, Text } from 'src/components';

const Home: FC = () => {
  const { colors } = useTheme();

  return (
    <Column alignItems='center' flex={1} justifyContent='center' p='16px'>
      <Row alignItems='center' mb='10px'>
        <Text color={colors.primary} mr={2}>
          Built with react-native-nave-typescript
        </Text>
      </Row>
    </Column>
  );
};

export default Home;
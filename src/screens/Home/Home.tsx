import React, { FC, Fragment, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Switch, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Row } from 'src/components';

interface Item {
  title: string;
  checked: boolean;
}

const items: Item[] = [
  { title: 'Item 1', checked: false },
  { title: 'Item 2', checked: false },
  { title: 'Item 3', checked: true },
  { title: 'Item 4', checked: true },
  { title: 'Item 5', checked: false },
  { title: 'Item 6', checked: true },
  { title: 'Item 7', checked: false },
  { title: 'Item 8', checked: false },
  { title: 'Item 9', checked: false },
  { title: 'Item 10', checked: false },
  { title: 'Item 11', checked: false },
  { title: 'Item 12', checked: false },
  { title: 'Item 13', checked: false },
  { title: 'Item 14', checked: false },
  { title: 'Item 15', checked: false },
  { title: 'Item 16', checked: false },
  { title: 'Item 17', checked: false },
  { title: 'Item 18', checked: false },
  { title: 'Item 19', checked: false },
  { title: 'Item 20', checked: false }
];

const renderItem =
  (colors: any) =>
  ({ item }: { item: Item }) =>
    (
      <Row style={[styles.box, { backgroundColor: colors.primary }]}>
        <Text style={[styles.text, { textDecorationLine: item.checked ? 'line-through' : 'none' }]}>
          {item.title}
        </Text>
      </Row>
    );

const Home: FC = () => {
  const { colors } = useTheme();

  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [data, setData] = useState<Item[]>(items);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    setData(items.filter(item => item.checked === isEnabled));
  }, [isEnabled]);

  return (
    <Fragment>
      <Text>Home</Text>

      <Row>
        <Switch
          testID='switch_button'
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text>Checked</Text>
      </Row>
      <FlatList
        data={data}
        testID='flatlist'
        keyExtractor={(_, index) => `item-${index}`}
        renderItem={renderItem(colors)}
        style={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    backgroundColor: '#32a4e7',
    marginVertical: 5,
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});

export default Home;

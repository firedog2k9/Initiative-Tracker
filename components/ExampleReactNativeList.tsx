import React, { Props, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar, TouchableOpacity, StyleProp } from 'react-native';

import { Text, View } from './Themed';

const selectedColor = "#6e3b6e";
const nonSelectedColor = "#f9c2ff";

const myList = [3, 2, 1];
const myStringList = ['3', '2', '1'];
const exampleInitiativeList = [
  {
    id: "06c36916-d5ae-4c1a-824e-3e9b65ee8587",
    rolledInitiative: 13,
    initiativeModdifier: -1,
    name: "Ronald",
    armourClass: 9,
    hitPoints: 10
  },
  {
    id: "3f55a6a4-0d0b-4603-b8ad-e6dc2e5db1df",
    rolledInitiative: 15,
    initiativeModdifier: 3,
    name: "Fisherman",
    armourClass: 15,
    hitPoints: 10
  },
  {
    id: "46f4de79-a76b-4cb0-9558-750b719dd6b4",
    rolledInitiative: 27,
    initiativeModdifier: 4,
    name: "Sir Testicles",
    armourClass: 20,
    hitPoints: 225
  },
  {
    id: "bc56cba8-34e3-4545-bfd6-901fd32937d5",
    rolledInitiative: 22,
    initiativeModdifier: 2,
    name: "Kindred",
    armourClass: 16,
    hitPoints: 43
  },
  {
    id: "f6932d97-5ccc-4112-b892-f1932495063a",
    rolledInitiative: 0,
    initiativeModdifier: 0,
    name: "Zero",
    armourClass: 10,
    hitPoints: 100
  }
]

interface IItemProps {
  name: string;
}
interface ICreatureProps {
  id: string,
  rolledInitiative: number,
  initiativeModdifier: number,
  name: string,
  armourClass: number,
  hitPoints: number
}
interface ICreature {
  object: ICreatureProps;
}

const ListItem = ({ item, onPress, style }: {item: ICreatureProps, onPress: () => any, style: StyleProp<View>}) => (
//const ListItem = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.name}>{item.name}</Text>
  </TouchableOpacity>
);

export function SelectableList({list}: {list: ICreatureProps[]}) {
//export function SelectableList({list}) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }: {item: ICreatureProps}) => {
    const backgroundColor = item.id === selectedId ? selectedColor :nonSelectedColor;

    return (
      <ListItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View>
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

export default function ExampleList() {

  return (
    <View>
      <SelectableList list={exampleInitiativeList}/>
      <View>
        <Text>
          ToDo: Add a button to add items to list here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
   flex: 1,
   marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 18,
  },
});

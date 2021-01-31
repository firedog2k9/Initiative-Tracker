import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import { Text, View } from './Themed';

const myList = [3, 2, 1];
const myStringList = ['3', '2', '1'];
const exampleInitiativeList = [
  {
    rolledInitiative: 13,
    initiativeModdifier: -1,
    name: "Ronald",
    armourClass: 9,
    hitPoints: 10
  },
  {
    rolledInitiative: 15,
    initiativeModdifier: 3,
    name: "Fisherman",
    armourClass: 15,
    hitPoints: 10
  },
  {
    rolledInitiative: 27,
    initiativeModdifier: 4,
    name: "Sir Testicles",
    armourClass: 20,
    hitPoints: 225
  },
  {
    rolledInitiative: 22,
    initiativeModdifier: 2,
    name: "Kindred",
    armourClass: 16,
    hitPoints: 43
  },
  {
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

const ListItem = ({ name }: IItemProps) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

export default function ExampleList() {
  return (
    <View>
      <View>
        {exampleInitiativeList.map((item) => {
          <ListItem name={item.name}/>
        })}
      </View>
      <View>
        <Text>
          ToDo: Add a button to add items to list here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  name: {
    fontSize: 18,
  },
});

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from './Themed';
import UnorderedList from 'react-native-unordered-list';

const myList = [3, 2, 1];
const myStringList = ['3', '2', '1'];

export function SimpleStringList({ list }: { list: string[]}) {
  return(  
    <View>
      {list.map((item) => (
        <UnorderedList key={item}>
          <Text>{item}</Text>
        </UnorderedList>
      ))}
    </View>
  )
};

export function SimpleNumberList({ list }: { list: number[]}) {
  return(  
    <View>
      {list.map((item) => (
        <UnorderedList key={item}>
          <Text>{item}</Text>
        </UnorderedList>
      ))}
    </View>
  )
};

export default function ExampleList() {
  return (
    <View>
      <View style={styles.listContainer}>
        <SimpleStringList list={myStringList}/>
        <SimpleNumberList list={myList}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 50,
  },
});

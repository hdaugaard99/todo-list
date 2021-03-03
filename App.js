import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [items, setItems] = useState([]);

const addItemHandler = (itemTitle) => {
  setItems((currentItems) => [
    ...items, 
    { uid: Math.random().toString(), value: itemTitle },
  ]);
};

const removeItemHandler = (itemId) => {
  setItems((currentItems) => {
    return currentItems.filter((item) => item.uid !== itemId);
  });
};

  return (
    <View style={styles.container} >
      <Text style={styles.heading} >To-Do List</Text>
      <GoalInput onAddItem = {addItemHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.uid}
        data={items} 
        renderItem={(itemData) => (
          <GoalItem 
            id = {itemData.item.uid}
            onDelete={removeItemHandler.bind(this, itemData.item.uid)}
            title={itemData.item.value} 
          /> 
        )} 
      />
        
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#d2f1e4',
    alignItems: 'center',
    
  },

  heading: {
    width: '100%',
    padding: 15,
    paddingTop: 35,
    fontSize: 48,
    fontWeight: 'bold',
    backgroundColor: '#c60f7b',
    color: '#efefef',
    textAlign: 'center',
    marginBottom: 30,
  },

});

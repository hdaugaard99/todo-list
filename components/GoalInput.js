import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import GoalItem from './GoalItem'


const GoalInput = props => {

    const [enteredItem, setEnteredItem ] = useState("");
    const itemInputHandler = (enteredText) => {
        setEnteredItem(enteredText)
  };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="To-Do List" 
                style={styles.input} 
                onChangeText={itemInputHandler}
                value={enteredItem}
            />
        <Button title="ADD" onPress={props.onAddItem.bind(this, enteredItem)} />
      </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
    
      input: {
        width: "80%",
        borderBottomColor: '#808080',
        backgroundColor: "#fff",
        borderWidth: 1,
        padding: 10,
        borderLeftWidth: 0,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 0,
        borderColor: '#d9d9d9',
      },

})

export default GoalInput
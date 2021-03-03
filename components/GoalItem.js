import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.uid)}>
            <View style={styles.listItem} on>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#fbcaef",
        borderRadius: 10,
        borderLeftWidth: 0,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 0,
        borderColor: '#d9d9d9',
      },
})

export default GoalItem;
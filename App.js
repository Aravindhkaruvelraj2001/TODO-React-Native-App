import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Deletetodo from './delete';
import Addtodo from './add';


export default function App() {

  const [getTodo, setTodo] = useState([
    { list: 'eating', id: '1' },
    { list: 'coding', id: '2' },
    { list: 'sleeping', id: '3' },
    { list: 'repeat', id: '4' },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.id != key);
    });
  }

  const submitHandler = (list) => {
    setTodo((prevTodo) => {
      return [
        { list: list, id: Math.random().toString() },
        ...prevTodo
      ];
    });
  }

  return (
    <View>
      <View>
        <Text style={styles.heading}>My Todo </Text>
        <View>
          <Addtodo submitHandler={submitHandler} />

          <View>
            <FlatList
              data={getTodo}
              renderItem={({item}) => (
                <Deletetodo item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    margin: 10,
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "orange",
    marginTop:40,
  },

});

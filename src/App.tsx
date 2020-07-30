import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navbar from './Navbar';
import AddTodo from './AddTodo';

const App = () => {
  return (
    <View>
      <Navbar />
      <View style={styles.innerContainer}>
        <AddTodo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navbar from '../../components/Navbar';
import useApp from './useApp';
import MainScreen from 'src/screens/MainScreen';
import TodoScreen from 'src/screens/TodoScreen';

const App: React.FC = () => {
  const {todos, todoId, addItem, openItem, removeItem} = useApp();

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.innerContainer}>
        {todoId ? (
          <TodoScreen />
        ) : (
          <MainScreen
            todos={todos}
            addItem={addItem}
            openItem={openItem}
            removeItem={removeItem}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 120,
  },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from 'components/Navbar';
import MainScreen from 'screens/MainScreen';
import TodoScreen from 'screens/TodoScreen';
import THEME from 'theme';
import useApp from './useApp';

const App: React.FC = () => {
  const {
    todos,
    todoId,
    selectedItem,
    addItem,
    openItem,
    updateItem,
    removeItem,
    goBack,
  } = useApp();

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.innerContainer}>
        {todoId ? (
          <TodoScreen
            todo={selectedItem}
            goBack={goBack}
            removeItem={removeItem}
            updateItem={updateItem}
          />
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
    paddingBottom: 120,
    backgroundColor: THEME.WHITE_COLOR,
  },
  innerContainer: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: THEME.PADDING_VERTICAL,
  },
});

export default App;

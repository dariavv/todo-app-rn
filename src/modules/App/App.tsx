import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import Navbar from 'components/Navbar';
import MainScreen from 'screens/MainScreen';
import TodoScreen from 'screens/TodoScreen';
import ScreenContext from 'context/screen/screenContext';

import THEME from 'theme';

const App: React.FC = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.innerContainer}>
        {todoId ? <TodoScreen /> : <MainScreen />}
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

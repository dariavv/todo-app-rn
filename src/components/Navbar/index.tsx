import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {THEME} from 'src/theme';

const Navbar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10,
  },
  text: {
    color: THEME.TEXT_COLOR,
    fontSize: 20,
  },
});

export default Navbar;

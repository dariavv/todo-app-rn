import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import THEME from 'theme';

const styles = StyleSheet.create({
  navbar: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 5,
  },
  text: {
    color: THEME.WHITE_COLOR,
    fontSize: 27,
    fontFamily: 'BadScript-Regular',
  },
});

const Navbar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

export default Navbar;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Navbar = () => {
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
    backgroundColor: '#21B8CF',
    paddingBottom: 10,
  },
  text: {
    color: '#343A40',
    fontSize: 20,
  },
});

export default Navbar;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import THEME from 'theme';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.icon}>
        <Icon name="leaf-outline" size={25} color="#ffffff" />
      </Text>
      <Text style={styles.text}>Ethereal Todo App</Text>
      <Text style={styles.icon}>
        <Icon name="rose-outline" size={25} color="#ffffff" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 5,
  },
  text: {
    color: THEME.WHITE_COLOR,
    fontSize: 27,
    fontFamily: 'BadScript-Regular',
  },
  icon: {
    paddingVertical: 12,
    paddingHorizontal: 9,
  },
});

export default Navbar;

import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import THEME from 'theme';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar: React.FC = () => {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({
          ios: styles.navbarIos,
          android: styles.navbarAndroid,
        }),
      }}>
      <Text style={styles.icon}>
        <Icon
          name="leaf-outline"
          size={25}
          color={Platform.OS === 'ios' ? THEME.TEXT_COLOR : THEME.WHITE_COLOR}
        />
      </Text>
      <Text style={styles.text}>Ethereal Todo App</Text>
      <Text style={styles.icon}>
        <Icon
          name="rose-outline"
          size={25}
          color={Platform.OS === 'ios' ? THEME.TEXT_COLOR : THEME.WHITE_COLOR}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 5,
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarAndroid: {
    height: 70,
  },
  navbarIos: {
    height: 100,
  },
  text: {
    color: Platform.OS === 'ios' ? THEME.TEXT_COLOR : THEME.WHITE_COLOR,
    fontSize: 27,
    fontFamily: 'BadScript-Regular',
  },
  icon: {
    paddingVertical: 12,
    paddingHorizontal: 9,
  },
});

export default Navbar;

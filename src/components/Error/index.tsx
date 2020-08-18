import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import THEME from 'theme';

type ErrorProps = {
  error: any;
  fetchTodos: () => any;
};

const Error: React.FC<ErrorProps> = ({ error, fetchTodos }) => {
  return (
    <View style={styles.errorWrapper}>
      <Text style={styles.error}>{error}</Text>
      <View style={styles.button}>
        <Button
          icon={
            <Icon
              name="repeat"
              size={20}
              color={THEME.WHITE_COLOR}
              style={styles.icon}
            />
          }
          buttonStyle={styles.errorButton}
          title="Repeat"
          type="solid"
          onPress={fetchTodos}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 24,
    fontFamily: 'BadScript-Regular',
    color: THEME.REMOVE_COLOR,
    marginBottom: 30,
  },
  button: {
    width: '40%',
  },
  errorButton: {
    color: THEME.WHITE_COLOR,
    backgroundColor: THEME.REMOVE_COLOR,
  },
  icon: {
    paddingRight: 5,
  },
});

export default Error;

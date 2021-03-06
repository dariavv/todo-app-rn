import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import THEME from 'theme';

const AppLoader: React.FC = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppLoader;

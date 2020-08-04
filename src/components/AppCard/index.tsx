import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import THEME from 'theme';

type AppCardProps = {
  style: {
    marginBottom: number | string;
    padding: number | string;
  };
  children?: ReactNode;
};

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.WHITE_COLOR,
    shadowColor: THEME.GREY_COLOR,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    elevation: 8,
  },
});

const AppCard: React.FC<AppCardProps> = ({ style, children }) => {
  return <View style={{ ...styles.default, ...style }}>{children}</View>;
};

export default AppCard;

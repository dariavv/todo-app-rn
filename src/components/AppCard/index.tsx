import React from 'react';
import {View, StyleSheet} from 'react-native';
import {THEME} from '../../theme';

const AppCard: React.FC<any> = (props) => {
  return (
    <View style={{...styles.default, ...props.style}}>{props.children}</View>
  );
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
    shadowOffset: {width: 2, height: 2},
    elevation: 8,
  },
});

export default AppCard;

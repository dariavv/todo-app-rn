import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import AddTodo from 'modules/AddItem';
import TodoItem from 'components/TodoItem';
import THEME from 'theme';
import TodoContext from 'context/todo/todoContext';
import ScreenContext from 'context/screen/screenContext';
import AppLoader from 'components/AppLoader';

const MainScreen: React.FC = () => {
  const { todos, addItem, removeItem, fetchTodos, loading, error } = useContext(
    TodoContext,
  );
  const { changeScreen } = useContext(ScreenContext);

  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2,
  );

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width);
    };

    Dimensions.addEventListener('change', update);

    return () => Dimensions.removeEventListener('change', update);
  });

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
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
  }

  return (
    <View>
      <AddTodo addItem={addItem} />
      {todos.length ? (
        <View style={{ width: deviceWidth }}>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem
                todo={item}
                openItem={changeScreen}
                removeItem={removeItem}
              />
            )}
          />
        </View>
      ) : (
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/empty.jpg')}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '45%',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
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

export default MainScreen;

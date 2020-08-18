import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';

import AddTodo from 'modules/AddItem';
import TodoItem from 'components/TodoItem';
import TodoContext from 'context/todo/todoContext';
import ScreenContext from 'context/screen/screenContext';
import AppLoader from 'components/AppLoader';
import Error from 'components/Error';
import THEME from 'theme';

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
    return <Error error={error} fetchTodos={fetchTodos} />;
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
});

export default MainScreen;

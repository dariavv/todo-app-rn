import { Alert } from 'react-native';

const URL = 'https://ethereal-todo.firebaseio.com';
const HEADERS = { 'Content-Type': 'application/json' };

export const getData = async () => {
  try {
    const response = await fetch(`${URL}/todos.json`, {
      method: 'GET',
      headers: HEADERS,
    });
    const data = await response.json();
    let todos = [];
    if (data) {
      todos = Object.keys(data).map((key: any) => ({
        ...data[key],
        id: key,
      }));
    }
    return todos;
  } catch (error) {
    Alert.alert('ERROR', `${error}`);
    throw error;
  }
};

export const addData = async (title: string) => {
  try {
    const response = await fetch(`${URL}/todos.json`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ title }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    Alert.alert('ERROR', `${error}`);
    throw error;
  }
};

export const updateData = async (id: string, title: string) => {
  try {
    await fetch(`${URL}/todos/${id}.json`, {
      method: 'PATCH',
      headers: HEADERS,
      body: JSON.stringify({ title }),
    });
  } catch (error) {
    Alert.alert('ERROR', `${error}`);
    throw error;
  }
};

export const removeData = async (id: string) => {
  try {
    await fetch(`${URL}/todos/${id}.json`, {
      method: 'DELETE',
      headers: HEADERS,
    });
  } catch (error) {
    Alert.alert('ERROR', `${error}`);
    throw error;
  }
};

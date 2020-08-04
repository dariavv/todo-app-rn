import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native';
import {THEME} from 'src/theme';

type EditModalProps = {
  value: string;
  visible: boolean;
  setVisible: () => void;
  saveItem: (title: string) => void;
};

const EditModal: React.FC<EditModalProps> = ({
  value,
  visible,
  setVisible,
  saveItem,
}) => {
  const [title, setTitle] = useState<string>(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Error',
        `Minimum name length is 3 characters. ${
          title.trim().length
        } are too few!`,
      );
    } else {
      saveItem(title);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter task name"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={64}
        />
        <View style={styles.buttonsBlock}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color={THEME.REMOVE_COLOR}
              onPress={setVisible}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Save"
              color={THEME.MAIN_COLOR}
              onPress={saveHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 2,
    borderColor: THEME.TEXT_COLOR,
    color: THEME.TEXT_COLOR,
    marginBottom: 20,
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '40%',
  },
});

export default EditModal;

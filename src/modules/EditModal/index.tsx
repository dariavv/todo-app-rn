import React from 'react';
import { View, StyleSheet, TextInput, Modal, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import THEME from 'theme';
import useEditModal from './useEditModal';

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
  const { title, setTitle, saveHandler } = useEditModal({ value, saveItem });
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
          maxLength={35}
        />
        <View style={styles.buttonsBlock}>
          <View style={styles.button}>
            <Button
              icon={
                <Icon name="exit-outline" size={20} color={THEME.WHITE_COLOR} />
              }
              buttonStyle={styles.buttonCancel}
              title="Cancel"
              type="solid"
              onPress={setVisible}
            />
          </View>
          <View style={styles.button}>
            <Button
              icon={
                <Icon
                  name="add-circle-outline"
                  size={20}
                  color={THEME.WHITE_COLOR}
                />
              }
              buttonStyle={styles.buttonSave}
              title="Save"
              type="solid"
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
    marginBottom: 20,
    fontFamily: 'BadScript-Regular',
    borderBottomWidth: 1,
    borderColor: THEME.TEXT_COLOR,
    color: THEME.TEXT_COLOR,
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '40%',
  },
  buttonCancel: {
    color: THEME.WHITE_COLOR,
    backgroundColor: THEME.REMOVE_COLOR,
  },
  buttonSave: {
    color: THEME.WHITE_COLOR,
    backgroundColor: THEME.MAIN_COLOR,
  },
});

export default EditModal;

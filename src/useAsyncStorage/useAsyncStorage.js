import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

let STORAGE_KEY = '@user_input';

export const UseAsyncStorage = () => {
  const [input, setInput] = useState('');

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, input);
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null) {
        setInput(value);
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  useEffect(() => {
    readData();
  }, []);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage. maybe storage is empty');
    }
  };

  const onChangeText = value => setInput(value);
  const onSubmitEditing = () => {
    if (!input) return;
    saveData(input);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.label}>Enter your input here:</Text>
        <TextInput
          style={styles.inputField}
          value={input}
          placeholder="Enter"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <Text style={styles.text}>Your input is {input}</Text>
        <Pressable onPress={clearStorage} style={styles.button}>
          <Text style={styles.buttonText}>Clear Storage</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  panel: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 20,
  },
  text: {
    fontSize: 24,
    paddingTop: 10,
  },
  inputField: {
    backgroundColor: '#fff',
    height: 44,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
    padding: 10,
    marginTop: 12,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    color: '#444',
  },
});

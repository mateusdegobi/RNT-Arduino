import {View, Button} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import axios from 'axios';

export default function App() {
  const enabledLed = useCallback(async () => {
    await axios
      .get('http://192.168.254.170:3000/on')
      .then(item => console.log(item))
      .catch(item => console.log(item));
  }, []);
  const disabledLed = useCallback(async () => {
    await axios.get('http://192.168.254.170:3000/off');
  }, []);
  return (
    <View>
      <Button title="Ligar" onPress={enabledLed} />
      <Button title="Desligar" onPress={disabledLed} />
    </View>
  );
}

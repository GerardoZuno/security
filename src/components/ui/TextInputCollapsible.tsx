import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

const CollapsibleTextInput = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [inputs, setInputs] = useState([{id: 0, text: ''}]);

  const handleAddInput = () => {
    setInputs([...inputs, {id: inputs.length, text: ''}]);
  };

  const handleInputChange = (id: number, text: string) => {
    const updatedInputs = inputs.map(input =>
      input.id === id ? {...input, text} : input,
    );
    setInputs(updatedInputs);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: '#ECECEC',
          borderRadius: 5,
        }}>
        <Text style={{marginRight: 10, color: 'red'}}>
          {isCollapsed ? 'Agregar' : 'Cerrar'}
        </Text>
      </TouchableOpacity>
      {!isCollapsed && (
        <View>
          {inputs.map(input => (
            <TextInput
              key={input.id}
              value={input.text}
              onChangeText={text => handleInputChange(input.id, text)}
              placeholder="Ingrese un valor"
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginBottom: 10,
                backgroundColor: '#f2f2f2',
                borderRadius: 5,
                color: 'red',
              }}
            />
          ))}
          <TouchableOpacity
            onPress={handleAddInput}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: '#f2f2f2',
              borderRadius: 5,
            }}>
            <Text>Agregar otro</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CollapsibleTextInput;

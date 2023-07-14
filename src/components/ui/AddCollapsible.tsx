/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Collapsible from 'react-native-collapsible';
import ArrowDown from '../../assets/svg/components/ArrowDown';
import ArrowUp from '../../assets/svg/components/ArrowUp';
import {COLORS} from '../../constants/theme';
import {Input} from '../Input';

interface Props {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  tittle: string;
  control?: any;
}

const AddCollapsible = ({
  isCollapsed,
  setIsCollapsed,
  tittle,
  control,
}: Props) => {
  const [numInputs, setNumInputs] = useState(1);
  const maxInputs = 3;

  const addInput = () => {
    if (numInputs < maxInputs) {
      setNumInputs(numInputs + 1);
    }
  };

  const removeInput = () => {
    if (numInputs > 1) {
      setNumInputs(numInputs - 1);
    }
  };

  const renderInputs = () => {
    const inputs = [];
    for (let i = 1; i <= numInputs; i++) {
      inputs.push(
        <Input
          key={`diseaseChronic${i}`}
          label={`diseaseChronic${i}`}
          showLabel={false}
          control={control}
          name={`diseaseChronic${i}`}
          placeholderColor={COLORS.lightGray}
          borderBottomColor={COLORS.lightGray}
          fontSize={15}
          textColor={COLORS.lightGray}
          type="text"
          placeholder="Enfermedad crónica (opcional)"
          inputRequired={false}
        />,
      );
    }
    return inputs;
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        style={{
          paddingVertical: 10,
          marginBottom: 0,
        }}>
        <View style={styles.container}>
          <Text
            style={{
              color: '#686868',
              fontSize: 15,
            }}>
            {tittle}
          </Text>
          {isCollapsed ? <ArrowDown /> : <ArrowUp />}
        </View>
      </TouchableOpacity>
      <View style={styles.optionsContainer}>
        <Collapsible collapsed={isCollapsed}>
          <View>
            {renderInputs()}
            {numInputs < maxInputs && (
              <TouchableOpacity onPress={addInput}>
                <Text
                  style={{
                    color: COLORS.secondary,
                  }}>
                  + Agregar
                </Text>
              </TouchableOpacity>
            )}
            {numInputs > 1 && (
              <TouchableOpacity onPress={removeInput}>
                <Text
                  style={{
                    color: COLORS.secondary,
                  }}>
                  {' '}
                  - Eliminar
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </Collapsible>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ECECEC',
  },
  optionsContainer: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 15,
    color: '#686868',
  },
  options: {
    fontSize: 15,
    color: '#686868',

    padding: 10,
  },
  comments: {
    color: COLORS.lightGray,
    padding: 5,
  },
});

export default AddCollapsible;

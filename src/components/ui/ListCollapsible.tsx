/* eslint-disable @typescript-eslint/no-unused-vars */
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
  list: string[];
  tittle: string;
  name?: string;
  setValue?: any;
  control?: any;
  secure?: boolean;
}
const ListCollapsible = ({
  isCollapsed,
  setIsCollapsed,
  list,
  tittle,
  name,
  setValue,
  control,
  secure,
}: Props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const translateToEnglish = (spanishOption: string) => {
    switch (spanishOption) {
      case 'Padre':
        return 'Father';
      case 'Madre':
        return 'Mother';
      case 'Esposo(a)':
        return 'Spouse';
      case 'Hijo(a)':
        return 'Child';
      case 'Hermano(a)':
        return 'Sibling';
      case 'Tio(a)':
        return 'Uncle';
      case 'Primo(a)':
        return 'Cousin';
      case 'Sobrino(a)':
        return 'Nephew';
      case 'Abuelo(a)':
        return 'Grandparent';
      case 'Amigo(a)':
        return 'Friend';
      case 'Masculino':
        return 'M';
      case 'Femenino':
        return 'F';
      case 'A+':
        return 'A+';
      case 'A-':
        return 'A-';
      case 'B+':
        return 'B+';
      case 'B-':
        return 'B-';
      case 'AB+':
        return 'AB+';
      case 'AB-':
        return 'AB-';
      case 'O+':
        return 'O+';
      case 'O-':
        return 'O-';
      case 'IMSS':
        return 'IMSS';
      case 'ISSSTE':
        return 'ISSSTE';
      case 'OTRO':
        return 'Other';
      default:
        return 'Unspecified';
    }
  };

  const handleOptionSelect = (option: string) => {
    const translatedOption = translateToEnglish(option);

    setValue(name, translatedOption);
    setSelectedOption(option);
    setIsCollapsed(true);
  };

  const handleTitleClick = () => {
    if (!selectedOption) {
      setValue(name, 'Unspecified');
      setSelectedOption('Sin Especificar');
    }

    setIsCollapsed(!isCollapsed);
  };

  console.log(selectedOption);

  return (
    <>
      <TouchableOpacity
        onPress={handleTitleClick}
        style={{
          paddingVertical: 10,
          marginBottom: 0,
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {selectedOption ? selectedOption : tittle}
          </Text>
          {isCollapsed ? <ArrowDown /> : <ArrowUp />}
        </View>
      </TouchableOpacity>
      <View style={styles.optionsContainer}>
        <Collapsible collapsed={isCollapsed}>
          <TouchableOpacity
            onPress={() => handleOptionSelect('Sin Especificar')}>
            <Text style={styles.options}>{'Sin Especificar'}</Text>
          </TouchableOpacity>
          {list.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionSelect(option)}>
              <Text style={styles.options}>{option}</Text>
            </TouchableOpacity>
          ))}
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
    marginTop: -10,
  },
  title: {
    color: '#686868',
    fontSize: 15,
    // fontWeight: 'bold',
  },
  options: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: '#686868',
    padding: 10,
  },
});

export default ListCollapsible;

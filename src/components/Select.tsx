import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {COLORS} from '../constants/theme';
import {useController, UseFormSetValue} from 'react-hook-form';

interface SelectProps {
  control: any;
  setValue: UseFormSetValue<any>;
  name: string;
  inputRequired: boolean;
  data: any[];
  placeholder: string;
  label: string;
  isIcon?: boolean;
  icon?: string;
  showLabel?: boolean;
  isPassword?: boolean;
  placeholderColor?: string;
  borderBottomColor?: string;
  textColor?: string;
  fontSize?: number;
  backgroundInput?: string;
  login?: boolean;
}

interface RenderItem {
  index: number;
  item: {
    label: string;
    value: string;
  };
}

export const Select = (props: SelectProps) => {
  const {control, name} = props;
  const {height} = useWindowDimensions();

  const [listVisible, setListVisible] = useState(false);
  const [data, setData] = useState(props.data);

  const {field} = useController({
    control,
    name,
    defaultValue: '+52',
    rules: {
      required: props.inputRequired ? `${props.label} es requerido` : false,
    },
  });

  const handleOption = (item: {label: string; value: string}) => {
    props.setValue('codeCountry', item.value);
    setListVisible(false);
  };

  const onChangeText = (e: string) => {
    field.onChange(e);
    const filter = props.data.filter((item: any) => {
      return (
        item.label.toLowerCase().includes(e.toLowerCase()) ||
        item.value.toLowerCase().includes(e.toLowerCase())
      );
    });

    setData(filter);
  };

  const styles = StyleSheet.create({
    component: {
      width: '100%',
    },
    input: {
      borderBottomColor: props.borderBottomColor
        ? props.borderBottomColor
        : COLORS.black,
      borderBottomWidth: 1,
      color: props.textColor ? props.textColor : COLORS.black,
      fontSize: props.fontSize ? props.fontSize : 20,
      backgroundColor: props.backgroundInput
        ? props.backgroundInput
        : 'transparent',
    },
    wrapperOptions: {
      backgroundColor: 'white',
      zIndex: 1,
      elevation: 1,
      maxHeight: height * 0.15, // 15% of mobile screen
      borderRadius: 4,
      border: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 40, // 12% of mobile screen,
    },
    selectButton: {
      borderBottomColor: '#333333',
      borderBottomWidth: 1,
      paddingVertical: 5,
    },
    text: {
      color: COLORS.black,
      fontSize: 15,
      paddingLeft: 5,
    },
  });

  const renderItem = ({item, index}: RenderItem) => (
    <TouchableOpacity
      onPress={() => handleOption(item)}
      key={index}
      style={styles.selectButton}>
      {props.login ? (
        <Text style={styles.text}>{`${item.label} (${item.value})`}</Text>
      ) : (
        <Text style={styles.text}>{`(${item.label})(${item.value})`}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.component}>
      {props.showLabel ? <Text>{props?.label}</Text> : null}
      <TextInput
        value={field.value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={props.isPassword ? true : false}
        placeholder={props.placeholder}
        placeholderTextColor={
          props.placeholderColor ? props.placeholderColor : COLORS.black
        }
        onPressIn={() => setListVisible(true)}
      />
      {listVisible ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          // keyExtractor={data.label}
          style={styles.wrapperOptions}
        />
      ) : null}
    </View>
  );
};

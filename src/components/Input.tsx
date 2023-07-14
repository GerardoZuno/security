import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS} from '../constants/theme';
import {check} from '../assets/icons/index';
import {useController} from 'react-hook-form';

interface InputProps {
  control?: any;
  name: string;
  inputRequired?: boolean;
  placeholder: string;
  label: string;
  showLabel?: boolean;
  type: string;
  isIcon?: boolean;
  icon?: string;
  isNumber?: boolean;
  placeholderColor?: string;
  borderBottomColor?: string;
  textColor?: string;
  fontSize?: number;
  tintColor?: string;
  backgroundInput?: string;
  numberOfLines?: number;
  textVertical?: boolean;
  check?: boolean;
  warning?: boolean;
}

export const Input = (props: InputProps) => {
  const {control, name} = props;

  const patternTypesToHandler: {[key: string]: RegExp} = {
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/,
    phone: /^(\+\d{2})?(\d{10}|\d{12})$/g,
  };

  const handlerTypesPattern = (inputType: string) => {
    return patternTypesToHandler[inputType];
  };

  const {field} = useController({
    control,
    name,
    defaultValue: '',
    rules: {
      required: props.inputRequired
        ? // ? 'Campo requerido'
          // : ''
          name === 'newPassword'
          ? 'Nueva contraseña es requerida'
          : name === 'repeatPassword'
          ? 'Confirmar contraseña es requerida'
          : `${props.label} es requerido`
        : false,
      pattern: {
        value: handlerTypesPattern(props.type),
        message:
          props.type === 'email'
            ? 'Ingrese un email válido'
            : 'Teléfono debe tener 10 dígitos',
      },
      validate: value => {
        if (
          name === 'fullName' ||
          name === 'fullName2' ||
          name === 'fullName3' ||
          name === 'lastName' ||
          name === 'firstName'
        ) {
          if (value.length < 3) {
            return `${props.label} debe tener al menos 3 caracteres`;
          }
        }
        if (name === 'message') {
          if (value.length < 10) {
            return `${props.label} debe tener al menos 10 caracteres`;
          }
        }
        if (props.type === 'phone') {
          if (value.length < 10) {
            return 'El número de teléfono debe tener al menos 10 dígitos';
          }
        }
        if (props.type === 'password') {
          if (value.length < 8) {
            return 'La contraseña debe tener al menos 8 caracteres';
          }
          if (!/[A-Z]/.test(value)) {
            return 'La contraseña debe contener al menos una letra mayúscula';
          }
          if (!/[a-z]/.test(value)) {
            return 'La contraseña debe contener al menos una letra minúscula';
          }
          if (!/[0-9]/.test(value)) {
            return 'La contraseña debe contener al menos un número';
          }
        }
        return true;
      },
    },
  });

  const [passwordVisible, setPasswordVisible] = useState(
    props.type?.includes('password'),
  );

  const onPress = () => {
    // eslint-disable-next-line curly
    if (!props.type.includes('password')) return;

    setPasswordVisible(!passwordVisible);
  };

  const styles = StyleSheet.create({
    component: {
      width: '100%',
      position: 'relative',
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
    iconContainer: {
      position: 'relative',
    },
    icon: {
      tintColor: props.tintColor ? props.tintColor : COLORS.black,
      position: 'absolute',
      // width: props.warning ? (props.check ? 22 : 20) : 18,
      // height: props.warning ? (props.check ? 19 : 20) : 15,
      right: 8,
      bottom: 10,
    },
  });

  return (
    <View style={styles.component}>
      {props.showLabel ? <Text>{props?.label}</Text> : null}
      <TextInput
        numberOfLines={props.numberOfLines ? props.numberOfLines : 1}
        textAlignVertical={props.textVertical ? 'top' : 'center'}
        value={field.value}
        onChangeText={field.onChange}
        style={styles.input}
        secureTextEntry={passwordVisible}
        placeholder={props.placeholder}
        keyboardType={props.isNumber ? 'numeric' : 'default'}
        placeholderTextColor={
          props.placeholderColor ? props.placeholderColor : COLORS.black
        }
      />
      {props?.isIcon ? (
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onPress}>
            <Image source={props?.icon ?? check} style={styles.icon} />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

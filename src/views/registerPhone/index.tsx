/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {Input} from '../../components/Input';
import {COLORS} from '../../constants/theme';

import {Select} from '../../components/Select';
import {Button} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import useTheme from '../../hooks/useTheme';
const QUARTER_SCREEN = 1.8;

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Register Phone'
>;

const RegisterPhone = ({route}: any) => {
  const newUser = route.params;

  const {height, width} = useWindowDimensions();
  const [errorMessage, setErrorMessage] = useState<any>();

  const {navigate} = useNavigation<NavigationType>();
  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors},
  } = useForm<{codeCountry: string; phone: string}>();

  console.log(errors);

  const onSubmit = async (data: any) => {
    console.log('data: ', data);
    const newPhone = data.codeCountry + data.phone;

    try {
      const {user} = await Auth.signUp({
        username: newPhone,
        password: newUser.password,
        attributes: {
          email: newUser.email,
          name: newUser.fullName,
          phone_number: newPhone,
        },
      });
      console.log('user: ', user);
      navigate('Verify_Phone', {phone: newPhone});
    } catch (error: any) {
      if (error.code === 'UsernameExistsException') {
        setErrorMessage('Error el usuario ya existe.');
      } else {
        console.log('error: ', error);
        setErrorMessage('Error en el registro');
        // Maneja otros errores de manera apropiada
      }
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  const countries = [
    {
      label: 'Mexico',
      value: '+52',
    },
    {
      label: 'USA',
      value: '+1',
    },
    {
      label: 'India',
      value: '+91',
    },
    {
      label: 'China',
      value: '+86',
    },
  ];

  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.primary,
      height: height,
      width: width,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      backgroundColor: COLORS.primary,
      paddingHorizontal: '10%',
      paddingVertical: '10%',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: height / QUARTER_SCREEN,
      marginTop: '-25%',
    },
    containerTitle: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
    },
    title: {
      fontSize: 25,
      color: COLORS.white,
      fontWeight: 'bold',
    },
    textError: {
      color: 'red',
    },
    legend: {
      color: COLORS.white,
    },
    containerInputs: {
      width: '100%',
    },
    button: {
      backgroundColor: COLORS.secondary,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>NÚMERO TELEFÓNICO</Text>
        </View>
        <View style={styles.containerInputs}>
          <Select
            setValue={setValue}
            name="codeCountry"
            label="código de país"
            showLabel={false}
            control={control}
            inputRequired
            data={countries}
            placeholder="País"
            placeholderColor={COLORS.white}
            borderBottomColor={COLORS.white}
            textColor={COLORS.white}
            fontSize={16}
          />
          <Input
            control={control}
            inputRequired
            type="phone"
            name="phone"
            label="phone"
            showLabel={false}
            placeholder="Teléfono (10 dígitos)"
            placeholderColor={COLORS.white}
            borderBottomColor={COLORS.white}
            textColor={COLORS.white}
            isNumber
            fontSize={16}
          />
          {errors.phone && (
            <Text style={styles.textError}>{errors.phone.message}</Text>
          )}
          {errorMessage && <Text style={styles.textError}>{errorMessage}</Text>}
        </View>
        <View style={{width: '100%'}}>
          <Text style={styles.legend}>
            Enviaremos un código de confirmación a este número telefónico
          </Text>
        </View>
        <View>
          <Button
            // onPress={() => navigate('Success', {to: 'Home'})}
            onPress={handleSubmit(onSubmit)}
            textBold={true}
            label="Siguiente"
            textColor={COLORS.white}
            buttonHeight={40}
            buttonWidth={200}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPhone;

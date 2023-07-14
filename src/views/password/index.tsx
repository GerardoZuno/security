/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  // Image,
} from 'react-native';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {eye, check, cancel, check1} from '../../assets/icons';
import {useForm} from 'react-hook-form';
import useTheme from '../../hooks/useTheme';


export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Sent Email'
>;

const Password = () => {
  const COLORS = useTheme();

  const {height} = useWindowDimensions();
  const {navigate} = useNavigation<NavigationType>();
  const [email, setEmail] = useState('');


  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: {errors},
  } = useForm<{email: string; password: string}>();

  const emailValue = watch('email');

  console.log('emailValue: ', emailValue);

  const onSubmit = (data: any) => {
    console.log(data.email);
    navigate('Sent Email', {email: data.email});

  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,

      flex: 1,
      height: height,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    wrapper: {
      paddingHorizontal: '10%',
      paddingVertical: '10%',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: COLORS.white,
      height: '50%',
    },
    imgWrapper: {
      paddingHorizontal: '10%',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    containerTitle: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    header: {
      backgroundColor: COLORS.white,
      width: '100%',
      height: '15%',
    },
    title: {
      fontSize: 20,
      color: '#4A4A4A',
      fontWeight: '900',
      textTransform: 'uppercase',
    },
    subtitle: {
      fontSize: 15,
      color: COLORS.white,
      fontWeight: 'bold',
    },
    containerInputs: {
      width: '100%',
    },
    button: {
      backgroundColor: COLORS.secondary,
    },
    wrapperImgJuarez: {
      width: 200,
      height: 200,
    },

    imgJuarez: {
      width: '100%',
      height: '100%',
    },
    textStyle: {
      fontSize: 18,
      color: COLORS.black,
      fontWeight: '500',
    },
    textError: {
      color: 'red',
    },
    img: {
      resizeMode: 'contain',
      width: Dimensions.get('window').width / 4,
    },
    footer: {
      width: '100%',
      height: '35%',
      display: 'flex',
      alignItems: 'center',
    },
  });

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View
          style={styles.header}
        />

        {/* Main */}

        <View style={styles.wrapper}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Olvidaste tu contraseña?</Text>
          </View>
          <View style={styles.containerInputs}>
            <Text style={styles.textStyle}>Dirección de correo </Text>
            <Input
              control={control}
              name="email"
              placeholder="usuario@gmail.com"
              showLabel={false}
              label="email"
              type="email"
              placeholderColor={COLORS.black}
              borderBottomColor={COLORS.black}
              textColor={COLORS.black}
              fontSize={16}
              inputRequired
              isIcon={emailValue === undefined ? false : true}
              icon={!errors.email ? check1 : cancel}
              check={true}
            />
             {errors.email && (
              <Text style={styles.textError}>{errors.email.message}</Text>
            )}
          </View>


          <View
            style={{ width: '100%'}}>
            <Button
            onPress={handleSubmit(onSubmit)}
            textBold={true}
              label="Recuperar contraseña"
              textColor={COLORS.white}
              buttonHeight={40}
              buttonWidth={'100%'}
            />
          </View>

          <View />
        </View>

        {/* Footer */}
        <View style={styles.footer} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Password;

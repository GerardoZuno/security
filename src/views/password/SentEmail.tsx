/* eslint-disable react-native/no-inline-styles */
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
import {eye, check, cancel} from '../../assets/icons';
import {useForm} from 'react-hook-form';
import {AuthContext} from '../../store/authContext';
import useTheme from '../../hooks/useTheme';

const QUARTER_SCREEN = 1.8;

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

const SentEmail = ({route}: any) => {
  const COLORS = useTheme();

  const {height, width} = useWindowDimensions();
  const {navigate} = useNavigation<NavigationType>();
  const {login, isLogged} = useContext(AuthContext);
  console.log('isLogged: ', isLogged);

  const {email} = route.params;
  console.log('email: ', email);

  const {
    handleSubmit,
    control,
    watch,
    formState: {errors},
  } = useForm<{email: string; password: string}>();

  const emailValue = watch('email');

  const onSubmit = (data: any) => {
    console.log('data: ', data);
    // navigate('Success', {to: 'Home'});
    login();
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
      fontWeight: '900',
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
      fontSize: 15,
      color: COLORS.black,
      fontWeight: '500',
      textAlign: 'left',
      //   textTransform: 'uppercase',
    },
    email: {
      color: COLORS.primary,
      fontWeight: 'bold',
    },
    img: {
      resizeMode: 'contain',
      width: Dimensions.get('window').width / 4,
    },
    footer: {
      width: '100%',
      height: '35%',
      // backgroundColor: COLORS.pink,
      display: 'flex',
      alignItems: 'center',
    },
  });

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header} />

        {/* Main */}

        <View style={styles.wrapper}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Correo enviado</Text>
          </View>
          <View style={styles.containerInputs}>
            <Text style={styles.textStyle}>
              Enviamos un correo electrónico con un enlace para cambiar tu
              contraseña a la dirección de correo:{' '}
            </Text>
            <Text style={styles.email}>{email}</Text>
          </View>

          <View
            style={{
              // marginBottom: 30,
              width: '100%',
            }}>
            <Button
              onPress={() => navigate('Change Password')}
              // onPress={handleSubmit(onSubmit)}
              textBold={true}
              label="Siguiente"
              textColor={COLORS.white}
              buttonHeight={40}
              buttonWidth={200}
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

export default SentEmail;

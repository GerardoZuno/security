/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {eye, check, cancel, eye1} from '../../assets/icons';
import Emergencia from '../../assets/svg/components/Emergencia';
import {LogoPolice} from '../../assets/svg/components/LogoPolice';
import AdminJuarez from '../../assets/svg/components/AdminJuarez';
import {VigilanteBig} from '../../assets/svg/components/VigilanteBig';
import {Auth} from 'aws-amplify';
import {signup} from '../../sdk/auth';
import Emergency911 from '../../assets/svg/components/Emergency911';
import {COLORS} from '../../constants/theme';

import {Select} from '../../components/Select';
import useTheme from '../../hooks/useTheme';

const QUARTER_SCREEN = 1.8;

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Register'
>;

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<any>();
  const {height, width} = useWindowDimensions();
  const {navigate} = useNavigation<NavigationType>();

  const {
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: {errors},
  } = useForm<{
    fullName: string;
    email: string;
    password: string;
    phone: string;
  }>();

  const emailValue = watch('email');

  const onSubmit = async (data: any) => {
    const validEmail = data.email.trim();
    console.log(validEmail.length);

    // try {
    //   const {user} = await Auth.signUp({
    //     username: data.phone,
    //     password: data.password,
    //     attributes: {
    //       email: data.email,
    //       name: data.fullName,
    //       phone_number: data.phone,
    //     },
    //   });
    //   console.log('user: ', user);
    //   navigate('Verify_Phone', {phone: data.phone});

    navigate('Register Phone', {
      email: validEmail,
      name: data.fullName,
      password: data.password,
    });
    reset();
    // } catch (error: any) {
    //   if (error.code === 'UsernameExistsException') {
    //     setErrorMessage('Error el usuario ya existe.');
    //   } else {
    //     setErrorMessage('Error en el registro');
    //     // Maneja otros errores de manera apropiada
    //   }
    //   setTimeout(() => {
    //     setErrorMessage('');
    //   }, 3000);
    // }
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
      backgroundColor: COLORS.white,
      width: '100%',
      height: '50%',
    },
    header: {
      backgroundColor: COLORS.white,
      width: '100%',
      height: '20%',
    },
    imgWrapper: {
      paddingHorizontal: '10%',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    containerTitle: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
      color: '#4A4A4A',
      fontWeight: 'bold',
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
    textStyle: {
      fontSize: 20,
      color: COLORS.secondary,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    img: {
      resizeMode: 'contain',
      width: Dimensions.get('window').width / 4,
    },

    footer: {
      width: '100%',
      height: '30%',
      display: 'flex',
      alignItems: 'center',
      // backgroundColor: 'red',
    },
    textError: {
      color: 'red',
    },
  });

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imgWrapper}>
            <LogoPolice />

            <AdminJuarez />
            <Emergency911 />
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>REGISTRARSE</Text>
            <Button
              label="INICIAR SESIÓN"
              onPress={() => navigate('Login')}
              backgroundButton="transparent"
              fontSize={12}
              textBold
              textColor={'#4A4A4A'}
            />
          </View>
          <View style={styles.containerInputs}>
            <Input
              control={control}
              name="fullName"
              inputRequired
              label="Nombre completo"
              type="text"
              showLabel={false}
              placeholder="Nombre completo"
              placeholderColor={COLORS.black}
              borderBottomColor={COLORS.black}
              textColor={COLORS.black}
              fontSize={16}
            />
            {errors.fullName && (
              <Text style={styles.textError}>{errors.fullName.message}</Text>
            )}
            <Input
              control={control}
              name="email"
              inputRequired
              label="Correo"
              type="email"
              showLabel={false}
              placeholder="Correo electronico"
              placeholderColor={COLORS.black}
              borderBottomColor={COLORS.black}
              textColor={COLORS.black}
              fontSize={16}
              isIcon={emailValue === undefined ? false : true}
              icon={!errors.email ? check : cancel}
              check
            />
            {errors.email && (
              <Text style={styles.textError}>{errors.email.message}</Text>
            )}
            {errorMessage && (
              <Text style={styles.textError}>{errorMessage}</Text>
            )}
            <Input
              control={control}
              name="password"
              inputRequired
              label="Contraseña"
              type="password"
              showLabel={false}
              placeholder="Contraseña"
              placeholderColor={COLORS.black}
              borderBottomColor={COLORS.black}
              textColor={COLORS.black}
              fontSize={16}
              isIcon
              icon={eye1}
            />
            {errors.password && (
              <Text style={styles.textError}>{errors.password.message}</Text>
            )}
          </View>
          <View>
            <Button
              onPress={handleSubmit(onSubmit)}
              textBold={true}
              label="Siguiente"
              textColor={COLORS.white}
              buttonHeight={40}
              buttonWidth={200}
              marginVertical={20}
            />
          </View>
        </View>

        <View style={styles.footer}>
          {/* <Image
            source={vigilant}
            // style={{
            //   resizeMode: 'contain',
            //   width: Dimensions.get('window').width / 2,
            // }}
          /> */}
          <VigilanteBig />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

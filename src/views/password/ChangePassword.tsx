/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '../../constants/theme';

import {eye, check, cancel, eye1} from '../../assets/icons';
import {set, useForm} from 'react-hook-form';
import {AuthContext} from '../../store/authContext';
import useTheme from '../../hooks/useTheme';

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

const ChangePassword = () => {
  const {height, width} = useWindowDimensions();
  const {navigate} = useNavigation<NavigationType>();
  const {login, isLogged} = useContext(AuthContext);

  const [alert, setAlert] = useState('');
  console.log('isLogged: ', isLogged);

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: {errors},
  } = useForm<{newPassword: string; repeatPassword: string}>();

  const onSubmit = (data: any) => {
    console.log('data: ', data);
    if (data.newPassword !== data.repeatPassword) {
      setAlert('Las contraseñas no coinciden');
      setTimeout(() => {
        setAlert('');
      }, 3000);
      return;
    }
    reset();
    navigate('Login');

    //   setTimeout(() => {
    //     setAlert('');
    //   }, 3000);
    // } else {
    //   console.log('data: ', data);
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
    header: {
      backgroundColor: COLORS.white,
      width: '100%',
      height: '15%',
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
        <View style={styles.header} />

        {/* Main */}

        <View style={styles.wrapper}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Cambiar contraseña</Text>
          </View>
          <View style={styles.containerInputs}>
            <Text style={styles.textStyle}>Nueva contraseña </Text>
            <Input
              control={control}
              name="newPassword"
              placeholder="Nueva contraseña"
              showLabel={false}
              label="newPassword"
              placeholderColor={COLORS.black}
              borderBottomColor={COLORS.black}
              textColor={COLORS.black}
              fontSize={16}
              inputRequired
              isIcon
              icon={eye1}
              type="password"
            />
            {errors.newPassword && (
              <Text style={styles.textError}>{errors.newPassword.message}</Text>
            )}
            {alert !== '' && <Text style={styles.textError}>{alert}</Text>}

            <Text style={{...styles.textStyle, marginTop: 20}}>
              Confirmar contraseña{' '}
            </Text>
            <Input
              control={control}
              name="repeatPassword"
              placeholder="Confirmar contraseña"
              showLabel={false}
              label="repeatPassword"
              type="password"
              placeholderColor={COLORS.black}
              borderBottomColor={COLORS.black}
              textColor={COLORS.black}
              fontSize={16}
              inputRequired
              isIcon
              icon={eye1}
            />
            {errors.repeatPassword && (
              <Text style={styles.textError}>
                {errors.repeatPassword.message}
              </Text>
            )}
            {alert !== '' && <Text style={styles.textError}>{alert}</Text>}
          </View>

          <View
            style={{
              width: '100%',
              marginTop: 20,
            }}>
            <Button
              onPress={handleSubmit(onSubmit)}
              textBold={true}
              label="Cambiar contraseña"
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

export default ChangePassword;

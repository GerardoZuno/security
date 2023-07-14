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

import {eye, check1, cancel, alert, error, eye1} from '../../assets/icons';
import {useForm} from 'react-hook-form';
import {onLogin} from '../../sdk/auth';
import {AuthContext} from '../../store/authContext';
import AdminJuarez from '../../assets/svg/components/AdminJuarez';
import {LogoPolice} from '../../assets/svg/components/LogoPolice';
import {VigilanteBig} from '../../assets/svg/components/VigilanteBig';
import Loading from '../../components/ui/Loading';
import Emergency911 from '../../assets/svg/components/Emergency911';
import {Select} from '../../components/Select';
import useTheme from '../../hooks/useTheme';

const QUARTER_SCREEN = 1.8;

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

const Login = () => {
  const {height} = useWindowDimensions();
  const {navigate} = useNavigation<NavigationType>();
  const {login} = useContext(AuthContext);
  const [warning, setWarning] = useState('');
  const [isLoading, setIsLoading] = useState(false); // nuevo estado
  const [errorMsg, setErrorMsg] = useState('');
  const [errorIcon, setErrorIcon] = useState(false);

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: {errors},
  } = useForm<{email: string; password: string}>();

  const emailValue = watch('email');

  const onSubmit = async (data: any) => {
    console.log('data: ', data);
    const responseLogin = await onLogin(data);
    if (responseLogin) {
      setIsLoading(true);
      login();
      console.log('responseLogin: ', responseLogin);
      setErrorMsg('');
    } else {
      setWarning('red');
      if (error.code === 'UsernameExistsException') {
        setErrorMsg('Usuario no confirmado.');
      }
      setErrorMsg('Usuario o contraseña incorrectos');
      setErrorIcon(true);
      setIsLoading(false);
      setTimeout(() => {
        setWarning('');
        setErrorMsg('');
        setErrorIcon(false);
      }, 4000);
    }
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
      fontWeight: '700',
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
      color: COLORS.secondary,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    img: {
      resizeMode: 'contain',
      width: Dimensions.get('window').width / 4,
    },
    errorMsg: {
      color: 'red',
      fontSize: 12,
    },
    header: {
      backgroundColor: COLORS.white,
      width: '100%',
      height: '20%',
    },
    footer: {
      width: '100%',
      height: '30%',
      display: 'flex',
      alignItems: 'center',
    },
    textError: {
      color: 'red',
    },
  });

  const countries = [
    {
      label: 'MX',
      value: '+52',
    },
    {
      label: 'US',
      value: '+1',
    },
    {
      label: 'IN',
      value: '+91',
    },
    {
      label: 'CN',
      value: '+86',
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {/* Header */}

        <View style={styles.header}>
          <View style={styles.imgWrapper}>
            <LogoPolice />

            <AdminJuarez />
            <Emergency911 />
          </View>
        </View>

        {/* Main */}

        <View style={styles.wrapper}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>iniciar sesión</Text>
            <Button
              label="REGISTRARSE"
              onPress={() => navigate('Register')}
              backgroundButton="transparent"
              fontSize={12}
              textBold
              textColor={'#4A4A4A'}
            />
          </View>
          <View style={styles.containerInputs}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              {/* <View
                style={{
                  width: '25%',
                  marginRight: 20,
                }}>
                <Select
                  setValue={setValue}
                  name="codeCountry"
                  label="código de país"
                  showLabel={false}
                  control={control}
                  inputRequired
                  data={countries}
                  placeholder="País"
                  placeholderColor={COLORS.black}
                  borderBottomColor={COLORS.black}
                  textColor={COLORS.black}
                  fontSize={16}
                />
              </View>  */}

              <View
                style={{
                  width: '100%',
                }}>
                <Input
                  control={control}
                  name="email"
                  placeholder="Usuario"
                  showLabel={false}
                  label="Usuario"
                  type="text"
                  placeholderColor={COLORS.black}
                  borderBottomColor={warning ? warning : COLORS.black}
                  textColor={warning ? warning : COLORS.black}
                  fontSize={16}
                  inputRequired
                  isIcon={emailValue === undefined ? false : true}
                  icon={!errors.email ? (warning ? error : check1) : cancel}
                  check={true}
                  warning={errorIcon}
                  tintColor={warning ? COLORS.secondary : COLORS.black}
                />
                {errors.email && (
                  <Text style={styles.textError}>{errors.email.message}</Text>
                )}
                {errorMsg ? (
                  <Text style={styles.errorMsg}>{errorMsg}</Text>
                ) : null}
              </View>
            </View>

            <Input
              control={control}
              name="password"
              label="Contraseña"
              inputRequired
              placeholder="Contraseña"
              type="password"
              isIcon
              showLabel={false}
              icon={warning ? error : eye1}
              placeholderColor={COLORS.black}
              borderBottomColor={warning ? warning : COLORS.black}
              textColor={warning ? warning : COLORS.black}
              fontSize={16}
              check={true}
              warning={errorIcon}
              tintColor={warning ? COLORS.secondary : COLORS.black}
            />
            {errors.password && (
              <Text style={styles.textError}>{errors.password.message}</Text>
            )}
            {errorMsg ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}
          </View>

          <View>
            <Button
              onPress={() => navigate('Password')}
              label="¿Olvidaste tu contraseña?"
              backgroundButton="transparent"
              buttonWidth={200}
              textBold={true}
              buttonHeight={35}
              textColor={COLORS.black}
              marginVertical={10}
            />
          </View>

          <View>
            <Button
              onPress={handleSubmit(onSubmit)}
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
        <View style={styles.footer}>
          <VigilanteBig />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

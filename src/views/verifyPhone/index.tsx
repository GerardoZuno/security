/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {Button} from '../../components/Button';
import {COLORS} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {confirm, resendCode} from '../../sdk/auth';
import {Auth} from 'aws-amplify';

const QUARTER_SCREEN = 1.8;
const CELL_COUNT = 6;

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Verify_Phone'
>;

const VerifyPhone = ({route}: any) => {
  const {height, width} = useWindowDimensions();
  const {navigate} = useNavigation<NavigationType>();
  const [errorCode, setErrorCode] = useState('');
  const [value, setValue] = useState('');
  const {phone, email} = route.params;

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
      paddingHorizontal: '10%',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: height / QUARTER_SCREEN,
      marginTop: '-25%',
    },
    containerTitle: {
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    title: {
      fontSize: 30,
      color: COLORS.white,
      textAlign: 'left',
      fontWeight: 'bold',
    },
    legend: {
      marginTop: 5,
      fontSize: 14,
      textAlign: 'left',
      color: COLORS.white,
    },
    containerInputs: {
      width: '100%',
    },
    button: {
      backgroundColor: COLORS.secondary,
    },
    focusCell: {
      borderColor: COLORS.black,
    },
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 30,
      color: COLORS.white,
      borderBottomWidth: 2,
      borderBottomColor: COLORS.white,
      textAlign: 'center',
    },
    codeFieldRoot: {marginTop: 20},
    reSent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    mt3: {
      marginTop: 3,
    },
  });

  const handleRegister = async (code: string) => {
    const validCode = code.toString();
    console.log(validCode);
    try {
      const response = await confirm({
        account: phone,
        code: validCode,
      });
      navigate('Login');
      console.log(response);
    } catch (error: any) {
      if (error.code === 'CodeMismatchException') {
        setErrorCode('Código incorrecto');
      }
      setTimeout(() => {
        setErrorCode('');
      }, 3000);

      console.log(error);
    }
  };

  const resendCodeEmail = async (username: string) => {
    await resendCode(username);
    setErrorCode('Código reenviado');
    setTimeout(() => {
      setErrorCode('');
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>VERIFICACIÓN</Text>
          <Text style={styles.legend}>Ingrese el código de confirmación</Text>
        </View>
        <View style={styles.containerInputs}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
            }}>
            {errorCode}
          </Text>
        </View>
        <View style={styles.reSent}>
          <Text style={styles.legend}>
            ¿No recibiste el código de confirmación?{' '}
          </Text>
          <View style={styles.mt3}>
            <Button
              onPress={() => resendCodeEmail(phone)}
              label="Volver a enviar"
              backgroundButton="transparent"
              buttonWidth={180}
              textBold
              textColor={COLORS.white}
            />
          </View>
        </View>

        <View>
          <Button
            onPress={() => handleRegister(value)}
            textBold={true}
            label="Verificar"
            buttonHeight={40}
            buttonWidth={200}
            // marginVertical={20}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyPhone;

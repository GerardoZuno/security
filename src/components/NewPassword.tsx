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
import {COLORS} from '../constants/theme';
import {Input} from './Input';
import {eye1, reload} from '../assets/icons';
import {Button} from './Button';
import {AuthContext} from '../store/authContext';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigation/routes/auth';
import {Auth} from 'aws-amplify';

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

const NewPassword = () => {
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
  } = useForm<{currentPassword: string; newPassword: string}>();

  const onSubmit = async (data: any) => {
    console.log('data: ', data);
    const user =
      'eyJraWQiOiIxOFZyMFluNVlGWFJiUFwvb1pRcVB2NjMzbFp2aDFFaEc2R1JFS2xUMEZlOD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1OGQwNjcwYy0xYThlLTQ5Y2MtOWY0Ny1kNDBkMjJkYTZmMjMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV90N3dMUTA2V3EiLCJjbGllbnRfaWQiOiI3bDQ0aW1lcXI1cWRybGplZTJ2NDkwa25kNSIsIm9yaWdpbl9qdGkiOiI5MzUzYTQ3NS03N2Y3LTQwMDctODIyNy1lYWExYTdmNzRjYTciLCJldmVudF9pZCI6IjBiNmM3NDRiLWIxZDktNGVkOC05Y2ZkLTNiOTg2YzQ1M2NkYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODYzNDQ1MDEsImV4cCI6MTY4NjM0ODEwMSwiaWF0IjoxNjg2MzQ0NTAxLCJqdGkiOiIzNzE5MDJhZS05MjJiLTQ4OWUtYTFhMi02OTA2Yzg5NzU2OTgiLCJ1c2VybmFtZSI6IjU4ZDA2NzBjLTFhOGUtNDljYy05ZjQ3LWQ0MGQyMmRhNmYyMyJ9.NrVXuHuerO-PgIxga_ymGuiyZqfxIYB0ks3Vpx1m3W4s6PK0XjxSGT-lxQkrf-xC6AMWNFzYjG4cSURgYh0k13disxcF5LCc2cne2M_T5O94ltjBx7lyKdF1A_e7v_Nf-Vx0A4slkWEPdh6Q3HuSq-diFWnnZKISp7OR8kfbg304EnRIabRMrYl71OAMETPBg124hiGWqVLRJ0VhGPBN3uY_wA-h4CgWdK8uTZGaGPSqKJL0xPWUZOV_XObKWVUGH5hHnB67b2lb-YjgzMnCfIEy2vYn3oVTNqlKyqBNPdMNXHreAHDlKEuBDkbphC6jaFHWVStQ99h03OX1eRYPhg';
    console.log('user: ', user);

    const response = await Auth.changePassword(
      user,
      data.currentPassword,
      data.newPassword,
    );

    console.log('response: ', response);
    // reset();
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
      color: COLORS.lightGray,
      marginBottom: 10,
      // fontWeight: '900',
      // textTransform: 'uppercase',
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
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Cambiar contraseña</Text>
      </View>
      <View style={styles.containerInputs}>
        <Input
          control={control}
          name="currentPassword"
          placeholder="Contraseña Actual"
          showLabel={false}
          label="Contraseña"
          placeholderColor={COLORS.lightGray}
          borderBottomColor={COLORS.lightGray}
          textColor={COLORS.lightGray}
          fontSize={16}
          inputRequired
          isIcon
          icon={eye1}
          type="password"
        />
        {errors.currentPassword && (
          <Text style={styles.textError}>{errors.currentPassword.message}</Text>
        )}

        <Input
          control={control}
          name="newPassword"
          placeholder="Nueva contraseña"
          showLabel={false}
          label="newPassword"
          placeholderColor={COLORS.lightGray}
          borderBottomColor={COLORS.lightGray}
          textColor={COLORS.lightGray}
          fontSize={16}
          inputRequired
          isIcon
          icon={eye1}
          type="password"
        />
        {errors.newPassword && (
          <Text style={styles.textError}>{errors.newPassword.message}</Text>
        )}
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 20,
          marginBottom: 40,
        }}>
        <Button
          label="Guardar"
          onPress={handleSubmit(onSubmit)}
          fontSize={18}
          image={reload}
          imgHeight={20}
          imgWidth={20}
          textMarginLeft={15}
          imgColor={COLORS.white}
          buttonWidth="35%"
          textColor={COLORS.white}
          justifyContent="center"
          alignItems="center"
          flexDirection="row-reverse"
          marginHorizontal={3}
        />
      </View>
      <View />
    </>
  );
};

export default NewPassword;

//  {"Session": null, "attributes": {"custom:organizationId": "juarez", "custom:role": "user", "custom:tenantId": "TE01H1MW36ENB1HYRRBV4YKHE327", "email": "Test3@gmail.com", "email_verified": false, "family_name": "Lalo", "given_name": "Lalo", "phone_number": "+523310838533", "phone_number_verified": true, "sub": "58d0670c-1a8e-49cc-9f47-d40d22da6f23"}, "authenticationFlowType": "USER_SRP_AUTH", "client": {"endpoint": "https://cognito-idp.us-east-1.amazonaws.com/", "fetchOptions": {}}, "keyPrefix": "CognitoIdentityServiceProvider.7l44imeqr5qdrljee2v490knd5", "pool": {"advancedSecurityDataCollectionFlag": true, "client": {"endpoint": "https://cognito-idp.us-east-1.amazonaws.com/", "fetchOptions": [Object]}, "clientId": "7l44imeqr5qdrljee2v490knd5", "storage": [Function MemoryStorage], "userPoolId": "us-east-1_t7wLQ06Wq", "wrapRefreshSessionCallback": [Function anonymous]}, "preferredMFA": "NOMFA", "signInUserSession": {"accessToken": {"jwtToken": "eyJraWQiOiIxOFZyMFluNVlGWFJiUFwvb1pRcVB2NjMzbFp2aDFFaEc2R1JFS2xUMEZlOD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1OGQwNjcwYy0xYThlLTQ5Y2MtOWY0Ny1kNDBkMjJkYTZmMjMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV90N3dMUTA2V3EiLCJjbGllbnRfaWQiOiI3bDQ0aW1lcXI1cWRybGplZTJ2NDkwa25kNSIsIm9yaWdpbl9qdGkiOiI5MzUzYTQ3NS03N2Y3LTQwMDctODIyNy1lYWExYTdmNzRjYTciLCJldmVudF9pZCI6IjBiNmM3NDRiLWIxZDktNGVkOC05Y2ZkLTNiOTg2YzQ1M2NkYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODYzNDQ1MDEsImV4cCI6MTY4NjM0ODEwMSwiaWF0IjoxNjg2MzQ0NTAxLCJqdGkiOiIzNzE5MDJhZS05MjJiLTQ4OWUtYTFhMi02OTA2Yzg5NzU2OTgiLCJ1c2VybmFtZSI6IjU4ZDA2NzBjLTFhOGUtNDljYy05ZjQ3LWQ0MGQyMmRhNmYyMyJ9.NrVXuHuerO-PgIxga_ymGuiyZqfxIYB0ks3Vpx1m3W4s6PK0XjxSGT-lxQkrf-xC6AMWNFzYjG4cSURgYh0k13disxcF5LCc2cne2M_T5O94ltjBx7lyKdF1A_e7v_Nf-Vx0A4slkWEPdh6Q3HuSq-diFWnnZKISp7OR8kfbg304EnRIabRMrYl71OAMETPBg124hiGWqVLRJ0VhGPBN3uY_wA-h4CgWdK8uTZGaGPSqKJL0xPWUZOV_XObKWVUGH5hHnB67b2lb-YjgzMnCfIEy2vYn3oVTNqlKyqBNPdMNXHreAHDlKEuBDkbphC6jaFHWVStQ99h03OX1eRYPhg", "payload": [Object]}, "clockDrift": 0, "idToken": {"jwtToken": "eyJraWQiOiJTRHhcL2ZZZk1XWEU5cWQ2WERTcnJpa1lkVGhZbEk0eGN6cWE0WUpuWXZKMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1OGQwNjcwYy0xYThlLTQ5Y2MtOWY0Ny1kNDBkMjJkYTZmMjMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3Q3d0xRMDZXcSIsInBob25lX251bWJlcl92ZXJpZmllZCI6dHJ1ZSwiY29nbml0bzp1c2VybmFtZSI6IjU4ZDA2NzBjLTFhOGUtNDljYy05ZjQ3LWQ0MGQyMmRhNmYyMyIsImdpdmVuX25hbWUiOiJMYWxvIiwiY3VzdG9tOm9yZ2FuaXphdGlvbklkIjoianVhcmV6Iiwib3JpZ2luX2p0aSI6IjkzNTNhNDc1LTc3ZjctNDAwNy04MjI3LWVhYTFhN2Y3NGNhNyIsImN1c3RvbTp0ZW5hbnRJZCI6IlRFMDFIMU1XMzZFTkIxSFlSUkJWNFlLSEUzMjciLCJhdWQiOiI3bDQ0aW1lcXI1cWRybGplZTJ2NDkwa25kNSIsImV2ZW50X2lkIjoiMGI2Yzc0NGItYjFkOS00ZWQ4LTljZmQtM2I5ODZjNDUzY2RjIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2ODYzNDQ1MDEsInBob25lX251bWJlciI6Iis1MjMzMTA4Mzg1MzMiLCJleHAiOjE2ODYzNTUzMDEsImN1c3RvbTpyb2xlIjoidXNlciIsImlhdCI6MTY4NjM0NDUwMSwiZmFtaWx5X25hbWUiOiJMYWxvIiwianRpIjoiMDg1Njc2ODYtYzVmMi00NTI5LWEyNzktODU4M2VlNzM0NDQzIiwiZW1haWwiOiJUZXN0M0BnbWFpbC5jb20ifQ.PJDbA9GGlIzzf1Sq9rBhbEmE5Bv8xhha9p_f3pC0Clvaz74AyOs-yr6RDLWFcIW12hLGMZt-zZodrgKvcu9dhVjeCetykm1A6xHYi5QCin9FrYwRYhIqkR_A21syhfmvHarjDjA8elAWtnPf_f28fG4nNhMFrYhxCVA-Jktf5NDAi8XOKfyQwwB8CTU5Zc_f5Lz_4BO0QsjT5dv-PCa_4T2Q3kwEPBgUYMt3tb53AkVCRvWTWLVSI-nt93XAETxcFORu6jFJjbngvIzTexmmfzHpOrCm51aYKI7CehvAaITJ2EZ6WKPliBWmFOiUIDckJ0wrgobF4odXPMq0sBtmbA", "payload": [Object]}, "refreshToken": {"token": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.O15miwFW3VgI_L-3dQtTtk6VvShaXCJP5why36najWwB-PVc6K_s56e0oyKwEM-cSYv7wPI5n8-KfRKbBElgpi9a2ZhEdIPinRUwNlPmWlMgjieM-TGcwArhXT1dsMXklP38SS_QDYX_MFMw6K-i1WmyfZJk3mc4pye3f5GzPMotlFsfye987NFAMjFXm4Hdpg1gC_1v15WNmMT4g7HLuF9ftFF17dsVfvVZ-i7kDhAALYoiN5T1z402e5npUMjWkHWo2swLVzQR09SlavuevNfwmhlk7GgthXOlB0aERoQNEmku7NZ2DvZCRnj4nZSqbJJmdhApZ5-gAnUnSxWGSA.Mym1CmtY1SZCPCxq.e0ELsDZrCpi9QhLgLVZDFnEDX3KXLjiN2vG8_qrBAlzZ2EoLAR1w4Qx7qPI-LhzfPZcTmXX4yCGKV6Zcp6cSsJlBmCoyxs_VnHCvmn4XN2nAOWcnEAfHYJj_pCPEWkdoCjndzS3z-vkrsJP7YIPvCPFbtUnWGfTMqY0C1UJgaBQ1q-8CH44pxUj5TpK1wt2H7qi0bCM9uDUof4sNZgyuL8jd04c2i_ohjry3V0S1rJng_F_JOSLWft4EASKM6_KoTXeoRQ85-XC7tGW7sR-fzhK3qW0-rLKgjI9lf0mHft5dy9YKaOKeJyMBXDqbvQ6X7CE3uUI4V6C4neEycFYb0LbYsqxpIGiu3YKft9i_fopXSlQS1MWs0t5iO8wtStO1_t5D5MDWHdaUB-llIaPGmJdpgGq_I9IMl0J6JopUAAlSM6908Y7NQNeAUUxJNyYie-WradF7SHQ75p_vxqsS26yflECtxV3bYVgkMBgmh-KKvd_1U6W6nG1usWKpIUQIkENlg3VLVtz10YJnKkHaLeVUb_252KdBdioa1FUqW5LK6REVq-Gx-7HhayLooKyk0tX_Pgv216rS9G4GjzY73zYW_SC8mqQ_5EVW5DMJjsn4R59ms44iO_DKC29UM9NCIoHJo8UMKRyUeUq5AtUNXP4SS8bTyJoHnvY3qaYq-6IivU5PD_gJMaC7gDNWMGLb9VkUTJvohNhDFOuh4nUBzYg1ybRUhK6b3djTUAImvL5xdJsZiDM5ySlbgpRU1GUC1DCK0JscWtDFMnJLFYBNLRCPAWWdYrwm8wx3P7W0ElTQfviU97CIEbXrtdA2d0Cw7HP9ua7hPimqUkEBHbwDiCHwLYB05w0pjA73F92R1FNLaelabdKkFDVo7RpmxJ6B50K2UXXUycdlGZXvtS8SbL3JGIFWqr5pukjk8zviDmdCnJ3IhRnU702_FrGnjW0TiyeN1W6ICkTKFSL_FqzpAlloiUFhkadalK3FNxNolWjfIyt3s0tmjraMswvoDLhhkUPe30oEixqt1I723oV97-OKTdZRFnms4Iw4dW_8fsAmA5nVNiH8Eiznq_VEyPUvLBR_dNc4ExRgD-y39xmfsfUrOP-DnW0-4ZFISL8ioQ2QECkfkTquCJr5GUnDwK1McF67EVM65vytFqrB60dRhk97m-ZN43aqZqLjNkTu2CdMeL8muMA9G__3JGPU8FxDmOfsXF9ofOS_tpi4Y_MmgN2yghDIPw57JIc31pJUKh7_vhdI7xl7tgNiQku4xmYdR3gbGZGMFO9z2_1GQhJ6rX1dfv9uixbbPJ0Sg53j2Wg6MfxZF0JcSGSjQA.G4LTHmzTa4H3ZFRPhN3jXQ"}}, "storage": [Function MemoryStorage], "userDataKey": "CognitoIdentityServiceProvider.7l44imeqr5qdrljee2v490knd5.58d0670c-1a8e-49cc-9f47-d40d22da6f23.userData", "username": "58d0670c-1a8e-49cc-9f47-d40d22da6f23"}

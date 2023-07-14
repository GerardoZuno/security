/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import React, {useContext} from 'react';

import {Button} from '../../../components/Button';
import {COLORS} from '../../../constants/theme';

import {AuthStackParamList} from '../../../navigation/routes/auth';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {successVerify} from '../../../assets/icons';
import {AuthContext} from '../../../store/authContext';
import useTheme from '../../../hooks/useTheme';

const QUARTER_SCREEN = 1.7;

export type RouteType = RouteProp<AuthStackParamList, 'Success'>;
export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Success'
>;

const Success = () => {
  const {height, width} = useWindowDimensions();
  const {params} = useRoute<RouteType>();

  const {navigate} = useNavigation<NavigationType>();
  const {login, isLogged} = useContext(AuthContext);

  const onSubmit = () => {
    // console.log('data: ', data);
    // navigate('Success', {to: 'Home'});
    login();
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.primary,
      height: height,
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      backgroundColor: COLORS.primary,
      width: width,
      height: height / QUARTER_SCREEN,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '-25%',
    },
    title: {
      color: COLORS.white,
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    centerContent: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      marginBottom: 15,
    },
  });

  const onOk = () => {
    navigate(params.to as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.centerContent}>
          <Text style={styles.title}>VERIFICACIÓN</Text>
          <Text style={styles.title}>COMPLETADA</Text>
        </View>
        <View style={styles.centerContent}>
          <Image source={successVerify} style={styles.image} />
          <Button
            onPress={() => onOk()}
            // onPress={() => onSubmit()}
            textBold={true}
            label="Siguiente"
            textColor={COLORS.white}
            buttonHeight={40}
            buttonWidth={200}
            marginVertical={20}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Success;

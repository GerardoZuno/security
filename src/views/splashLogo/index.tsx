import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  Image,
} from 'react-native';

import {AuthStackParamList} from '../../navigation/routes/auth';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ciudadJuarez} from '../../assets/images';
import {COLORS} from '../../constants/theme';

// import LogoJuarez from '../../assets/images/LogoJuarez';

const QUARTER_SCREEN = 1.8;

export type RouteType = RouteProp<AuthStackParamList, 'SplashLogo'>;
export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'SplashLogo'
>;

const SplashLogo = () => {
  const {height, width} = useWindowDimensions();

  // const {navigate} = useNavigation<NavigationType>();

  // useEffect(() => {
  //   // if (isLogged) {
  //   //   navigate('Home');
  //   // }
  //   setTimeout(() => {
  //     navigate('Permissions');
  //   }, 1000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.primary,
      height: height,
      width: width,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    wrapper: {
      marginTop: '30%',
      backgroundColor: COLORS.primary,
      paddingHorizontal: '10%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      height: height / QUARTER_SCREEN,
    },
    title: {
      fontSize: 40,
      marginTop: 10,
      color: COLORS.white,
      fontWeight: 'bold',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* <LogoJuarez /> */}
        <Image source={ciudadJuarez} style={{width: '75%', height: '75%'}} />
        <Text style={styles.title}>Seguridad</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashLogo;

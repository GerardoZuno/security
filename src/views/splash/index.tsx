/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {COLORS} from '../../constants/theme';

import {Button} from '../../components/Button';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {successVerify} from '../../assets/icons';
import {AuthContext} from '../../store/authContext';
import LottieView from 'lottie-react-native';

import {
  emergencyBig,
  logoAdmin,
  logoJuarezBig,
  logoPoliceBig,
  paint,
  refugioBig,
  vigilanteBig,
} from '../../assets/images';
import { isLoggedIn } from '../../sdk/auth';
import useTheme from '../../hooks/useTheme';

const QUARTER_SCREEN = 1.7;

export type RouteType = RouteProp<AuthStackParamList, 'Splash'>;
export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Splash'
>;

const SplashScreen = () => {
  const {height, width} = useWindowDimensions();
  const {params} = useRoute<RouteType>();

  const {navigate} = useNavigation<NavigationType>();
  const {login, isLogged} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const redirect = async () => {

    const result = await isLoggedIn();
    console.log('splash', result);
    if (result === false) {
      setTimeout(() => {
        navigate('Permissions');
      }, 5000);
    }
  };
  redirect();


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = () => {
    // console.log('data: ', data);
    // navigate('Success', {to: 'Home'});
    login();
  };




  const styles = StyleSheet.create({
    container: {
       backgroundColor: COLORS.white,
      height: '100%',
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      marginTop: width  < 380 ? '-30%' : '0%',
      width: width,
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      transform: width  < 380 ? [{scale: 0.6}] : [{scale: 1}],

    },
    imageJuarez: {
      // marginTop:  '-%',
      // zIndex: -10
    },
    imgWrapper: {
      flex: 1,
      height: '100%',
      width: '100%',
      // height: height / QUARTER_SCREEN,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '-10%',
    },

    image: {
      marginTop: '0%',

      marginBottom: 0,
    },
    imageVigilante: {},
    imagePolice: {},
    imageEmergency: {},
    imageRefugio: {},
  });

  return (
    // <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>

      {
        loading ? (
          <LottieView
          // ref={animationRef}
          source={require('../../assets/animations/init.json')}
          autoPlay={true}
          loop={false}
          // onAnimationFinish={finishAnimation}
        />
        ) :
  (
    <><View
                style={{
                  marginTop: '-5%',
                }}>
                <Image
                  source={logoJuarezBig}
                  style={{}} />
              </View><View style={styles.imgWrapper}>

                  <View style={{
                    marginTop: '0%',
                  }}>
                    <Image source={vigilanteBig} style={styles.imageVigilante} />
                  </View>


                  <View style={{
                    marginTop: '-5%',
                  }}>
                    <Image source={logoPoliceBig} style={styles.imagePolice} />
                  </View>



                  <View style={{
                    marginTop: '5%',
                  }}>
                    <Image source={emergencyBig} style={styles.imageEmergency} />
                  </View>

                  <View style={{
                    marginTop: '5%',
                  }}>
                    <Image source={refugioBig} style={styles.imageRefugio} />
                  </View>
                </View></>
  )
      }


        </View>
      </SafeAreaView>
    // </ScrollView>
  );
};

export default SplashScreen;

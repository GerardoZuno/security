/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import { VigilanteBig } from '../../assets/svg/components/VigilanteBig';
import LottieView from 'lottie-react-native';
import useTheme from '../../hooks/useTheme';
import {COLORS} from '../../constants/theme';



const QUARTER_SCREEN = 1.8;



const Alert = () => {

  const {height, width} = useWindowDimensions();
  const {navigate, goBack} = useNavigation<any>();
  const animationRef = useRef<LottieView>(null);




  const finishAnimation = () => {
         setTimeout(() => {
          navigate('Inicio');

         }, 3000);
     };


  useEffect(() => {
    animationRef.current?.play();
  }, []);

  useFocusEffect(() => {
    animationRef.current?.reset();
    animationRef.current?.play();
  });







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
      height: height / QUARTER_SCREEN,
      backgroundColor: 'red',
    },
    imgWrapper: {
      paddingHorizontal: 0,
      alignItems: 'center',
      backgroundColor: COLORS.white,
      width: '50%',
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





  });

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>




      <View
        style={{
          backgroundColor: COLORS.white,
          width: '100%',
          height: '20%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
         <Text style={{
          color: COLORS.primary,
          fontSize: 20,
          fontWeight: 'bold',
          width: '50%',
          marginLeft: '10%',
         }}>
          Emitiendo Alerta
          </Text>
        <View style={styles.imgWrapper}>
        <VigilanteBig  />

          </View>
      </View>


            {/* Main */}

      <View
        style={{
          ...styles.wrapper,
          backgroundColor: COLORS.white,
          width: '100%',
          height: '50%',
        }}>

<LottieView
        ref={animationRef}
        source={require('../../assets/animations/checklist.json')}
        autoPlay={false}
        loop={false}
        onAnimationFinish={finishAnimation}
      />
      </View>

      {/* Footer */}
      <View
        style={{
          width: '100%',
          height: '20%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          zIndex: -10,
        }}  />

    </SafeAreaView>
    </ScrollView>
  );
};

export default Alert;

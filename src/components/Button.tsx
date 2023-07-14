/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlexAlignType,
} from 'react-native';
import {check} from '../assets/icons';
import {COLORS} from '../constants/theme';
import Firefighters from '../assets/svg/components/Firefighters';
import Policeman from '../assets/svg/components/Policeman';
import WhiteAmbulance from '../assets/svg/components/WhiteAmbulance';

interface InputProps {
  onPress: (e: any) => void;
  label?: string;
  image?: string;
  imgWidth?: string | number;
  imgColor?: string;
  imgHeight?: string | number;
  imgPosition?: 'relative' | 'absolute' | undefined;
  imgLeft?: number | string;
  imgRight?: number | string;
  imgBottom?: number | string;
  imgTop?: number | string;
  textColor?: string;
  fontSize?: number;
  textBold?: boolean;
  backgroundButton?: string;
  buttonWidth?: number | string;
  buttonHeight?: number | string;
  buttonRadius?: number;
  textMarginLeft?: number;
  textMarginRight?: number;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  home?: number;
  alignItems?: FlexAlignType;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  flexDirection?:
    | 'column'
    | 'row'
    | 'row-reverse'
    | 'column-reverse'
    | undefined;
}

export const Button = (props: InputProps) => {
  const styles = StyleSheet.create({
    component: {
      width: '100%',
    },
    button: {
      marginHorizontal: props.marginHorizontal ? props.marginHorizontal : 0,
      marginVertical: props.marginVertical ? props.marginVertical : 0,
      borderRadius: props.buttonRadius ? props.buttonRadius : 10,
      width: props.buttonWidth ? props.buttonWidth : 150,
      height: props.buttonHeight ? props.buttonHeight : 35,
      alignItems: props.alignItems ? props.alignItems : 'center',
      justifyContent: props.justifyContent ? props.justifyContent : 'center',
      flexDirection: props?.flexDirection ? props?.flexDirection : 'column',
      backgroundColor: props.backgroundButton
        ? props.backgroundButton
        : COLORS.secondary,
    },
    text: {
      color: props.textColor ? props.textColor : COLORS.white,
      fontWeight: props.textBold ? '900' : 'normal',
      fontSize: props.fontSize ? props.fontSize : 15,
      marginLeft: props.textMarginLeft ? props.textMarginLeft : 0,
      marginRight: props.textMarginRight ? props.textMarginRight : 0,
    },
    img: {
      resizeMode: 'contain',
      tintColor: props?.imgColor ? props?.imgColor : COLORS.white,
      width: props.imgWidth ? props.imgWidth : 20,
      height: props.imgHeight ? props.imgHeight : 20,
      position: props.imgPosition ? props.imgPosition : 'relative',
      left: props.imgLeft ? props.imgLeft : undefined,
      top: props.imgTop ? props.imgTop : undefined,
      right: props.imgRight ? props.imgRight : undefined,
      bottom: props.imgBottom ? props.imgBottom : undefined,
    },
  });

  return (
    <View style={styles.component}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        {props.label ? <Text style={styles.text}>{props.label}</Text> : null}

        {props.image ? (
          <Image source={props.image || check} style={styles.img} />
        ) : null}
        <View
          style={{
            position: 'absolute',
            right: 25,
          }}>
          {props.home === 1 && <Policeman />}
          {props.home === 2 && <WhiteAmbulance />}
          {props.home === 3 && <Firefighters />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

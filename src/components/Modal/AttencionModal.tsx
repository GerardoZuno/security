/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Modal, ScrollView, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
 import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {COLORS} from '../../constants/theme';

import {Button} from '../Button';

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Register'
>;


interface Props  {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  message: string;
}

const AttencionModal =  ({toggle, setToggle, message}: Props) => {
   const {navigate} = useNavigation<NavigationType>();
  const {height} = useWindowDimensions();

  const styles = StyleSheet.create({
    centeredView: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      marginTop: 40,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  
    modalTitle: {
      marginBottom: 15,
      fontSize: 19,
      color: '#4A4A4A',
      textAlign: 'justify',
      fontWeight: '900',
      // textTransform: 'uppercase',
    },
    modalContent: {
      fontSize: 16,
      textAlign: 'left',
      marginBottom: 15,
      color: '#4A4A4A',
      fontWeight: '500',
    },
    boldText: {
      fontWeight: '900',
      color: COLORS.primary,
      textTransform: 'uppercase',
    },
    wrapperButtons: {
      marginTop: 20,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    containerButton: {
      // width: '40%',
      marginRight: 0,
    },
  });
  


  return (

     <View style={styles.centeredView}>

      <Modal animationType="slide" transparent={true} visible={toggle}>
        <View style={styles.centeredView}>
        <ScrollView>

          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Atencion:</Text>
        
            <Text style={styles.modalContent}>
            Para hacer uso de la aplicación necesitas aceptar los permisos 
            </Text>
            <Text
              style={{
                ...styles.modalContent,
                marginBottom: 5,
                marginTop: 5,
                paddingHorizontal: 10,
              }}>
              ¿Estás seguro que quieres declinar los permisos?
            </Text>       

         
            <View style={styles.wrapperButtons}>
              <View style={styles.containerButton}>
                <Button
                  onPress={() => setToggle(false)}
                  textBold={true}
                  label="Cancelar"
                  backgroundButton={'transparent'}
                  fontSize={16}
                  textColor={COLORS.secondary}
                  buttonWidth={130}
                  buttonHeight={40}
                />
              </View>
              <View style={styles.containerButton}>
                <Button
                  onPress={() => navigate('Login')}
                  textBold={true}
                  label="Aceptar"
                  backgroundButton={COLORS.secondary}
                  fontSize={16}
                  textColor={COLORS.white}
                  buttonWidth={130}
                  buttonHeight={40}
                />
              </View>
            </View>
          </View>
          </ScrollView>

        </View>
      </Modal>
    </View>
  );
};


export default AttencionModal;

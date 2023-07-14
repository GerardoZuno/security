/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {Modal, ScrollView, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {COLORS} from '../../constants/theme';
import { PermissionsAndroid,  Linking } from 'react-native';

import {Button} from '../Button';
import { useNavigation } from '@react-navigation/native';

import AttencionModal2 from './AttencionModal2';

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Register'
>;

interface Props {
    modalVisible: boolean;
   setModalVisible: (value: boolean) => void;
}

const PermissionsModal = ({modalVisible, setModalVisible}: Props) => {
  const {navigate, reset} = useNavigation<NavigationType>();
  const {height} = useWindowDimensions();

  const handleNavigation = () => {
    requestCallPermission();

      reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
       height: height,
      backgroundColor: COLORS.primary,
    },
    modalView: {
      margin: 20,
      marginTop: 25,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 16,
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
      marginBottom: 10,
      fontSize: 18,
      color: '#4A4A4A',
      textAlign: 'left',
      fontWeight: '900',
      textTransform: 'uppercase',
    },
    modalContent: {
      fontSize: 15,
      textAlign: 'justify',
      marginBottom: 15,
      color: '#4A4A4A',
      fontWeight: '500',
    },
    points: {
      fontSize: 15,
      textAlign: 'justify',
      color: '#4A4A4A',
      fontWeight: '500',
      marginBottom: 5,
      marginTop: 5,
      paddingHorizontal: 10,
    },
    wrapperButtons: {
      width: '100%',
      // backgroundColor: 'yellow',
      marginTop: 25,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    containerButton: {
      // backgroundColor: COLORS.primary,
      width: '40%',
      marginRight: 30,
    },
  });
  

   const [toggle, setToggle] = useState(false);


   useEffect(() => {
    requestCallPermission();
  }, []);

  const requestCallPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permiso de ubicación',
          message: 'La aplicación necesita acceso a tu ubicación para funcionar correctamente.',
          buttonNeutral: 'Preguntar después',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Aceptar',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permiso concedido para hacer llamadas.');
      } else {
        console.log('Permiso denegado para hacer llamadas.');
      }
    } catch (err) {
      console.warn(err);
    }
  }




  

  return (

     <View style={styles.centeredView}>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
        <ScrollView>

          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Aviso:</Text>
            <Text style={styles.modalContent}>
              Esta es una aplicación que permite enviar solicitudes de apoyo en
              caso de emergencia. La alerta será recibida en el Centro de
              Emergencia y Respuesta Inmediata de Ciudad Juárez.
            </Text>
            <Text style={styles.modalContent}>
              Esta aplicación necesita permisos para acceder a tu ubicación, de
              esta manera podremos:
            </Text>
            <Text
              style={styles.points}>
              • Informarte de una alerta cercana a ti.
            </Text>

            <Text
              style={{
                ...styles.modalContent,
                marginBottom: 20,

                paddingHorizontal: 10,
              }}>
              • Rastrear tu ubicación después de  haber mandado una
              alerta, aún con  la aplicación cerrada.
            </Text>

            <Text style={styles.modalContent}>
              Si no permites compartir tu ubicación, no podremos ubicarte para
              enviar el auxilio requerido. Siempre puedes activar y desactivar
              los permisos de localización desde el menú de configuración de tu
              celular.
            </Text>
            <View style={styles.wrapperButtons}>
              <View style={styles.containerButton}>
                <Button
                  onPress={() => setToggle(true)}
                  textBold={true}
                  label="No dar permiso"
                  backgroundButton={'transparent'}
                  fontSize={15}
                  textColor={COLORS.secondary}
                  buttonWidth={120}
                  buttonHeight={35}
                />
              </View>
              <View style={styles.containerButton}>
                <Button
                  onPress={() => handleNavigation()}
                  textBold={true}
                  label="Dar permiso"
                  backgroundButton={COLORS.secondary}
                  fontSize={15}
                  textColor={COLORS.white}
                  buttonWidth={120}
                  buttonHeight={35}
                />
              </View>
            </View>
          </View>
          </ScrollView>

        </View>

      </Modal>
      <AttencionModal2 accepted={false} toggle={toggle} setToggle={setToggle} />

    </View>

  );
};


export default PermissionsModal;

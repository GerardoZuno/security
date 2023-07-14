/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {COLORS} from '../../constants/theme';

import {Button} from '../Button';

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

interface Props  {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  message: string;
}


const AlarmModal = ({toggle, setToggle, message}: Props) => {
//   const {navigate} = useNavigation<NavigationType>();

  return (
    <View style={styles.centeredView}>
      <Modal  transparent={true} visible={toggle}>
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Su alarma ha sido emitida</Text>

          <Text style={styles.modalContent}>
          Una unidad de<Text style={styles.boldText}> {message} </Text>
           estará en un momento con usted.           </Text>
          <Text style={styles.modalContent}>
            Validaremos la información con usted, por favor esté atento a la
            llamada.
          </Text>
          <View style={styles.wrapperButtons}>
            <View style={styles.containerButton}>
              <Button
                onPress={() => {
                //   navigate('Register');
                  setToggle(false);
                }}
                textBold={true}
                label="Aceptar"
                backgroundButton={COLORS.secondary}
                fontSize={16}
                textColor={COLORS.white}
                buttonWidth={130}
                buttonHeight={35}
              />
            </View>
          </View>
        </View>
        </View>
      </Modal>
    </View>
  );
};

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

export default AlarmModal;

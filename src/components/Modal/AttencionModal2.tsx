/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {COLORS} from '../../constants/theme';

import {Button} from '../Button';
import Mark from '../../assets/svg/components/Mark';
import Close from '../../assets/svg/components/Close';
import ShortModal from './ShortModal';

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

interface Props  {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  accepted: boolean;
}


const AttencionModal2 = ({toggle, setToggle, accepted}: Props) => {
 const {navigate, push} = useNavigation<NavigationType>();
 const [modal, setModal] = useState(true);


  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide"  transparent={true} visible={toggle}>
        <View style={styles.centeredView}>
        {
          (modal && !accepted) ?  (
            <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Atención</Text>

            <Text style={styles.modalContent}>
            Para hacer uso de la aplicación necesitas aceptar los permisos</Text>
            <Text style={styles.modalContent}>
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
                    onPress={() => setModal(false)}
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
          )
          : (
            <View style={styles.modalView}>

<View style={styles.container}>
      <TouchableOpacity onPress={() => setToggle(!toggle)}>
        <Mark />
      </TouchableOpacity>

       {
        accepted ? (
          <Text style={{...styles.modalContent, marginHorizontal: 25, textAlign: 'center', marginTop: 10}}>
          Has aceptado los términos {'\n'} y condiciones
        </Text>
        ) : (
          <Text style={{...styles.modalContent, marginHorizontal: 25, textAlign: 'center', marginTop: 10}}>
          No podrás usar la aplicación {'\n'} hasta aceptar los permisos
        </Text>
        )
       }
       

       


      <TouchableOpacity onPress={() => setToggle(!toggle)}>
        <Close />
      </TouchableOpacity>
    </View>


          </View>
          )
        }



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
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalView: {
    margin: 15,
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
    textAlign: 'center',
    fontWeight: '900',
    // textTransform: 'uppercase',
  },
  modalContent: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 15,
    color: '#4A4A4A',
    fontWeight: '500',
    marginTop: 5,
    marginLeft: 10,
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

export default AttencionModal2;

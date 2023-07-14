/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {COLORS} from '../../constants/theme';

import {Button} from '../Button';
import Close from '../../assets/svg/components/Close';
import Check from '../../assets/svg/components/Check';

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

interface Props  {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}


const EditModal = ({toggle, setToggle}: Props) => {
 const {navigate, push} = useNavigation<NavigationType>();
 const [modal, setModal] = useState(true);


  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide"  transparent={true} visible={toggle}>
        <View style={styles.centeredView}>


            <View style={styles.modalView}>

            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
             <TouchableOpacity
             onPress={() => setToggle(!toggle)}
             >
             <Check />
             </TouchableOpacity >

            <Text style={{
              ...styles.modalContent,
              marginTop: 5,
              marginLeft: 10,
            }}>
            Los cambios en tu perfil han  {'\n'}
            sido guardados con éxito. sido guardados {'\n'}
            con éxito. Gracias por mantener  tu información actualizada</Text>

               <TouchableOpacity
             onPress={() => setToggle(!toggle)}
             >
              <Close />
             </TouchableOpacity >
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

export default EditModal;

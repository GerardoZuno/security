import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Modal} from 'react-native';
import Close from '../../assets/svg/components/Close';
import Mark from '../../assets/svg/components/Mark';

interface Props {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}

const ShortModal = ({toggle, setToggle}: Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={toggle}>
        <View style={styles.modalView}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => setToggle(!toggle)}>
              <Mark />
            </TouchableOpacity>

            <Text style={styles.modalContent}>
              Has aceptado los términos {'\n'} y condiciones
            </Text>

            <TouchableOpacity onPress={() => setToggle(!toggle)}>
              <Close />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ShortModal;

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
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContent: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 15,
    color: '#4A4A4A',
    fontWeight: '500',
    marginTop: 5,
    marginHorizontal: 15,
  },
});

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  useWindowDimensions,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/routes/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {COLORS} from '../../constants/theme';

import {Button} from '../Button';
import {calendar} from '../../assets/icons';
import Close from '../../assets/svg/components/Close';

export type NavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

interface Props {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FilterModal = ({toggle, setToggle}: Props) => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    modalView: {
      // backgroundColor: 'teal',
      width: '80%',
      position: 'absolute',
      top: '18%',
      right: '5%',
     
      // marginLeft: '20%',
      // marginRight: '0%',
      // marginTop: '30%',
      backgroundColor: 'white',

      borderRadius: 20,
      padding: 15,
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
      fontSize: 18,
      color: '#4A4A4A',
      textAlign: 'left',
      fontWeight: '900',
    },
    wrapperButtons: {
      marginTop: 20,
      marginBottom: 20,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    containerButton: {
      marginRight: 0,
      width: '100%',
    },
    wrapperDate: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    modalText: {
      fontSize: 12,
      color: '#4A4A4A',
    },
    filterWrapper: {
      flexDirection: 'row',
      width: '65%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      height: 40,
    },
    finder: {
      backgroundColor: '#E0EDFC',
      borderRadius: 15,
      width: '100%',
      paddingHorizontal: 10,
      height: '100%',
      color: 'grey',
      fontSize: 12,
    },
  });

  const [itemsState, setItemsState] = useState([
    {backgroundColor: COLORS.secondary, textColor: COLORS.white},
    {backgroundColor: 'transparent', textColor: 'black'},
    {backgroundColor: 'transparent', textColor: 'black'},
  ]);

  const customOnFocus = (index = 0) => {
    const newItemsState = itemsState.map((item, i) => {
      if (i === index) {
        return {backgroundColor: COLORS.secondary, textColor: COLORS.white};
      } else {
        return {backgroundColor: 'transparent', textColor: 'black'};
      }
    });
    setItemsState(newItemsState);
  };

  return (
    <Modal transparent={true} visible={toggle}>
      <View style={styles.modalView}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.modalTitle}>Fecha de publicación</Text>
          <TouchableOpacity
             onPress={() => setToggle(!toggle)}
             >
              <Close />
             </TouchableOpacity >
        </View>

        
        <View style={{width: '100%', marginBottom: '5%', marginTop: '5%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // backgroundColor: 'teal',
            }}>
            <View
              style={{
                width: '20%',
              }}>
              <Button
                label="Hoy"
                onPress={() => {
                  customOnFocus(0);
                  // setToggle(false);
                }}
                backgroundButton={itemsState[0].backgroundColor}
                textColor={itemsState[0].textColor}
                fontSize={12}
                textMarginLeft={0}
                buttonWidth="100%"
                justifyContent="center"
                alignItems="center"
                marginHorizontal={0}
                buttonRadius={33}
              />
            </View>
            <View
              style={{
                width: '40%',
              }}>
              <Button
                label="Ultimos 7 días"
                onPress={() => {
                  customOnFocus(1);
                  // setToggle(false);
                }}
                backgroundButton={itemsState[1].backgroundColor}
                textColor={itemsState[1].textColor}
                fontSize={12}
                textMarginLeft={0}
                buttonWidth="100%"
                justifyContent="center"
                alignItems="center"
                marginHorizontal={0}
                buttonRadius={33}
              />
            </View>
            <View
              style={{
                width: '40%',
              }}>
              <Button
                label="Ultimos 30 días"
                onPress={() => {
                  customOnFocus(2);
                  // setToggle(false);
                }}
                backgroundButton={itemsState[2].backgroundColor}
                textColor={itemsState[2].textColor}
                fontSize={12}
                imgHeight={20}
                imgWidth={20}
                textMarginLeft={0}
                buttonWidth="100%"
                justifyContent="center"
                alignItems="center"
                marginHorizontal={0}
                buttonRadius={33}
              />
            </View>
          </View>
        </View>
        <View style={styles.wrapperDate}>
          <View>
            <Text style={styles.modalText}>30-60 dias</Text>
          </View>

          <View style={{
            ...styles.filterWrapper,
            // backgroundColor: 'red',
            position: 'relative'
            }}>
            <TextInput
              placeholderTextColor="grey"
              placeholder="dd/mm/mmmm"
              style={styles.finder}
            />
            <Image source={calendar}
              style={{
                position: 'absolute',
                right: 10,
              }}
             />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

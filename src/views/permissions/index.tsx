/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {send} from '../../assets/icons';
import {Button} from '../../components/Button';
import {COLORS} from '../../constants/theme';

import PermissionsModal from '../../components/Modal/PermissionsModal';
import useTheme from '../../hooks/useTheme';

const Permissions = () => {
  const {height} = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(true);

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: '5%',
      backgroundColor: COLORS.primary,
      height: height,
    },
    profileWrapper: {
      marginTop: '10%',
    },
    imgWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 60,
      height: 120,
      width: 120,
      position: 'relative',
    },
    img: {
      width: '100%',
      height: '100%',
      borderRadius: 60,
      resizeMode: 'contain',
    },
    editButton: {
      position: 'absolute',
      elevation: 1,
      bottom: -10,
      borderWidth: 3,
      borderColor: COLORS.white,
      borderRadius: 20,
    },
    title: {
      marginTop: 5,
      fontWeight: 'bold',
      fontSize: 20,
      color: COLORS.gray,
    },
    buttonWrapper: {
      width: '100%',
      marginTop: 30,
      marginBottom: 20,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PermissionsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Permissions;

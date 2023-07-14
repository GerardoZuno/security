/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {reload} from '../../assets/icons';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {useForm, useWatch} from 'react-hook-form';
import ListCollapsible from '../../components/ui/ListCollapsible';
import ContactModal from '../../components/Modal/ContactModal';
import {COLORS} from '../../constants/theme';

import EmergencyContact1 from '../../components/EmergencyContacts/EmergencyContact1';
import EmergencyContact2 from '../../components/EmergencyContacts/EmergencyContact2';
import EmergencyContact3 from '../../components/EmergencyContacts/EmergencyContact3';
import {getUserInfo, updateUserInfo} from '../../sdk/panic';
import useTheme from '../../hooks/useTheme';

const parentesco = [
  'Padre',
  'Madre',
  'Esposo(a)',
  'Hijo(a)',
  'Hermano(a)',
  'Tio(a)',
  'Primo(a)',
  'Sobrino(a)',
  'Abuelo(a)',
  'Amigo(a)',
];

interface Form {
  // fullName: string;
  // phone: string;
  // relationShip: string;

  fullName3: string;
  phone3: string;
  relationShip3: string;
}

const EmergencyContact = () => {
  // const [contact1, setContact1] = useState(true);

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: '5%',
      backgroundColor: COLORS.white,
      flex: 1,
    },
    paragraph: {
      color: '#002E67',
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 20,
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

  const [contact3, setContact3] = useState(true);

  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const dataUser = async () => {
      const response = await getUserInfo();
      setUser(response);
    };
    dataUser();
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    watch,
    reset,
  } = useForm<Form>({
    defaultValues: {
      // fullName: '',
      // phone: '',
      // relationShip: '',
      // fullName2: '',
      // phone2: '',
      // relationShip2: '',
      fullName3: '',
      phone3: '',
      relationShip3: 'Sin especif',
    },
  });

  const onSubmit = (data: any) => {
    console.log('hey');
    console.log(data);
    reset();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileWrapper}>
          <Text style={styles.paragraph}>
            Un contacto de emergencia es alguien de confianza que puede apoyarle
            en caso de requerirlo.
          </Text>
        </View>

        <EmergencyContact1 user={user} />
        <EmergencyContact2 user={user} />
        <EmergencyContact3 user={user} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmergencyContact;

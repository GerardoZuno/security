/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {reload} from '../../assets/icons';
import {COLORS} from '../../constants/theme';
import {Input} from '../Input';
import ListCollapsible from '../ui/ListCollapsible';
import {Button} from '../Button';
import {useForm} from 'react-hook-form';
import {updateUserInfo} from '../../sdk/panic';
import ContactModal from '../Modal/ContactModal';
import Spiral from '../../assets/svg/components/Spiral';

interface Form {
  name: string;
  phone: string;
  relationship: string;
}

interface Props {
  user: any;
}

const EmergencyContact1 = ({user}: Props) => {
  const [contact1, setContact1] = useState(true);
  const [toggle, setToggle] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    reset,
  } = useForm<Form>({
    defaultValues: {
      name: '',
      phone: '',
      relationship: 'Unspecified',
    },
  });

  const onSubmit = async (data: Form) => {
    const updateProfile = {
      givenName: user.givenName || '',
      familyName: user.givenName || '',
      contactOne: {
        name: data.name || '',
        telephone: data.phone.toString() || '',
        relationship: data.relationship || '',
      },
    };
    setToggle(true);

    await updateUserInfo(updateProfile);

    reset({
      name: '',
      phone: '',
      relationship: '',
    });
  };

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

  return (
    <View>
      <View style={styles.buttonWrapper}>
        <ContactModal toggle={toggle} setToggle={setToggle} />

        <Text style={styles.title}>Contacto 1</Text>
        <Input
          label="Nombre"
          showLabel={false}
          control={control}
          name="name"
          placeholderColor={COLORS.lightGray}
          borderBottomColor={COLORS.lightGray}
          fontSize={15}
          textColor={COLORS.lightGray}
          type="text"
          inputRequired
          placeholder="Nombre"
        />
        {errors.name && (
          <Text
            style={{
              color: COLORS.secondary,
            }}>
            {errors.name.message}
          </Text>
        )}

        <Input
          label="Teléfono"
          showLabel={false}
          control={control}
          name="phone"
          placeholderColor={COLORS.lightGray}
          borderBottomColor={COLORS.lightGray}
          fontSize={15}
          textColor={COLORS.lightGray}
          type="phone"
          placeholder="Teléfono"
          inputRequired
        />
        {errors.phone && (
          <Text
            style={{
              color: COLORS.secondary,
            }}>
            {errors.phone.message}
          </Text>
        )}
        <ListCollapsible
          tittle="Parentesco"
          list={parentesco}
          isCollapsed={contact1}
          setIsCollapsed={setContact1}
          setValue={setValue}
          name={'relationship'}
        />
      </View>
      <View style={{width: '100%', marginBottom: '5%', position: 'relative'}}>
        <Button
          label="Guardar"
          onPress={handleSubmit(onSubmit)}
          fontSize={18}
          imgHeight={20}
          imgWidth={20}
          textMarginLeft={15}
          imgColor={COLORS.white}
          buttonWidth="35%"
          textColor={COLORS.white}
          justifyContent="center"
          alignItems="center"
          flexDirection="row-reverse"
          marginHorizontal={3}
        />
        <View
          style={{
            position: 'absolute',
            top: 7,
            left: 14,
          }}>
          <Spiral />
        </View>
      </View>
    </View>
  );
};

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

export default EmergencyContact1;

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
import {Input} from '../Input';
import ListCollapsible from '../ui/ListCollapsible';
import {Button} from '../Button';
import {useForm} from 'react-hook-form';
import {updateUserInfo} from '../../sdk/panic';
import Spiral from '../../assets/svg/components/Spiral';

interface Form {
  fullName2: string;
  phone2: string;
  relationShip2: string;
}

interface Props {
  user: any;
}

const EmergencyContact2 = ({user}: Props) => {
  const [contact2, setContact2] = useState(true);

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    reset,
  } = useForm<Form>({
    defaultValues: {
      fullName2: '',
      phone2: '',
      relationShip2: '',
    },
  });

  const onSubmit = async (data: Form) => {
    console.log('data: ', data);
    const updateProfile = {
      givenName: user.givenName || '',
      familyName: user.givenName || '',
      contactTwo: {
        name: data.fullName2 || '',
        telephone: data.phone2.toString() || '',
        relationship: data.relationShip2 || '',
      },
    };
    const response = await updateUserInfo(updateProfile);
    console.log('response: ', response);
    reset({
      fullName2: '',
      phone2: '',
      relationShip2: '',
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
    <>
      <View style={styles.buttonWrapper}>
        <Text style={styles.title}>Contacto 2</Text>
        <Input
          label="Nombre"
          showLabel={false}
          control={control}
          name="fullName2"
          placeholderColor={COLORS.lightGray}
          borderBottomColor={COLORS.lightGray}
          fontSize={15}
          textColor={COLORS.lightGray}
          type="text"
          inputRequired
          placeholder="Nombre"
        />
        {errors.fullName2 && (
          <Text
            style={{
              color: COLORS.secondary,
            }}>
            {errors.fullName2.message}
          </Text>
        )}

        <Input
          label="Teléfono"
          showLabel={false}
          control={control}
          name="phone2"
          placeholderColor={COLORS.lightGray}
          borderBottomColor={COLORS.lightGray}
          fontSize={15}
          textColor={COLORS.lightGray}
          type="phone"
          placeholder="Teléfono"
          inputRequired
        />
        {errors.phone2 && (
          <Text
            style={{
              color: COLORS.secondary,
            }}>
            {errors.phone2.message}
          </Text>
        )}
        <ListCollapsible
          tittle="Parentesco"
          list={parentesco}
          isCollapsed={contact2}
          setIsCollapsed={setContact2}
          setValue={setValue}
          name={'relationShip2'}
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
    </>
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

export default EmergencyContact2;

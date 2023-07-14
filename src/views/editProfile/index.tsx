/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {mandala} from '../../assets/images';
import {cancel, check1, eye1, reload} from '../../assets/icons';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {COLORS} from '../../constants/theme';

import {useForm} from 'react-hook-form';
import ListCollapsible from '../../components/ui/ListCollapsible';
import DatePickerCollapsible from '../../components/ui/DatePickerCollapsible';
import AddCollapsible from '../../components/ui/AddCollapsible';
import EditModal from '../../components/Modal/EditModal';
import {getUserInfo, updateUserInfo} from '../../sdk/panic';
import NewPassword from '../../components/NewPassword';
import useTheme from '../../hooks/useTheme';
import Spiral from '../../assets/svg/components/Spiral';

interface Form {
  firstName: string;
  lastName: string;
  gender: string;
  medicService: string;
  diseaseChronic1: string;
  bloodType: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  secureNumber: string | number;
}

const Profile = () => {
  const [isGenderCollapsed, setIsGenderCollapsed] = useState(true);
  const [isBloodCollapsed, setIsBloodCollapsed] = useState(true);
  const [isServiceCollapsed, setIsServiceCollapsed] = useState(true);
  const [isBornCollapsed, setIsBornCollapsed] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDiseaseCollapsed, setIsDiseaseCollapsed] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState<any>(null);

  const genre = ['Masculino', 'Femenino'];
  const blood = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const service = ['IMSS', 'ISSSTE', 'OTRO'];

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: '5%',
      backgroundColor: COLORS.white,
      flex: 1,
    },
    profileWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '10%',
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
    reset,
    setValue,
    watch,
  } = useForm<Form>({
    defaultValues: {
      gender: 'Unspecified',
      bloodType: 'Unspecified',
      medicService: 'Unspecified',
      dateOfBirth: '01/01/1900',
      diseaseChronic1: '',
    },
  });

  const onSubmit = async (data: any) => {
    const validEmail = data.email.trim();

    const updateProfile = {
      givenName: data.firstName || '',
      familyName: data.lastName || '',
      gender: data.gender || '',
      medical_service: [data.medicService || ''],
      chronicDiseases: [
        ...(data.diseaseChronic1 ? [data.diseaseChronic1] : []),
        ...(data.diseaseChronic2 ? [data.diseaseChronic2] : []),
        ...(data.diseaseChronic3 ? [data.diseaseChronic3] : []),
      ],
      bloodType: data.bloodType || '',
      birthDate: data.birthDate || '',
      telephone: data.phone || '',
      email: validEmail || '',
    };

    console.log('updateProfile: ', updateProfile);
    const response = await updateUserInfo(updateProfile);
    console.log('response: ', response);
    // reset();
  };

  const emailValue = watch('email');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileWrapper}>
          <View style={styles.imgWrapper}>
            <Image source={mandala} style={styles.img} />
            <View style={styles.editButton}>
              <Button
                backgroundButton={COLORS.primary}
                onPress={() => {}}
                imgWidth={12}
                imgHeight={12}
                buttonHeight={25}
                buttonWidth={25}
                buttonRadius={13}
              />
            </View>
          </View>
          <Text style={styles.title}>
            {user?.givenName || ''} {user?.familyName || ''}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Input
            label="Nombre"
            showLabel={false}
            control={control}
            name="firstName"
            placeholderColor={COLORS.lightGray}
            borderBottomColor={COLORS.lightGray}
            fontSize={15}
            textColor={COLORS.lightGray}
            type="text"
            placeholder="Nombre"
            inputRequired
          />
          {errors.firstName && (
            <Text
              style={{
                color: COLORS.secondary,
              }}>
              {errors.firstName.message}
            </Text>
          )}
          <Input
            label="Apellidos"
            showLabel={false}
            control={control}
            name="lastName"
            placeholderColor={COLORS.lightGray}
            borderBottomColor={COLORS.lightGray}
            fontSize={15}
            textColor={COLORS.lightGray}
            type="text"
            placeholder="Apellidos"
            inputRequired
          />
          {errors.lastName && (
            <Text
              style={{
                color: COLORS.secondary,
              }}>
              {errors.lastName.message}
            </Text>
          )}
          <ListCollapsible
            tittle="Género"
            list={genre}
            isCollapsed={isGenderCollapsed}
            setIsCollapsed={setIsGenderCollapsed}
            name="gender"
            setValue={setValue}
            // control={control}
          />

          <ListCollapsible
            tittle="Servicio médico"
            list={service}
            isCollapsed={isServiceCollapsed}
            setIsCollapsed={setIsServiceCollapsed}
            name="medicService"
            setValue={setValue}
            // secure
          />
          <AddCollapsible
            tittle="Enfermedad crónica que padece"
            isCollapsed={isDiseaseCollapsed}
            setIsCollapsed={setIsDiseaseCollapsed}
            control={control}
          />

          <ListCollapsible
            tittle="Tipo de sangre"
            list={blood}
            isCollapsed={isBloodCollapsed}
            setIsCollapsed={setIsBloodCollapsed}
            name="bloodType"
            setValue={setValue}
          />

          <DatePickerCollapsible
            tittle="Fecha de nacimiento"
            control={control}
            isCollapsed={isBornCollapsed}
            setIsCollapsed={setIsBornCollapsed}
            name="dateOfBirth"
            setValue={setValue}
          />

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
            placeholder="Teléfono 10 dígitos"
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
          <Input
            label="Correo electrónico"
            showLabel={false}
            control={control}
            name="email"
            placeholderColor={COLORS.lightGray}
            borderBottomColor={COLORS.lightGray}
            fontSize={15}
            textColor={COLORS.lightGray}
            type="email"
            placeholder="Correo electrónico"
            inputRequired
            isIcon={emailValue === undefined ? false : true}
            icon={!errors.email ? check1 : cancel}
            check={true}
          />
          {errors.email && (
            <Text
              style={{
                color: COLORS.secondary,
              }}>
              {errors.email.message}
            </Text>
          )}
          {/* <Input
            label="Contraseña"
            showLabel={false}
            control={control}
            name="password"
            placeholderColor={COLORS.lightGray}
            borderBottomColor={COLORS.lightGray}
            fontSize={15}
            textColor={COLORS.lightGray}
            type="password"
            placeholder="Contraseña"
            inputRequired
            isIcon
            icon={eye1}
          />
          {errors.password && (
            <Text
              style={{
                color: COLORS.secondary,
              }}>
              {errors.password.message}
            </Text>
          )} */}
        </View>
        <View
          style={{width: '100%', marginBottom: '15%', position: 'relative'}}>
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

        {/* <NewPassword /> */}
        <EditModal toggle={toggle} setToggle={setToggle} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {mandala} from '../../assets/images';
import {
  edit,
  cellphone,
  policy,
  conditions,
  phone,
  // save,
  // logoutIcon,
} from '../../assets/icons';
import {AuthContext} from '../../store/authContext';
import {COLORS} from '../../constants/theme';

import {Button} from '../../components/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/routes/main';
import {useNavigation} from '@react-navigation/native';
import {getUserInfo} from '../../sdk/panic';
import Save from '../../assets/svg/components/Save';
import Phone from '../../assets/svg/components/Phone';
import Policies from '../../assets/svg/components/Policies';
import Terms from '../../assets/svg/components/Terms';
import Contacts from '../../assets/svg/components/Contacts';
import Logout from '../../assets/svg/components/Logout';
import Edit from '../../assets/svg/components/Edit';

export type NavigationType = NativeStackNavigationProp<RootStackParamList>;

const Profile = () => {
  const styles = StyleSheet.create({
    container: {
      marginVertical: '0%',
      paddingVertical: '10%',

      paddingHorizontal: '5%',
      backgroundColor: COLORS.white,
      flex: 1,
    },
    profileWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
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
      right: 0,
      bottom: 0,
      borderWidth: 3,
      borderColor: COLORS.white,
      borderRadius: 20,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      color: COLORS.gray,
    },
    buttonWrapper: {
      width: '100%',
      marginTop: 30,
      marginBottom: 20,
    },
    iconContainer: {
      position: 'relative',
    },
  });

  const {navigate} = useNavigation<NavigationType>();
  const {logout} = useContext(AuthContext);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const dataUser = async () => {
      const response = await getUserInfo();
      setUser(response);
    };
    dataUser();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.profileWrapper}>
          <View style={styles.imgWrapper}>
            <Image source={mandala} style={styles.img} />
            <View style={styles.editButton}>
              <Button
                backgroundButton={COLORS.primary}
                onPress={() => navigate('Editar perfil')}
                image={edit}
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
          <View style={styles.iconContainer}>
            <Button
              label="Contáctanos"
              // image={phone}
              imgColor={COLORS.gray}
              onPress={() => navigate('Contáctanos')}
              buttonWidth="100%"
              fontSize={18}
              textColor={COLORS.gray}
              backgroundButton="transparent"
              justifyContent="flex-end"
              alignItems="center"
              flexDirection="row-reverse"
              textBold
              imgHeight={20}
              imgWidth={20}
              textMarginLeft={30}
            />
            <View style={{position: 'absolute', top: 8}}>
              <Phone />
            </View>
          </View>

          <View style={styles.iconContainer}>
            <Button
              label="Guardados"
              // image={save}
              imgColor={COLORS.gray}
              onPress={() => navigate('Guardados')}
              buttonWidth="100%"
              fontSize={18}
              textColor={COLORS.gray}
              backgroundButton="transparent"
              justifyContent="flex-end"
              alignItems="center"
              flexDirection="row-reverse"
              textBold
              imgHeight={20}
              imgWidth={20}
              textMarginLeft={30}
              marginVertical={8}
            />

            <View style={{position: 'absolute', top: 17}}>
              <Save />
            </View>
          </View>

          <View style={styles.iconContainer}>
            <Button
              label="Política de privacidad"
              // image={policy}
              imgColor={COLORS.gray}
              fontSize={18}
              onPress={() => navigate('Políticas de privacidad')}
              buttonWidth="100%"
              textColor={COLORS.gray}
              backgroundButton="transparent"
              alignItems="center"
              justifyContent="flex-end"
              flexDirection="row-reverse"
              textBold
              marginVertical={8}
              imgHeight={20}
              imgWidth={20}
              textMarginLeft={30}
            />
            <View style={{position: 'absolute', top: 17}}>
              <Policies />
            </View>
          </View>

          <View style={styles.iconContainer}>
            <Button
              label="Términos y condiciones"
              fontSize={18}
              // image={conditions}
              imgColor={COLORS.gray}
              onPress={() => navigate('Términos y condiciones')}
              buttonWidth="100%"
              textColor={COLORS.gray}
              backgroundButton="transparent"
              alignItems="center"
              justifyContent="flex-end"
              flexDirection="row-reverse"
              textBold
              marginVertical={8}
              imgHeight={20}
              imgWidth={20}
              textMarginLeft={30}
            />
            <View style={{position: 'absolute', top: 17}}>
              <Terms />
            </View>
          </View>

          <View style={styles.iconContainer}>
            <Button
              label="Contactos de emergencia"
              fontSize={18}
              imgColor={COLORS.gray}
              onPress={() => navigate('Contactos emergencia')}
              buttonWidth="100%"
              textColor={COLORS.gray}
              backgroundButton="transparent"
              justifyContent="flex-end"
              alignItems="center"
              flexDirection="row-reverse"
              textBold
              marginVertical={8}
              imgHeight={20}
              imgWidth={20}
              textMarginLeft={30}
            />
            <View style={{position: 'absolute', top: 17}}>
              <Contacts />
            </View>
          </View>
        </View>

        <View style={styles.iconContainer}>
          <Button
            onPress={() => {
              logout();
            }}
            label="Cerrar sesión"
            fontSize={18}
            // image={logoutIcon}
            imgHeight={20}
            imgWidth={20}
            imgColor={COLORS.gray}
            buttonWidth="100%"
            textColor={COLORS.lightGray}
            backgroundButton="transparent"
            justifyContent="flex-end"
            alignItems="center"
            flexDirection="row-reverse"
            textBold
            textMarginLeft={30}
          />
          <View style={{position: 'absolute', top: 9}}>
            <Logout />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

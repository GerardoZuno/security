/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {cancel, check1, send} from '../../assets/icons';
import {Input} from '../../components/Input';
import {useForm, Control} from 'react-hook-form';
import MessageModal from '../../components/Modal/MessageModal';
import {COLORS} from '../../constants/theme';

import ListCollapsible from '../../components/ui/ListCollapsible';
import CommentCollapsible from '../../components/ui/CommentCollapsible';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import {Button} from '../../components/Button';
import useTheme from '../../hooks/useTheme';
import Send from '../../assets/svg/components/Send';

interface Form {
  email: string;
  subject: string;
}

const ContactUs = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [toggle, setToggle] = useState(false);

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: '5%',
      backgroundColor: COLORS.white,
      flex: 1,
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
    buttonContainer: {
      width: '100%',
      marginBottom: '5%',
      position: 'relative',
    },
    iconContainer: {
      position: 'absolute',
      top: 10,
      left: 14,
    },
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
    watch,
  } = useForm<{email: string; message: string}>();

  const onSubmit = (data: any) => {
    const validEmail = data.email.trim();

    console.log(data);
    reset();
    setIsCollapsed(true);
    setToggle(true);
  };
  const emailValue = watch('email');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.buttonWrapper}>
          {/* <Button title="Llamar" onPress={makePhoneCall} /> */}

          <Input
            control={control}
            name="email"
            placeholder="Email"
            showLabel={false}
            label="Email"
            type="email"
            placeholderColor={COLORS.black}
            borderBottomColor={COLORS.black}
            textColor={COLORS.black}
            fontSize={16}
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

          <CommentCollapsible
            tittle="Comentarios"
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            control={control}
            errors={errors}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label="Enviar"
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
            buttonHeight={40}
          />
          <View style={styles.iconContainer}>
            <Send />
          </View>

          <MessageModal toggle={toggle} setToggle={setToggle} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;

/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import {Button} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/routes/main';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LogoPolice} from '../../assets/svg/components/LogoPolice';
import AdminJuarez from '../../assets/svg/components/AdminJuarez';
import CastingModal from '../../components/Modal/CastingModal';
import Emergency911 from '../../assets/svg/components/Emergency911';
import Firefighters from '../../assets/svg/components/Firefighters';
import {getToken} from '../../sdk/auth';
import DeviceInfo from 'react-native-device-info';
import Geolocation from 'react-native-geolocation-service';
import { createPanic } from '../../sdk/panic';
import NetworkInfo from 'react-native-network-info';



export type NavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Alarms {
  label: string;
  icon?: any;
  home: number;
  onPress: (e: any) => void;
}

interface Location {
  latitude: number;
  longitude: number;
}

const Home = () => {
  const {navigate} = useNavigation<NavigationType>();
  const [message, setMessage] = useState('Seguridad pública');
  const [toggle, setToggle] = useState(false);
  const [location, setLocation] = useState<Location>();
  const [currentDate, setCurrentDate] = useState<any>();

  useEffect(() => {
    requestCallPermission();
  }, []);

  const requestCallPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        // {
        //   title: 'Permiso para hacer llamadas',
        //   message: 'Necesitamos permiso para hacer llamadas.',
        //   buttonNeutral: 'Preguntar después',
        //   buttonNegative: 'Cancelar',
        //   buttonPositive: 'Aceptar',
        // },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permiso concedido para hacer llamadas.');
      } else {
        console.log('Permiso denegado para hacer llamadas.');
      }
    } catch (err) {
      console.warn(err);
    }
  };











    useEffect(() => {
      getLocation();
    }, []);

    const getLocation = async () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log('Latitud:', latitude);
          console.log('Longitud:', longitude);

          const currentLocation = {
            latitude: latitude,
            longitude: longitude,
          };
          setLocation(currentLocation);
        },        (error) => {
          console.error('Error al obtener la ubicación:', error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        }

      );

    };






  const submitAlert = async (reason: string) => {
    const deviceId = await DeviceInfo.getUniqueId();
    const currentDateTime = new Date();
    const isoTimestamp = currentDateTime .toISOString(); // Convierte la fecha en formato ISO



       console.log({
        incidenceTimeUserAt : isoTimestamp,        
        deviceId: deviceId,
        latitude: location?.latitude || 0,
        longitude: location?.longitude || 0,
        reason: reason,
        }, 'alerta');

    try {
      await createPanic({
        incidenceTimeUserAt : isoTimestamp,        
        deviceId: deviceId,
        latitude: location?.latitude || 0,
        longitude: location?.longitude || 0,
        reason: reason,
      });
      console.log('Alerta creada');

    } catch (error) {
      console.log(error);
    }


  };




  const alarms: Alarms[] = [
    {
      label: 'Seguridad pública',
      home: 1,
      onPress: e => {
        submitAlert('POLICE');

        navigate('Alerta');
        setTimeout(() => {
          setToggle(true);
        }, 4000);

        setMessage('Seguridad pública');
      },
    },
    {
      label: 'Ambulancia',
      home: 2,
      onPress: e => {
        submitAlert('AMBULANCE');

        navigate('Alerta');
        setTimeout(() => {
          setToggle(true);
        }, 4000);

        setMessage('Ambulancia');
      },
    },
    {
      label: 'Bomberos',
      home: 3,
      onPress: e => {
        submitAlert('FIRE');

        navigate('Alerta');
        setTimeout(() => {
          setToggle(true);
        }, 4000);

        setMessage('Bomberos');
      },
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.imgWrapper}>
          <LogoPolice />
          <AdminJuarez />

          <Emergency911 />
        </View>

        <View style={styles.buttonWrapper}>
          {alarms.map((alarm: Alarms, index: number) => (
            <Button
              key={`${alarm.label}-${index}`}
              marginVertical={10}
              buttonWidth="100%"
              buttonHeight={60}
              imgHeight={35}
              imgWidth={35}
              onPress={alarm.onPress}
              label={alarm.label}
              image={alarm.icon}
              textBold
              flexDirection="row-reverse"
              justifyContent="center"
              alignItems="center"
              fontSize={20}
              imgPosition="absolute"
              imgLeft="83%"
              home={alarm.home}
            />
          ))}
          <CastingModal
            toggle={toggle}
            setToggle={setToggle}
            message={message}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '0%',
    paddingVertical: '10%',

    paddingHorizontal: '5%',
    backgroundColor: '#fff',
    flex: 1,
  },
  imgWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: Dimensions.get('window').width / 4,
    resizeMode: 'contain',
  },
  buttonWrapper: {
    marginTop: '5%',
  },
});

export default Home;

{
  /* <View style={styles.imgWrapper}>

        <Image source={emergency} style={styles.img}/>
      <Image source={juarezHome} style={styles.img}/>
      <Image source={logoPolice} style={styles.img}/>
      </View> */
}

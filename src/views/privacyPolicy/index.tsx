/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, ScrollView, SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../../components/Button';
import AttencionModal2 from '../../components/Modal/AttencionModal2';
import {COLORS} from '../../constants/theme';

import useTheme from '../../hooks/useTheme';

const PrivacyPolicy = () => {
  const [toggle, setToggle] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: '5%',
      backgroundColor: COLORS.white,
      flex: 1,
    },
    wrapper: {
      marginTop: '10%',
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
      color: 'black',
      fontWeight: '900',
      fontSize: 16,
      marginBottom: 20,
    },
    wrapperButtons: {
      width: '100%',
      // backgroundColor: 'yellow',
      marginTop: 25,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      marginBottom: 20,
    },
    containerButton: {
      // width: '40%',
      marginRight: 10,
    },
    content: {
      color: 'black',
      fontWeight: '500',
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'justify',
    },
    points: {
      fontSize: 15,
      textAlign: 'justify',
      color: '#4A4A4A',
      fontWeight: '500',
      marginBottom: 10,
      marginTop: 5,
      paddingHorizontal: 15,
    },
  });

  const handleAccept = () => {
    setToggle(true);

    setAccepted(true);
  };

  const handleCancel = () => {
    setToggle(true);

    setAccepted(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.title}>AVISO DE PRIVACIDAD INTEGRAL</Text>

          <Text style={styles.content}>
            El Municipio de Juárez a través de la Secretaría de Seguridad
            Pública Municipal mediante el Centro de Emergencia y Respuesta
            Inmediata (CERI-911), con domicilio en Ave. Valle del Cedro No. 578
            Sur Col. Morelos III, Código Postal 32690, teléfono 737-05-00 Ext.
            72114, dentro del programa de atención de emergencias mediante una
            aplicación móvil para teléfonos inteligentes da a conocer a los
            usuarios el siguiente aviso de privacidad integral, en cumplimiento
            a lo dispuesto por el artículo 67 de la Ley de Protección de Datos
            Personales del Estado de Chihuahua. {'\n'} {'\n'}
            El tratamiento de los datos obtenidos es para efecto de brindar el
            servicio a las personas físicas, que a través de la aplicación móvil
            así lo requieran y elaborar un expediente electrónico, por lo que la
            finalidad de la obtención de los datos personales es dar
            cumplimiento a lo dispuesto por los artículos 21, párrafo noveno y
            décimo de la Constitución Política de los Estados Unidos Mexicanos,
            1, 39 apartado B fracciones IX, XI y 122 fracción III de la Ley
            General del Sistema Nacional de Seguridad Pública, 1, 8 y 65
            fracción VI y 246 de la Ley del Sistema Estatal de Seguridad
            Pública, así como a lo estipulado por la Ley de Ingresos vigente del
            Municipio de Juárez.
          </Text>

          <Text style={styles.content}>
            Los datos personales que a continuación se solicitan son
            exclusivamente los necesarios para la realización de los fines
            mencionados, por lo que es obligatorio el proporcionar la
            información requerida:
          </Text>

          <Text style={styles.points}>
            • Datos identificativos: nombre completo, domicilio, número de
            teléfono, demás datos de similar naturaleza.
          </Text>

          <Text style={styles.points}>
            • Datos electrónicos: correo electrónico no oficial y demás datos de
            similar naturaleza.
          </Text>

          <Text style={styles.points}>
            • Datos sobre salud (Datos sensibles): peso, estatura,
            padecimientos, tipo de sangre, alergias y medicamentos actuales y
            demás datos de similar naturaleza.
          </Text>

          <Text style={{...styles.points}}>
            • Datos afectivos y familiares: nombre, teléfono, domicilio, demás
            datos de similar naturaleza.
          </Text>

          <Text style={styles.content}>
            La transferencia de los datos personales es específicamente para que
            en caso de que personal del Centro de Emergencia y Respuesta
            Inmediata (CERI-911), en ejercicio de sus funciones públicas tenga
            conocimiento de la probable existencia de un hecho que la ley señale
            como delito o considerado de emergencia y realice la atención
            correspondiente, por lo que se hará la transferencia de sus datos
            personales a la Fiscalía General del Estado, Cruz Roja Mexicana,
            Centro Regulador de Urgencias Médicas de la Secretaría de Salud de
            Gobierno del Estado y a la Procuraduría de Protección Auxiliar de
            Niños, Niñas y Adolescentes para que efectúen las investigaciones
            y/o acciones correspondientes.
          </Text>

          <Text style={styles.content}>
            El titular de los datos podrá ejercer sus Derechos de Acceso,
            Rectificación, Cancelación, Oposición y Portabilidad de Datos
            Personales, así como negativa al tratamiento y transferencia de sus
            datos, ante la Unidad de Transparencia con domicilio en Francisco
            Villa 950 Norte Col. Centro, Área de Sótano ala sur de la Unidad
            Administrativa "Lie. Benito Juárez", teléfono 7370000 Ext. 70532,
            70451 y 70453, correo electrónico unidadtransparencia@juarez.gob.mx,
            o por medio de la Plataforma Nacional de Transparencia:
            http://www.plataformadetransparencia.org.mx.
          </Text>
        </View>

        <AttencionModal2
          accepted={accepted}
          toggle={toggle}
          setToggle={setToggle}
        />
      </ScrollView>
      <View style={styles.wrapperButtons}>
        <View style={styles.containerButton}>
          <Button
            onPress={() => handleCancel()}
            textBold={true}
            label="Declinar"
            backgroundButton={'transparent'}
            fontSize={16}
            textColor={COLORS.secondary}
            buttonWidth={130}
            buttonHeight={40}
          />
        </View>
        <View style={styles.containerButton}>
          <Button
            onPress={() => handleAccept()}
            textBold={true}
            label="Aceptar"
            backgroundButton={COLORS.secondary}
            fontSize={16}
            textColor={COLORS.white}
            buttonWidth={130}
            buttonHeight={40}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

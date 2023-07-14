import {View, ScrollView, SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../../components/Button';
import {COLORS} from '../../constants/theme';
import AttencionModal2 from '../../components/Modal/AttencionModal2';

const TermsConditions = () => {
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
          <Text style={styles.title}>Términos y condiciones</Text>
          <Text style={styles.content}>
            La aplicación informática para el uso del Servicio de Atención de
            Llamadas de Emergencia 911 en dispositivos móviles Android e iOS, es
            un proyecto que el Gobierno del Municipio de Juárez, a través del
            Centro de Emergencia y Respuesta Inmediata de la Secretaría de
            Seguridad Pública Municipal (en adelante CERI-911), desarrolló,
            implemento y opera, con el objeto de poner a disposición de la
            población en Ciudad Juárez, una herramienta tecnológica que facilite
            solicitar auxilio a las autoridades locales, en caso de una
            emergencia.
          </Text>

          <Text style={styles.title}>ACEPTACIÓN DE LOS TÉRMINOS.</Text>

          <Text style={styles.content}>
            Para utilizar adecuadamente esta aplicación o cualquier dato o
            información al que se acceda a través de los diferentes medios de
            transmisión de datos que se ofrecen, es necesario que usted lea
            cuidadosamente los presentes Términos y Condiciones de Uso. Usted
            podrá descargar desde su equipo móvil Android e iOS, la aplicación
            para el uso del Servicio de Atención de llamadas de Emergencia 911.
            Descargado el aplicativo en su dispositivo móvil, se ejecutará la
            aplicación. La descarga y registro de la aplicación implica que
            usted confirma que ha leído, entendido y aceptado los presentes
            Términos y Condiciones de Uso. Usted sólo podrá usar la aplicación
            de acuerdo con los Términos y Condiciones de Uso que se consignan en
            este documento. SI USTED NO ESTÁ DE ACUERDO EN LOS TÉRMINOS Y
            CONDICIONES AQUÍ ESTABLECIDOS, USTED NO PODRÁ USAR LA APLICACIÓN
          </Text>

          <Text style={styles.title}>GEOLOCALIZACIÓN</Text>

          <Text style={styles.content}>
            Para proporcionar el Servicio de Atención a Llamadas de Emergencia
            911 a través de esta aplicación, el CERI-911 deberá utilizar
            información basada en la localización de su dispositivo móvil,
            mediante tecnología GPS (Sistema de Posicionamiento Global), en
            aquellas ubicaciones en las que dicha tecnología esté disponible,
            por lo que resulta necesario recabar, utilizar, transmitir, tratar y
            almacenar los datos geográficos de usted, incluyendo de manera
            enunciativa más no limitativa, la localización geográfica de su
            dispositivo e información relativa a datos identificativos (nombre
            completo, domicilio, número de teléfono, y datos de similar
            naturaleza), datos electrónicos (correo electrónico y demás datos de
            similar naturaleza), datos de salud (peso, estatura, padecimientos,
            tipo de sangre, alergias, medicamentos actuales y demás datos de
            similar naturaleza) y datos afectivos y familiares (nombre completo,
            teléfono, domicilio y demás datos de similar naturaleza); por lo que
            usted acepta y otorga su consentimiento para que el CERI-911 lleve a
            cabo dichas actividades para prestar el servicio mediante esta
            aplicación. Esta aplicación le permite compartir su ubicación con un
            número limitado de otros usuarios de la aplicación, a través de sus
            dispositivos móviles una vez aceptadas las solicitudes enviadas, por
            lo que desde este momento usted autoriza trasmitir dicha
            información, con la única finalidad de que dichos usuarios tengan
            conocimiento del requerimiento que esté realizando del Servicio de
            Atención de Llamadas de Emergencia 911. (Contactos para
            notificación).
          </Text>

          <Text style={styles.title}>
            RESPONSABILIDAD SOBRE USO DE LA APLICACIÓN.
          </Text>

          <Text style={styles.content}>
            Usted asume la responsabilidad de todas las acciones que ejecute
            para la instalación y registro de esta aplicación, mismas que
            realiza por su cuenta y riesgo. Usted no utilizará ni permitirá que
            otros utilicen esta aplicación o cualquier servicio prestado a
            través de ella, de forma contraria a las disposiciones de estos
            Términos y Condiciones de Uso. Todo acto que realice con esta
            aplicación es responsabilidad de Usted; asimismo, se responsabiliza
            del cuidado y custodia del dispositivo móvil registrado, así como de
            las claves o contraseñas de uso, para que esta aplicación únicamente
            sea utilizada para solicitar el auxilio de las autoridades
            competentes del Municipio de Juárez, en 1 caso de una emergencia,
            por lo que cualquier mal uso que se realice de esta aplicación desde
            su dispositivo móvil para solicitar el auxilio del Servicio de
            Atención de Llamadas de Emergencia 911, se presumirá realizada por
            usted. {'\n'} {'\n'}
            Reconoce y acepta que el Gobierno del Municipio de Juárez queda
            liberado de toda responsabilidad por el mal uso que llegara a
            realizarse de esta aplicación desde su dispositivo móvil, así como
            de las claves o contraseñas utilizadas para dicho fin. Asimismo, no
            será responsable por el acceso autorizado o no autorizado a la
            información sobre la ubicación geográfica de su dispositivo móvil.
            Como todo desarrollo tecnológico, esta aplicación es falible y está
            en proceso permanente de mejora, por lo que cabe la posibilidad, aun
            cuando reducida, de que ocurran fallas técnicas durante su uso, por
            lo que el Gobierno del Municipio de Juárez no garantiza que la
            aplicación esté libre de errores; por tal motivo, usted asume la
            responsabilidad por el uso de la aplicación, respondiendo de todos
            los daños y perjuicios emergentes que pudieran presentarse.
            {'\n'} {'\n'}
            El Gobierno del Municipio de Juárez no asume ninguna responsabilidad
            por los inconvenientes que usted tuviera con el equipo hardware y/o
            software utilizados para conectarse a esta aplicación, por lo que no
            será responsable de las fallas que se presenten, ni de la
            incorrección o imprecisión en la información generada por los
            mismos, o bien de los sistemas de mapas y contenidos geográficos. En
            ningún caso el Gobierno del Municipio de Juárez será responsable por
            las consecuencias del uso indebido o fraudulento de la aplicación,
            cualquiera que sea la causa del eventual daño.
            {'\n'} {'\n'}
            En caso de que su dispositivo móvil Android e ¡OS esté fuera de la
            zona de cobertura y/o sin acceso a una red inalámbrica Wi-Fi, la
            funcionalidad de la aplicación se podrá utilizar una vez que se
            regrese al área de cobertura o se cuente con red inalámbrica, por lo
            que el Gobierno del Municipio de Juárez no será responsable por
            ningún daño o perjuicio que pudiera ocasionarle no contar con la
            señal de red necesaria para el uso de la aplicación, asumiendo usted
            toda responsabilidad derivada de tal circunstancia.
            {'\n'} {'\n'}
            Cualquier material autorizado (Ej. Software) que pueda ser
            descargado desde sitios externos, tiendas en línea de Android e iOS
            está controlado exclusivamente por términos de licencia que acompaña
            al documento o por acuerdos de términos de licencia que acompañan al
            material original. Cuando usted actualiza o descarga dichos
            materiales protegidos, está de acuerdo en cumplir con los términos
            de licencias, por lo que el Gobierno del Municipio de Juárez no será
            responsable de las consecuencias de la descarga de dichos
            materiales. Cualquier reproducción o pre-distribución de dicho
            material no conforme con la licencia, está prohibido por la ley.
          </Text>
        </View>

        <Text style={styles.title}>CAMBIOS Y ACTUALIZACIONES DEL SERVICIO</Text>

        <Text style={styles.content}>
          El Gobierno del Municipio de Juárez tiene el derecho de realizar
          modificaciones en los diferentes medios de transmisión de datos que se
          ofrecen para los dispositivos Android e iOS, ya sean temporales o
          permanentes en cualquier momento; por lo tanto, no se garantiza la
          disponibilidad ni la continuidad del funcionamiento de la aplicación
          en todo momento y/o durante el tiempo de actualización. El Gobierno
          del Municipio de Juárez no asume responsabilidad alguna por cualquier
          falla que pudiera presentarse con el uso de esta aplicación, ya sean
          por cambios y/o actualizaciones o por alguna otra causa. Cualquier
          material descargado u obtenido a través de las distintas plataformas
          del mercado de aplicaciones es bajo su responsabilidad y riesgo. El
          Gobierno del Municipio de Juárez se reserva el derecho de modificar,
          restringir o suprimir todos o cualquiera de los atributos de esta
          aplicación, en forma temporal o definitiva, sin que estas medidas
          puedan ser objeto de requerimiento alguno, ni de derecho a reclamar
          daños o perjuicios por parte de usted.
        </Text>

        <Text style={styles.title}>USO DE LA APLICACIÓN</Text>

        <Text style={styles.content}>
          Usted no podrá utilizar la aplicación de ningún modo que pueda dañar,
          inhabilitar, sobrecargar o afectar la aplicación o cualquier servicio
          del Gobierno del Municipio de Juárez, ni interferir en el uso y
          disfrute de la aplicación o de los servicios por parte de terceros.
          Usted no podrá acceder o tratar de acceder a las cuentas, sistemas o
          redes informáticas del Gobierno del Municipio de Juárez, conectadas a
          la misma, por ningún medio, ni extraer contraseñas u otros medios
          informáticos. Usted no podrá obtener o intentar obtener materiales o
          información por medios disponibles accidentalmente a través de esta
          aplicación. Usted tiene prohibido situar o transmitir desde los
          diferentes medios de transmisión de datos que ofrece la aplicación de
          atención de emergencias, cualquier material, amenaza, calumnia,
          difamación, obscenidad o cualquiera otra que pueda generar una
          responsabilidad de tipo civil, penal o cualquier otra establecida en
          las leyes aplicables. Usted no podrá utilizar esta aplicación para
          asuntos relacionados con difamar, abusar, acosar, acechar, amenazar o
          violar de cualquier otro modo los derechos (como el derecho de
          privacidad) de otras personas. Queda prohibido cargar, publicar,
          transmitir o exponer de cualquier otro modo contenido con virus u
          otros códigos informáticos, archivos o programas diseñados para
          interrumpir, destruir o limitar la funcionalidad de cualquier software
          o hardware informático o equipo de telecomunicaciones, tales como
          troyanos, gusanos, bombas de tiempo, o archivos corruptos, entre
          otros, que puedan afectar el uso de la aplicación de atención de
          emergencias. Usted no podrá enviar, publicar, modificar, transmitir,
          reproducir o distribuir por cualquier forma o medio, información,
          software u otros materiales o herramientas que comprometan la
          funcionalidad de esta aplicación o la seguridad de los sistemas del
          Gobierno del Municipio de Juárez. Usted no podrá violar los códigos de
          conducta u otras directivas aplicables a cualquier servicio de
          comunicación. Usted no podrá utilizar la información que obtenga con
          el uso de esta aplicación, para fines ilícitos o contrarios a lo
          establecido en los presentes Términos y Condiciones de Uso. Usted no
          podrá utilizar la aplicación para realizar bromas o generar falsas
          emergencias, en caso de hacerlo el servicio de la aplicación móvil
          será cancelado.
        </Text>

        <Text style={styles.title}>CONFIDENCIALIDAD</Text>

        <Text style={styles.content}>
          Usted está de acuerdo en mantener la información derivada de esta
          aplicación, como confidencial y utilizarla únicamente para el
          propósito para la cual fue creada y que le son autorizados.
        </Text>

        <Text style={styles.title}>USO PERSONAL Y NO COMERCIAL</Text>

        <Text style={styles.content}>
          La información generada por el uso de esta aplicación se proporciona
          con licencia para su uso personal e intransferible. Queda prohibido el
          uso de esta aplicación para fines comerciales o empresariales ya sea
          en beneficio propio o de un tercero. Usted no podrá modificar, copiar,
          distribuir, transmitir, exhibir, representar, reproducir, publicar,
          transferir o vender cualquier información, software, producto o
          servicio obtenido a través de esta aplicación, como tampoco podrá
          otorgar licencias o crear trabajos relacionados con los mismos.
        </Text>

        <Text style={styles.title}>DERECHOS DE PROPIEDAD INTELECTUAL</Text>

        <Text style={styles.content}>
          La aplicación de atención de emergencias es una marca registrada y una
          obra protegida por las leyes mexicanas, internacionales y tratados en
          materia de propiedad intelectual. El uso de la aplicación de atención
          de emergencias, no lo convierte a usted en titular de ninguno de los
          derechos de propiedad intelectual de la misma, ni del contenido o
          información a la que acceda. Queda prohibido a usted utilizar el
          nombre, la marca o el logotipo de esta aplicación, así como del
          Gobierno del Municipio de Juárez. Asimismo, no podrá eliminar, ocultar
          ni alterar los avisos legales que se muestren en la misma.
        </Text>

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

export default TermsConditions;

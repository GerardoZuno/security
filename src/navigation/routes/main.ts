/* eslint-disable prettier/prettier */
import Home from '../../views/home';
// import Success from '../../views/success';
// import SuccessLogin from '../../views/successLogin';
import EditProfile from '../../views/editProfile';
import EmergencyContact from '../../views/emergencyContact';
import PrivacyPolicy from '../../views/privacyPolicy';
import ContactUS from '../../views/contactUs';
import TermsConditions from '../../views/termsConditions';
import SavedNews from '../../views/savedNews';
import AllNotices from '../../views/notice/AllNotices';
import Alert from '../../views/alert';
import TabNavigator from '../TabNavigator';
import Notice from '../../views/notice/Notice';

export type RootStackParamList = {
  TabNavigator: undefined;
  Home: undefined;
  // Success: undefined;
  // 'SuccessLogin': undefined;
  'Editar perfil': undefined;
  'Guardados': undefined;
  'Contáctanos': undefined;
  'Políticas de privacidad': undefined;
  'Contactos emergencia': undefined;
  'Términos y condiciones': undefined;
  'Todas las noticias': undefined;
  'Noticia': undefined | {id: string};
  'Alerta': undefined;
};

export interface MainRoutes {
  name: keyof RootStackParamList;
  component: any;
}

export const mainRoutes: MainRoutes[] = [
  {
    name: 'TabNavigator',
    component: TabNavigator,
  },
  {
    name: 'Home',
    component: Home,
  },
  // {
  //   name: 'SuccessLogin',
  //   component: SuccessLogin,
  // },
  // {
  //   name: 'Success',
  //   component: Success,
  // },
  {
    name: 'Editar perfil',
    component: EditProfile,
  },
  {
    name: 'Contáctanos',
    component: ContactUS,
  },
  {
    name: 'Contactos emergencia',
    component: EmergencyContact,
  },
  {
    name: 'Guardados',
    component: SavedNews,
  },
  {
    name: 'Políticas de privacidad',
    component: PrivacyPolicy,
  },
  {
    name: 'Términos y condiciones',
    component: TermsConditions,
  },
  {
    name: 'Todas las noticias',
    component: AllNotices,
  },
  {
    name: 'Noticia',
    component: Notice,
  },
  {
    name: 'Alerta',
    component: Alert,
  },

];

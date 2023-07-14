import Login from '../../views/login';
import Register from '../../views/register';
import Success, {NavigationType} from '../../views/success';
import VerifyPhone from '../../views/verifyPhone';
import RegisterPhone from '../../views/registerPhone';
import Splash from '../../views/splash';
import SplashLogo from '../../views/splashLogo';
import Permissions from '../../views/permissions';
import Password from '../../views/password';
import SentEmail from '../../views/password/SentEmail';
import ChangePassword from '../../views/password/ChangePassword';
import ChangeSucess from '../../views/password/ChangeSucess';
// import LoginScreen from '../../views/loginScreen';

interface data {
  email: string;
  password: string;
  name: string;
}

export type AuthStackParamList = {
  Splash: undefined;
  SplashLogo: undefined;
  Permissions: undefined;
  Login: undefined;
  Register: undefined;
  // LoginScreen: undefined;
  Success: {
    to?: NavigationType | string;
  };
  'Register Phone': data;
  Verify_Phone: undefined | {phone: string} | {email: string};
  'Sent Email': undefined | {email: string};
  'Change Password': undefined;
  'Change Success': undefined;

  Password: undefined;
};

export interface AuthRoutes {
  name: keyof AuthStackParamList;
  component: any;
}

export const authRoutes: AuthRoutes[] = [
  {
    name: 'Splash',
    component: Splash,
  },
  {
    name: 'SplashLogo',
    component: SplashLogo,
  },
  {
    name: 'Permissions',
    component: Permissions,
  },

  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Register',
    component: Register,
  },
  {
    name: 'Password',
    component: Password,
  },
  {
    name: 'Sent Email',
    component: SentEmail,
  },
  {
    name: 'Change Password',
    component: ChangePassword,
  },
  {
    name: 'Change Success',
    component: ChangeSucess,
  },
  {
    name: 'Success',
    component: Success,
  },
  {
    name: 'Verify_Phone',
    component: VerifyPhone,
  },
  {
    name: 'Register Phone',
    component: RegisterPhone,
  },
];

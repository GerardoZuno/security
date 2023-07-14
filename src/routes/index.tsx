import ForgotPasswordPage from '@webapp/pages/auth/forgot-password';
import ForgotPasswordVerifyPage from '@webapp/pages/auth/forgot-password-verify';
import SignInPage from '@webapp/pages/auth/sign-in';
import VerifyCodePage from '@webapp/pages/auth/verification-code';
import React from 'react';
import { HomePage } from '../pages/home';

interface Route {
  path: string;
  component: string | React.FunctionComponent<unknown> | React.ComponentClass<unknown, unknown>;
}

const Routes: Route[] = [
  {
    path: '/dashboard',
    component: HomePage,
  },
  {
    path: '/sign-in',
    component: SignInPage,
  },
  {
    path: '/verification-code',
    component: VerifyCodePage,
  },
  {
    path: '/verification-code/:code',
    component: VerifyCodePage,
  },
  {
    path: '/forgot-password',
    component: ForgotPasswordPage,
  },
  {
    path: '/forgot-password/verify',
    component: ForgotPasswordVerifyPage,
  },
];

export default Routes;

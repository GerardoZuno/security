import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';
import {ICredentials} from '@aws-amplify/core';
import {ISignUpResult} from 'amazon-cognito-identity-js';
import {Auth} from 'aws-amplify';
import {BasicAccountData} from '../types/auth/basic-account-data';
import {AccountVerificationData} from '../types/auth/account-verification-data';

export const isLoggedIn = async (): Promise<boolean> => {
  try {
    await Auth.currentAuthenticatedUser();
  } catch {
    return false;
  }

  return true;
};

export const getUser = async (): Promise<unknown> => {
  try {
    // return await Auth.currentAuthenticatedUser();
    return await Auth.currentSession();
  } catch (e) {
    // unauthenticated
  }
};

export const getToken = async (): Promise<string | void> => {
  const user = await getUser();

  if (user) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (user as any).idToken.jwtToken;
    // return (user as any).accessToken.jwtToken;
  }
};

//
export const fetchAccessToken = async () => {
  try {
    const session = await Auth.currentSession();
    const accessToken = session.getAccessToken().getJwtToken();
    return accessToken;
  } catch (error) {
    console.log('Error al obtener el token de acceso:', error);
    return null;
  }
};

export const getAccountName = (email: string): string => {
  return email;
};

export const signup = async (
  data: BasicAccountData,
): Promise<{account: string; response: ISignUpResult} | undefined> => {
  const {password, ...attributes} = data;

  const account = getAccountName(attributes.email);

  try {
    const response = await Auth.signUp({
      username: account,
      password,
      attributes,
    });

    return {
      account,
      response,
    };
  } catch {
    // pass-through
  }
};

export const socialSignInStart = async (
  provider: CognitoHostedUIIdentityProvider,
): Promise<ICredentials> => {
  return await Auth.federatedSignIn({provider});
};

export const confirm = async (
  data: AccountVerificationData,
): Promise<unknown> => {
  return await Auth.confirmSignUp(data.account, data.code);
};

export const onLogin = async (
  data: BasicAccountData,
): Promise<void | string> => {
  const username = data.email;

  try {
    const response = await Auth.signIn(username, data.password);
    console.log(response);

    if (response?.challengeName === 'NEW_PASSWORD_REQUIRED') {
      return 'NEW_PASSWORD_REQUIRED';
    }
    return response;
  } catch (err: any) {
    console.log(err);
  }
};

export const onLogout = async (): Promise<void> => {
  try {
    await Auth.signOut();
  } catch {
    // pass-through
  }
};

export const changePassword = async (
  user: unknown,
  oldPassword: string,
  newPassword: string,
): Promise<'SUCCESS'> => {
  return await Auth.sendCustomChallengeAnswer(
    user,
    JSON.stringify({NEW_PASSWORD: newPassword, USERNAME: user}),
  );
};

export const startForgotPassword = async (
  username: string,
): Promise<unknown> => {
  return await Auth.forgotPassword(username);
};

export const finishForgotPassword = async (
  username: string,
  code: string,
  newPassword: string,
): Promise<void> => {
  await Auth.forgotPasswordSubmit(username, code, newPassword);
};

export const resendCode = async (username: string): Promise<unknown> => {
  return await Auth.resendSignUp(username);
};

export const completeNewPassword = async (
  user: string,
  oldPassword: string,
  newPassword: string,
): Promise<void> => {
  try {
    const signUser = await Auth.signIn({username: user, password: oldPassword});
    await Auth.completeNewPassword(signUser, newPassword);
    await Auth.signIn({username: user, password: newPassword});
  } catch (e) {
    // pass throw
  }
};

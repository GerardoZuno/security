import {Hub} from 'aws-amplify';

export const setupAmplifyIntegration = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const listener = (data: any) => {
    switch (data.payload.event) {
      case 'signIn':
        console.log(data);
        break;
      case 'signIn_failure':
        console.log(data);

        break;

      case 'signUp':
        console.log(data);

        break;
      case 'signUp_failure':
        console.log(data);

        break;
      case 'signOut':
        console.log(data);
        break;
      case 'signOut_failure':
        console.log(data);

        break;
      case 'customState_failure':
        console.log(data);

        break;
      case 'configured':
        console.log(data);
        break;
    }
  };

  Hub.listen('auth', listener);
};

export default setupAmplifyIntegration;

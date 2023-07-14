import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import {AuthProvider} from './src/store/authContext';
import {Amplify} from 'aws-amplify';
import setupAmplifyIntegration from './src/utils/login';
import {NewsProvider} from './src/store/newsContext';

setupAmplifyIntegration();
Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_t7wLQ06Wq',
    userPoolWebClientId: '7l44imeqr5qdrljee2v490knd5',
    mandatorySignIn: true,
  },
});
const App = () => {
  return (
    <AuthProvider>
      <NewsProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </NewsProvider>
    </AuthProvider>
  );
};

export default App;

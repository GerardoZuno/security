import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {AuthRoutes, authRoutes, AuthStackParamList} from './routes/auth';

export type RouteProps = NativeStackScreenProps<AuthStackParamList>;

const MainStack = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {authRoutes.map((route: AuthRoutes, index: number) => (
        <Stack.Screen
          name={route.name}
          component={route.component}
          key={index}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;

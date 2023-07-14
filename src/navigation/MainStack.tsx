import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {MainRoutes, mainRoutes} from './routes/main';
import {RootStackParamList} from './routes/main';
import {useWindowDimensions, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../constants/theme';
import {Button} from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {back} from '../assets/icons/index';
import WhiteJuarez from '../assets/svg/components/WhiteJuarez';

export type RouteProps = NativeStackScreenProps<RootStackParamList>;

const MainStack = () => {
  const {height} = useWindowDimensions();
  const {goBack} = useNavigation();

  const Stack = createNativeStackNavigator<RootStackParamList>();

  const screenOptions: NativeStackNavigationOptions = {
    headerShown: true,
  };

  const styles = StyleSheet.create({
    container: {
      height: height * 0.12,
      backgroundColor: COLORS.primary,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      position: 'relative',
    },
    buttonWrapper: {
      position: 'absolute',
      width: 100,
      paddingHorizontal: 10,
      left: 0,
    },
    imgWrapper: {
      position: 'absolute',
      right: 0,
      paddingHorizontal: 10,
      // width: 100,
    },
    title: {
      color: COLORS.white,
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  const CustomHeader = (props: any) => {
    const {route} = props;
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => goBack()}
            image={back}
            buttonWidth="100%"
            backgroundButton="transparent"
          />
        </View>
        <Text style={styles.title}>{route.name}</Text>

        <View style={styles.imgWrapper}>
          <WhiteJuarez />
        </View>
      </View>
    );
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {mainRoutes.map((route: MainRoutes, index: number) => (
        <Stack.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={{
            header: props => {
              if (
                !props.route.name.includes('TabNavigator') &&
                !props.route.name.includes('Alerta')
              ) {
                return <CustomHeader {...props} />;
              }
            },
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;

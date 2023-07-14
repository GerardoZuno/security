import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabs, Tabs} from './routes/tabs';
import {Button} from '../components/Button';
import {back} from '../assets/icons/index';
import WhiteJuarez from '../assets/svg/components/WhiteJuarez';
import {useNavigation} from '@react-navigation/native';
import useTheme from '../hooks/useTheme';

const TabNavigator = () => {
  const COLORS = useTheme();
  const {navigate} = useNavigation<any>();
  const Tab = createBottomTabNavigator();
  const {height} = useWindowDimensions();

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
      // width: 50,
    },
    title: {
      color: COLORS.white,
      fontSize: 20,
      fontWeight: 'bold',
    },
    focusedButton: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: COLORS.pink,
      borderRadius: 8,
    },
    noFocusedButton: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    img: {
      resizeMode: 'contain',
      width: 25,
      height: 25,
    },
  });

  const TabBarCustomButton = (props: any) => {
    const {accessibilityState, children, onPress} = props;

    if (accessibilityState.selected) {
      return (
        <TouchableOpacity style={styles.focusedButton} onPress={onPress}>
          <View>{children}</View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={onPress} style={styles.noFocusedButton}>
          <View>{children}</View>
        </TouchableOpacity>
      );
    }
  };

  const CustomHeader = (props: any) => {
    const {route} = props;

    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          {!route.name.includes('Inicio') && (
            <Button
              onPress={() => navigate('Inicio')}
              image={back}
              buttonWidth="100%"
              backgroundButton="transparent"
            />
          )}
        </View>
        <Text style={styles.title}>{route.name}</Text>
        <View style={styles.imgWrapper}>
          <WhiteJuarez />
        </View>
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        header: props => {
          if (props.route.name.length > 0) {
            return <CustomHeader {...props} />;
          }
        },
      }}>
      {tabs.map((tab: Tabs, index: number) => (
        <Tab.Screen
          key={index}
          component={tab.component}
          name={tab.name}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={tab.icon}
                style={[
                  styles.img,
                  focused
                    ? {tintColor: COLORS.secondary}
                    : {tintColor: COLORS.black},
                ]}
              />
            ),
            tabBarButton: props => <TabBarCustomButton {...props} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  favorite,
  save,
  arrowDown,
  darkSave,
  reload,
  darkFavorite,
} from '../../assets/icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/routes/main';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Button';
import { NewsContext } from '../../store/newsContext';
import useTheme from '../../hooks/useTheme';
import {COLORS} from '../../constants/theme';
import Favorite from '../../assets/svg/components/Favorite';
import Save from '../../assets/svg/components/Save';


export type NavigationType = NativeStackNavigationProp<RootStackParamList>;

export interface Notice {
  photo: string;
  publicationAt: string;
  category: string[];
  title: string;
  body: string;
  tenantId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}


const Notice = ({route}: any) => {
  const {navigate} = useNavigation<NavigationType>();
  const {id} = route.params;

  const noticeId = id;

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: '5%',
      backgroundColor: COLORS.white,
      flex: 1,
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noticeWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 150,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.gray,
    },
    filterWrapper: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      height: 40,
    },
    finder: {
      backgroundColor: '#E0EDFC',
      borderRadius: 15,
      width: '50%',
      paddingHorizontal: 10,
      height: '100%',
      color: 'grey',
    },
    buttonWrapper: {
      // backgroundColor: 'red',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      marginRight: 0,
    },
    notice: {
      width: '60%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingVertical: '5%',
      height: '100%',
    },
    title: {
      color: COLORS.black,
      fontWeight: 'bold',
      fontSize: 18,
    },
    description: {
      color: COLORS.black,
      fontSize: 12,
    },
    imageWrapper: {
      width: '40%',
      padding: '5%',
    },
    image: {
      resizeMode: 'contain',
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
  });
  

  const {data, removeNews, isSaved, savedIcon, isFavorite, favoriteNews, handleFavoritePress, handleSavePress} =
    useContext(NewsContext);


    const notice = data.find((item) => item.id === noticeId);

  if (!notice) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
      }}>
      <ScrollView>
        <View
          style={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            overflow: 'hidden',
            marginTop: '0%',
          }}>
          <Image
            source={{uri: notice?.photo}}
            style={{width: '100%', height: 250}}
          />

          <View style={styles.container}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // backgroundColor: 'red'
              }}>

                <View style={{
                  // backgroundColor: 'blue',
                  width: '80%',
                }}>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#111111',
                  marginTop: 10,
                  marginBottom: 25,
                }}>
                {notice?.title}
              </Text>

              </View>


              <View style={styles.buttonWrapper}>
                <View style={{marginRight: 10}}>
                <TouchableOpacity
                      onPress={() => {
                        handleFavoritePress(notice.id);
                        console.log(notice.isFavorite);
                      }}>
                      <Favorite isFavorited={notice.isFavorite} />
                    </TouchableOpacity>
                </View>

                <View>
                      <TouchableOpacity
                        // image={notice.isSave ? darkSave : save}
                        onPress={() => {
                          handleSavePress(notice.id);
                        }}>
                        <Save isSaved={notice.isSave} />
                      </TouchableOpacity>
                    </View>

              </View>
            </View>
            <View>
              <Text
                style={{
                  color: '#111111',
                }}>
                {notice?.body}
              </Text>
            </View>

          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default Notice;




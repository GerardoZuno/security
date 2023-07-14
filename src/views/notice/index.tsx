/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SafeAreaView,
  ScrollView,
  View,
  Animated,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {favorite, save, darkSave, darkFavorite} from '../../assets/icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/routes/main';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Button';
import {HeaderNotice} from '../../components/ui/HeaderNotice';
import {News} from '../../types/auth/news';
import {NewsContext} from '../../store/newsContext';
import {COLORS} from '../../constants/theme';

import Favorite from '../../assets/svg/components/Favorite';
import DarkFavorite from '../../assets/svg/components/DarkFavorite';
import Save from '../../assets/svg/components/Save';
import {getThemes} from '../../sdk/panic';
import useTheme from '../../hooks/useTheme';

export type NavigationType = NativeStackNavigationProp<RootStackParamList>;

const Notice = () => {
  const {navigate} = useNavigation<NavigationType>();
  const {data, handleFavoritePress, handleSavePress} = useContext(NewsContext);

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: '5%',
      flex: 1,
      backgroundColor: '#fff',
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
      height: 160,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.gray,
    },
    buttonWrapper: {
      width: '100%',
      flexDirection: 'row',
    },
    button: {
      marginLeft: 7,
      marginRight: 5,
      marginTop: 15,
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

  const scrollX = new Animated.Value(0);

  if (!data || data.length === 0) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <HeaderNotice scrollX={scrollX} />
        </View>
        <View style={styles.container}>
          <View>
            <Button
              onPress={() => navigate('Todas las noticias')}
              label="Ver todas las noticias"
              backgroundButton="transparent"
              textColor={COLORS.secondary}
              textBold
              buttonHeight={45}
              buttonWidth={200}
            />
          </View>
          {data?.map((notice, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigate('Noticia', {id: notice.id.toString()})}>
              <View style={styles.noticeWrapper}>
                {/* ---- */}
                <View style={styles.notice}>
                  <Text style={styles.title}>{notice.title}</Text>
                  <Text style={styles.description}>
                    {notice.body.substring(0, 90)}...
                  </Text>
                  <View style={styles.buttonWrapper}>
                    {/* --- */}
                    <View style={styles.button}>
                      <TouchableOpacity
                        onPress={() => {
                          handleFavoritePress(notice.id);
                        }}>
                        <Favorite isFavorited={notice.isFavorite} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
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
                </View>
                {/* ---  */}
                <View style={styles.imageWrapper}>
                  <Image source={{uri: notice.photo}} style={styles.image} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notice;

/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {descriptionNotice, headerNotice} from '../../assets/images';
import {COLORS} from '../../constants/theme';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/routes/main';
import {useNavigation} from '@react-navigation/native';
import {darkFavorite, darkSave, favorite, save} from '../../assets/icons';
import {Button} from '../../components/Button';
import {NewsContext} from '../../store/newsContext';
import useTheme from '../../hooks/useTheme';
import Favorite from '../../assets/svg/components/Favorite';
import Save from '../../assets/svg/components/Save';

interface WeekNotice {
  title: string;
  description: string;
  image: any;
}

export type NavigationType = NativeStackNavigationProp<RootStackParamList>;

const SavedNews = () => {
  const {navigate} = useNavigation<NavigationType>();

  const {
    data,
    removeNews,
    savedIcon,
    isSaved,
    isFavorite,
    favoriteNews,
    handleFavoritePress,
    handleSavePress,
  } = useContext(NewsContext);

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: '5%',
      backgroundColor: COLORS.white,
      flex: 1,
    },
    noticeWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 150,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.gray,
    },
    buttonWrapper: {
      width: '100%',
      flexDirection: 'row',
    },
    button: {
      marginRight: 5,
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

  const savedNews = data.filter(item => item.isSave === true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {savedNews.map((notice, index: number) => (
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
                        console.log(notice.isFavorite);
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavedNews;

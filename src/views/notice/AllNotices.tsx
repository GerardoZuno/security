/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {favorite, save, arrowDown, darkSave, reload, darkFavorite} from '../../assets/icons';
import {COLORS} from '../../constants/theme';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/routes/main';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Button';
import FilterModal from '../../components/Modal/FilterModal';
import { NewsContext } from '../../store/newsContext';
import useTheme from '../../hooks/useTheme';
import Favorite from '../../assets/svg/components/Favorite';
import { News } from '../../types/auth/news';
import Save from '../../assets/svg/components/Save';

export type NavigationType = NativeStackNavigationProp<RootStackParamList>;

interface WeekNotice {
  title: string;
  description: string;
  image: any;
  isFavorite?: boolean;
  id: number;
}

export interface Root {
  Notices: Notice[];
  nextToken: any;
}

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

const AllNotices = () => {
  const {navigate} = useNavigation<NavigationType>();
  const [toggle, setToggle] = useState(false);

  const {data, handleFavoritePress, savedNews, addNews, removeNews, isSaved, savedIcon, isFavorite, favoriteNews, handleSavePress} =
    useContext(NewsContext);

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
      filterWrapper: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        height: 40,
      },
      loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      filterContainer: {
        position: 'relative',
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
        width: '100%',
        flexDirection: 'row',
      },
      button: {
        marginLeft: 7,

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


  console.log('navigate: ', navigate);



 

  if (!data || data.length === 0) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.filterWrapper}>
            <TextInput
              placeholderTextColor="grey"
              placeholder="Buscar noticia"
              style={styles.finder}
            />
            <View style={styles.filterContainer}>
           <FilterModal toggle={toggle} setToggle={setToggle}  />

              <Button
                onPress={() => {
                  setToggle(true);
                }}
                label="Filtrar"
                imgColor={COLORS.black}
                flexDirection="row"
                alignItems="center"
                image={arrowDown}
                backgroundButton="transparent"
                textColor={COLORS.black}
                textBold
                textMarginRight={5}
                imgWidth={15}
                imgHeight={15}
              />

            </View>
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
                          onPress={() => {
                            handleSavePress(notice.id);
                          }}
                         
                        >
                        <Save isSaved={notice.isSave}/>
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



export default AllNotices;

import {
  View,
  Animated,
  Image,
  Text,
  Dimensions,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {RenderDots} from './RenderDots';
import {COLORS} from '../../constants/theme';
import Favorite from '../../assets/svg/components/Favorite';
import {NewsContext} from '../../store/newsContext';
import Save from '../../assets/svg/components/Save';

export const HeaderNotice = ({scrollX}: any) => {
  const {data, handleFavoritePress, handleSavePress} = useContext(NewsContext);

  const {height, width} = useWindowDimensions();

  const items = data.slice(0, 2);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        {items?.map((item: any, index: number) => (
          <View
            style={{height: height * 0.25, position: 'relative'}}
            key={index}>
            <Image
              source={{uri: item.photo}}
              resizeMode="cover"
              style={{height: '100%', width: width}}
            />
            {/* --- */}
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>
                {item.body.substring(0, 90)}..
              </Text>
              {/* --- */}
              <View style={styles.buttonWrapper}>
                <View style={styles.button}>
                  <TouchableOpacity
                    onPress={() => {
                      handleFavoritePress(item.id);
                      console.log(item.isFavorite);
                    }}>
                    <Favorite isFavorited={item.isFavorite} />
                  </TouchableOpacity>
                </View>
                <View style={styles.button}>
                  <View>
                    <TouchableOpacity
                      // image={notice.isSave ? darkSave : save}
                      onPress={() => {
                        handleSavePress(item.id);
                      }}>
                      <Save isSaved={item.isSave} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.dots}>
        <RenderDots scrollX={scrollX} items={items} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  textWrapper: {
    position: 'absolute',
    bottom: '20%',
    marginHorizontal: '5%',
    maxHeight: Dimensions.get('window').height * 0.18,
    maxWidth: Dimensions.get('window').width * 0.95,
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginTop: 15,
  },
  button: {
    marginRight: 5,
  },
  title: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    color: COLORS.white,
    fontSize: 16,
  },
  dots: {
    position: 'absolute',
    bottom: 5,
    left: '50%',
    right: '50%',
  },
});

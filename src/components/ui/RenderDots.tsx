import {View, Animated, useWindowDimensions, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';

export const RenderDots = ({items, scrollX}: any) => {
  const {width} = useWindowDimensions();

  const dotPosition = Animated.divide(scrollX, width);

  return (
    <View style={styles.container}>
      {items?.map((_: any, index: number) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp',
        });

        const dotSize = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [6.5, 10, 6.5],
          extrapolate: 'clamp',
        });

        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [COLORS.white, COLORS.secondary, COLORS.white],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={index}
            // @ts-ignore
            opacity={opacity}
            style={[
              styles.dots,
              {
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    borderRadius: 30,
    marginHorizontal: 6,
  },
});

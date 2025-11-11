import React, { useRef, useEffect, useCallback } from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';

const images = [
  require('../assets/banner-1.png'),
  require('../assets/banner-2.jpg'),
  require('../assets/banner-3.jpg'),
];

const { width } = Dimensions.get('window');

const BannerComponent = () => {
  const flatListRef = useRef(null);
  const scrollIndex = useRef(1);
  const intervalIdRef = useRef(null);

  const loopedImages = useRef([
    images[images.length - 1],
    ...images,
    images[0],
  ]).current;
  const REAL_IMAGES_COUNT = images.length;
  const TOTAL_LOOPS_COUNT = loopedImages.length;

  const scrollTo = useCallback((index, animated) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated });
    }
    scrollIndex.current = index;
  }, []);

  const startAutoScroll = useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    intervalIdRef.current = setInterval(() => {
      let nextIndex = scrollIndex.current + 1;

      if (nextIndex >= TOTAL_LOOPS_COUNT) {
        scrollTo(1, false);
      } else {
        scrollTo(nextIndex, true);
      }
    }, 3000);
  }, [scrollTo, TOTAL_LOOPS_COUNT]);

  const stopAutoScroll = useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  }, []);

  useEffect(() => {
    const initialScrollTimeout = setTimeout(() => {
      scrollTo(scrollIndex.current, false);
      startAutoScroll();
    }, 50);

    return () => {
      clearTimeout(initialScrollTimeout);
      stopAutoScroll();
    };
  }, [scrollTo, startAutoScroll, stopAutoScroll]);

  const handleMomentumScrollEnd = useCallback(
    event => {
      const contentOffset = event.nativeEvent.contentOffset.x;
      const newPhysicalIndex = Math.round(contentOffset / width);

      scrollIndex.current = newPhysicalIndex;

      if (newPhysicalIndex === TOTAL_LOOPS_COUNT - 1) {
        scrollTo(1, false);
      } else if (newPhysicalIndex === 0) {
        scrollTo(REAL_IMAGES_COUNT, false);
      }

      startAutoScroll();
    },
    [scrollTo, startAutoScroll, REAL_IMAGES_COUNT, TOTAL_LOOPS_COUNT],
  );

  return (
    <View style={styles.bannerContainer}>
      <FlatList
        ref={flatListRef}
        data={loopedImages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image
              source={item}
              style={styles.bannerImage}
              resizeMode="cover"
            />
            <View style={styles.overlay} />
          </View>
        )}
        keyExtractor={(_, i) => i.toString()}
        onMomentumScrollBegin={stopAutoScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: width,
    height: moderateScale(180),
  },
  imageWrapper: {
    width: width,
    alignItems: 'center',
  },
  bannerImage: {
    width: '90%',
    height: '90%',
    borderRadius: moderateScale(18),
  },
  overlay: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    borderRadius: moderateScale(18),
    backgroundColor: colors.bannerOverlay,
  },
});

export default BannerComponent;

import React, { useRef, useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const images = [
  require('../assets/banner-1.png'),
  require('../assets/banner-2.jpg'),
  require('../assets/banner-3.jpg'),
];

const { width } = Dimensions.get('window');

const BannerComponent = () => {
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % images.length;
      setIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <View style={styles.bannerContainer}>
      <FlatList
        ref={flatListRef}
        data={images}
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: width,
    height: moderateScale(180),
    marginTop: moderateScale(10),
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default BannerComponent;

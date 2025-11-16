import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import colors from '../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Loader from './Loader';
import apiConfig from '../constants/apiConfig';
import styles from '../styles/PlayGolfComponentStyles';

const PlayGolfComponent = () => {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [golfCourses, setGolfCourses] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    let watchId;

    const checkPermissionAndWatch = async () => {
      try {
        setLoadingLocation(true);
        let permission;
        if (Platform.OS === 'android') {
          permission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        } else {
          permission = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        }

        if (permission !== RESULTS.GRANTED) {
          setLocationEnabled(false);
          setLoadingLocation(false);
          return;
        }

        watchId = Geolocation.watchPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
            setLocationEnabled(true);
            setLoadingLocation(false);
          },
          error => {
            console.log('GPS OFF → Error:', error);
            setLocationEnabled(false);
            setLoadingLocation(false);
          },
          {
            enableHighAccuracy: true,
            distanceFilter: 0,
            interval: 2000,
            fastestInterval: 1000,
          },
        );
      } catch (error) {
        console.log('Location Error:', error);
        setLocationEnabled(false);
        setLoadingLocation(false);
      }
    };

    checkPermissionAndWatch();

    return () => {
      if (watchId != null) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, []);

  useEffect(() => {
    if (locationEnabled && userLocation && !golfCourses.length) {
      fetchGolfCourses();
    }
  }, [locationEnabled, userLocation]);

  const handleCheckLocation = async () => {
    try {
      let permission;
      if (Platform.OS === 'android') {
        permission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      } else {
        permission = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      }

      if (permission !== RESULTS.GRANTED) {
        console.log('Location Permission Denied');
        setLocationEnabled(false);
        return;
      }

      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setLocationEnabled(true);
        },
        error => {
          console.log('GPS Off or No Access', error);
          setLocationEnabled(false);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    } catch (error) {
      console.log('Location Error:', error);
      setLocationEnabled(false);
    }
  };

  const fetchGolfCourses = async () => {
    try {
      setLoadingCourses(true);
      const response = await fetch(
        `${apiConfig.FETCH_GOLF_COURSES}?lat=${userLocation.latitude}&lon=${userLocation.longitude}`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch golf courses');
      }

      const data = await response.json();
      setGolfCourses(data);
      setLoadingCourses(false);
    } catch (error) {
      console.log('Fetch Courses Error:', error.message);
      setGolfCourses([]);
      setLoadingCourses(false);
    }
  };

  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.container}>
        <Text style={styles.appName}>FairwayOne</Text>

        <View style={styles.searchBox}>
          <Icon
            name="search"
            size={moderateScale(18)}
            color={colors.placeHolderColor}
          />
          <TextInput
            style={styles.input}
            placeholder="Search All Courses"
            placeholderTextColor={colors.placeHolderColor}
          />
        </View>

        {loadingLocation || loadingCourses ? (
          <Loader />
        ) : !locationEnabled ? (
          <>
            <View style={styles.gpsNeeded}>
              <Text style={styles.gpsTitle}>GPS Needed</Text>
              <Text style={styles.gpsSubTitle}>
                Please enable your phone's GPS to use features such as finding
                nearby courses and flyover maps
              </Text>
              <TouchableOpacity onPress={handleCheckLocation}>
                <Text style={styles.turnOnGps}>Turn on GPS</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.noNearbyCourses}>
              <Text style={styles.titleNearbyCourses}>No nearby courses</Text>
              <Text style={styles.subTitleNearbyCourses}>
                We can't find any courses within a 100km radius. Try searching
                for your favorites instead.
              </Text>
            </View>

            <View style={styles.mapBtnContainer}>
              <TouchableOpacity style={styles.mapBtn}>
                <Icon2
                  name="map-legend"
                  size={moderateScale(18)}
                  color={colors.primary}
                />
                <Text style={styles.mapBtnText}>Map</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <ScrollView>
            {golfCourses.map((course, index) => (
              <View style={styles.golfCoursesMain} key={index}>
                <ImageBackground
                  source={{
                    uri: 'https://wallpapers.com/images/hd/mountain-view-golf-course-desktop-2hfjwmg2gxtj2cvw.jpg',
                  }}
                  style={styles.golfMainBgImage}
                  imageStyle={{ borderRadius: 12 }}
                >
                  <View style={styles.overlay} />

                  <View style={styles.contentWrapper}>
                    <Text style={styles.title}>{course.name}</Text>
                    <Text style={styles.country}>{course.country}</Text>

                    <View style={styles.buttonsRow}>
                      <TouchableOpacity style={styles.btn1}>
                        <Text style={styles.btnText1}>PREVIEW</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.btn2}>
                        <Text style={styles.btnText2}>PLAY GOLF</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PlayGolfComponent;

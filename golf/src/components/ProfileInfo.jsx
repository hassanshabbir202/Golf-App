import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import apiConfig from '../constants/apiConfig';
import styles from '../styles/ProfileInfoStyles';

const ProfileInfo = ({ navigation }) => {
  const [profile, setProfile] = useState(null);

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const fetchProfile = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (!userId) return;

      const response = await fetch(apiConfig.PLAYER_PROFILE + '/' + userId);
      const data = await response.json();

      if (response.ok) {
        setProfile(data.user);
      } else {
        console.log('Error fetching profile:', data.message);
      }
    } catch (error) {
      console.log('Profile fetch error:', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleEdit = () => {
    navigation.navigate('EditProfile');
  };

  if (!profile) {
    return <Loader />;
  }

  return (
    <SafeAreaView edges={['top']}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.settingsIconMain}>
            <TouchableOpacity
              style={styles.settingsIcon}
              onPress={handleSettings}
            >
              <Icon
                name="settings"
                size={moderateScale(22)}
                color={colors.rgbColor}
              />
            </TouchableOpacity>
          </View>

          <Image
            source={{
              uri:
                profile?.profileImage ||
                'https://water.wha-industrialestate.com/images/logo_user.png',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>
            {profile?.firstName} {profile?.lastName}
          </Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statCount}>{profile?.courses}</Text>
              <Text style={styles.statLabel}>COURSES</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statCount}>{profile?.following}</Text>
              <Text style={styles.statLabel}>FOLLOWING</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statCount}>{profile?.followers}</Text>
              <Text style={styles.statLabel}>FOLLOWERS</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.editProfileButton}
              onPress={handleEdit}
            >
              <Text style={styles.editProfileButtonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Icon name="share" size={moderateScale(20)} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.additionalStatsContainer}>
            <View style={styles.additionalStatItem}>
              <Text style={styles.additionalStatCount}>
                {profile?.avgScore}
              </Text>
              <Text style={styles.additionalStatLabel}>AVG SCORE</Text>
            </View>
            <View style={styles.additionalStatItem}>
              <Text style={styles.additionalStatCount}>{profile?.rounds}</Text>
              <Text style={styles.additionalStatLabel}>ROUNDS</Text>
            </View>
            <View style={styles.additionalStatItem}>
              <Text style={styles.additionalStatCount}>
                {profile?.handicap}
              </Text>
              <Text style={styles.additionalStatLabel}>HANDICAP</Text>
            </View>
          </View>

          <View style={styles.highlightsContainer}>
            <TouchableOpacity style={styles.highlights}>
              <View style={styles.highlightsLeft}>
                <Icon
                  name="star"
                  size={moderateScale(20)}
                  color={colors.primary}
                />
                <Text style={styles.highlightsText}>Highlights</Text>
              </View>
              <Icon
                name="chevron-right"
                size={moderateScale(22)}
                color={colors.placeHolderColor}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.commentBoxContainer}>
            <View style={styles.commentBox}>
              <View>
                <Image
                  source={{
                    uri:
                      profile?.profileImage ||
                      'https://water.wha-industrialestate.com/images/logo_user.png',
                  }}
                  style={styles.commentAvatar}
                />
              </View>
              <View style={styles.profileInfoTxt}>
                <Text style={styles.title2}>
                  {profile?.firstName} {profile?.lastName}
                </Text>
                <Text style={styles.subTitle2}>2 days ago</Text>
              </View>
            </View>

            <View>
              <Text style={styles.mainComment}>
                Really Good Experience For the Last Round.
              </Text>
            </View>

            <View style={styles.commentIconsMain}>
              <Icon name="heart" size={22} color={colors.primary} />
              <Icon2
                name="comment-processing"
                size={22}
                color={colors.primary}
                style={styles.commentIcon}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileInfo;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import apiConfig from '../constants/apiConfig';
import Loader from '../components/Loader';
import ValidationMessage from './ValidationMessage';
import styles from '../styles/EditProfileStyles';

const EditProfile = ({ navigation }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('error');

  const fetchProfile = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (!userId) return;
      setLoading(true);

      const response = await fetch(`${apiConfig.PLAYER_PROFILE}/${userId}`);
      const data = await response.json();

      if (response.ok) setProfile(data.user);
      else console.log('Fetch Error:', data.message);
    } catch (error) {
      console.log('Profile Fetch Error:', error);
      setMessage('Failed to load profile');
      setType('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.8,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) return;
      if (response.errorCode) {
        console.log('ImagePicker Error:', response.errorMessage);
        setMessage('Failed to pick image');
        setType('error');
        return;
      }

      if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        const base64Image = `data:${asset.type};base64,${asset.base64}`;
        setProfile({ ...profile, profileImage: base64Image });
      }
    });
  };

  const handleSave = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const token = await AsyncStorage.getItem('userToken');

      if (!userId || !token) {
        setMessage('User not authenticated');
        setType('error');
        setLoading(false);
        return;
      }

      const bodyData = {
        firstName: profile.firstName || '',
        lastName: profile.lastName || '',
        phoneNumber: profile.phoneNumber || '',
        profileImage: profile.profileImage || '',
      };

      console.log('Sending profile update:', bodyData);

      const response = await fetch(
        `${apiConfig.EDIT_PLAYER_PROFILE}/${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bodyData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setType('success');
        setMessage('Profile updated successfully!');
        navigation.navigate('Profile');
      } else {
        console.log('Server error:', data);
        setMessage(data.message || 'Error updating profile');
        setType('error');
      }
    } catch (error) {
      console.log('Update error:', error);
      setMessage('Something went wrong');
      setType('error');
    } finally {
      setLoading(false);
    }
  };

  if (loading || !profile) {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90%',
        }}
      >
        <Loader />
      </View>
    );
  }

  return (
    <SafeAreaView edges={['top']}>
      <ScrollView contentContainerStyle={styles.container}>
        <ValidationMessage
          message={message}
          type={type}
          onHide={() => setMessage('')}
        />

        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
          <Image
            source={{
              uri:
                profile.profileImage ||
                'https://water.wha-industrialestate.com/images/logo_user.png',
            }}
            style={styles.profileImage}
          />
          <View style={styles.cameraIcon}>
            <Icon name="camera" size={moderateScale(18)} color="white" />
          </View>
        </TouchableOpacity>

        <View style={styles.formGroup}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            value={profile.firstName}
            onChangeText={text => setProfile({ ...profile, firstName: text })}
            style={styles.input}
            placeholder="Enter first name"
            placeholderTextColor={colors.placeHolderColor}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            value={profile.lastName}
            onChangeText={text => setProfile({ ...profile, lastName: text })}
            style={styles.input}
            placeholder="Enter last name"
            placeholderTextColor={colors.placeHolderColor}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            value={profile.phoneNumber}
            onChangeText={text => setProfile({ ...profile, phoneNumber: text })}
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor={colors.placeHolderColor}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={profile.email}
            editable={false}
            placeholderTextColor={colors.placeHolderColor}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

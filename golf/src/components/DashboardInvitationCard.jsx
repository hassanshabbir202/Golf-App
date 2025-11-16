import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/DashboardInvitationCardStyles';

const DashboardInvitationCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Are your buddies already on FairwayOne?</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.inviteText}>INVITE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchText}>SEARCH COMMUNITY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardInvitationCard;

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import TopDrawerMenuNavigation from '../components/TopDrawerMenuNavigation';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <TopDrawerMenuNavigation />

      <Text style={GlobalStyle.screenTitle}>Profile Screen</Text>

      <Text>Name: Jacob</Text>
      <TouchableOpacity>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
});

export default ProfileScreen;

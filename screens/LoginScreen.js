import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ProfileIcon from '../icons/ProfileIcon';

const LoginScreen = () => {
  const nevigation = useNavigation();
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableHighlight
        onPress={() => {
          nevigation.navigate('SignupScreen');
        }}>
        <ProfileIcon color="#333" size={20} />
      </TouchableHighlight>
    </View>
  );
};

export default LoginScreen;

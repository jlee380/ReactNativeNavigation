import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import RestaurantScreen from './screens/RestaurantScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  const RootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="RestaurantsScreen">
        <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <RootStack.Screen
          name="RestaurantsScreen"
          component={RestaurantsScreen}
        />
        <RootStack.Screen name="ExploreScreen" component={ExploreScreen} />
        <RootStack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});

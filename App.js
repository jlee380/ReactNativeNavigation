import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import RestaurantScreen from './screens/RestaurantScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function App() {
  const RootStack = createBottomTabNavigator();
  const RestaurantsStack = createNativeStackNavigator();
  const ExploreStack = createNativeStackNavigator();

  const RestaurantsScreenStack = () => {
    return (
      <RestaurantsStack.Navigator>
        <RestaurantsStack.Screen
          name="RestaurantsScreen"
          component={RestaurantsScreen}
        />
        <RestaurantsStack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
        />
      </RestaurantsStack.Navigator>
    );
  };

  const ExploreScreenStack = () => {
    return (
      <ExploreStack.Navigator initialRouteName="ExploreScreen">
        <ExploreStack.Screen name="ExploreScreen" component={ExploreScreen} />
        <ExploreStack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
        />
      </ExploreStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="RestaurantsScreen">
        <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <RootStack.Screen
          name="RestaurantsScreenStack"
          component={RestaurantsScreenStack}
        />
        <RootStack.Screen
          name="ExploreScreenStack"
          component={ExploreScreenStack}
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

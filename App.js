import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import RestaurantScreen from './screens/RestaurantScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreIcon from './icons/ExploreIcon';
import ProfileIcon from './icons/ProfileIcon';
import RestaurantIcon from './icons/RestaurantIcon';

export default function App() {
  const RootStack = createBottomTabNavigator();
  const RestaurantsStack = createNativeStackNavigator();
  const ExploreStack = createNativeStackNavigator();

  const RestaurantsScreenStack = () => {
    return (
      <RestaurantsStack.Navigator screenOptions={{headerShown: false}}>
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
      <ExploreStack.Navigator
        initialRouteName="ExploreScreen"
        screenOptions={{headerShown: false}}>
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
      <RootStack.Navigator
        initialRouteName="ExploreScreenStack"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#e67a15',
          tabBarInactiveTintColor: 'gray',
        }}>
        <RootStack.Screen
          name="ExploreScreenStack"
          component={ExploreScreenStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <ExploreIcon size={size} color={color} />
            ),
            tabBarLabel: 'Explore',
          }}
        />
        <RootStack.Screen
          name="RestaurantsScreenStack"
          component={RestaurantsScreenStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <RestaurantIcon size={size} color={color} />
            ),
            tabBarLabel: 'Restaurant',
          }}
        />
        <RootStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <ProfileIcon size={size} color={color} />
            ),
            tabBarLabel: 'Profile',
          }}
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

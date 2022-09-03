import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import RestaurantScreen from './screens/RestaurantScreen';
// import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ExploreIcon from './icons/ExploreIcon';
import ProfileIcon from './icons/ProfileIcon';
import RestaurantIcon from './icons/RestaurantIcon';

export default function App() {
  const RootStack = createDrawerNavigator();
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
          drawerActiveTintColor: '#e67a15',
          drawerInactiveTintColor: 'gray',
        }}>
        <RootStack.Screen
          name="ExploreScreenStack"
          component={ExploreScreenStack}
          options={{
            drawerIcon: ({color, size}) => (
              <ExploreIcon size={size} color={color} />
            ),
            drawerLabel: 'Explore',
          }}
        />
        <RootStack.Screen
          name="RestaurantsScreenStack"
          component={RestaurantsScreenStack}
          options={{
            drawerIcon: ({color, size}) => (
              <RestaurantIcon size={size} color={color} />
            ),
            drawerLabel: 'Restaurant',
          }}
        />
        <RootStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <ProfileIcon size={size} color={color} />
            ),
            drawerLabel: 'Profile',
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

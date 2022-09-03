import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

// import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreIcon from './icons/ExploreIcon';
import ProfileIcon from './icons/ProfileIcon';
import RestaurantIcon from './icons/RestaurantIcon';

const RootStack = createBottomTabNavigator();
const RestaurantsStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

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

const AuthScreenStack = () => {
  return (
    <AuthStack.Navigator initialRouteName="LoginScreen">
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

export default function App() {
  const renderContent = () => {
    const isLoggedIn = false;

    if (isLoggedIn) {
      return (
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
      );
    }
    return <AuthScreenStack />;
  };
  return <NavigationContainer>{renderContent()}</NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {},
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});

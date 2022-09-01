import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantScreen = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={GlobalStyle.screenTitle}>{route.params.name}</Text>

      <Text>Related Restaurants</Text>
      <RestaurantCard
        name="Sushi 1"
        onPress={() => {
          navigation.push('RestaurantScreen', {name: 'Sushi 1'});
        }}
      />
      <RestaurantCard
        name="Sushi 2"
        onPress={() => {
          navigation.push('RestaurantScreen', {name: 'Sushi 2'});
        }}
      />
      <RestaurantCard
        name="Sushi 3"
        onPress={() => {
          navigation.push('RestaurantScreen', {name: 'Sushi 3'});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
});

export default RestaurantScreen;

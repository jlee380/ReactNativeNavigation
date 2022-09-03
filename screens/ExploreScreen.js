import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import GlobalStyle from '../utils/GlobalStyle';
import TopDrawerMenuNavigation from '../components/TopDrawerMenuNavigation';

const ExploreScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TopDrawerMenuNavigation />
        <Text style={GlobalStyle.screenTitle}>Restaurants</Text>
        <Text style={styles.sectionTitle}>Restaurant Near You</Text>
        <RestaurantCard
          name="sushi"
          onPress={() => {
            // navigation.push('RestaurantScreen', {name: 'sushi'});
            navigation.navigate('RestaurantsScreenStack', {
              screen: 'Restaurant',
              params: {name: 'Hello from Explore'},
            });
          }}
        />
        <RestaurantCard
          name="burger"
          onPress={() => {
            navigation.push('RestaurantScreen', {name: 'burger'});
          }}
        />
        <RestaurantCard
          name="fine dining"
          onPress={() => {
            navigation.push('RestaurantScreen', {name: 'fine dining'});
          }}
        />
        <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
        <RestaurantCard
          name="sushi2"
          onPress={() => {
            navigation.push('RestaurantScreen', {name: 'sushi2'});
          }}
        />
        <RestaurantCard
          name="burger2"
          onPress={() => {
            navigation.push('RestaurantScreen', {name: 'burger2'});
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  restaurantCard: {
    backgroundColor: '#efefef',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
});

export default ExploreScreen;

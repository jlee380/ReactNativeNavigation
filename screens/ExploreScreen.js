import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import GlobalStyle from '../utils/GlobalStyle';

const ExploreScreen = () => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={GlobalStyle.screenTitle}>Restaurants</Text>
				<Text style={styles.sectionTitle}>Restaurant Near You</Text>
				<RestaurantCard name='sushi' />
				<RestaurantCard name='burger' />
				<RestaurantCard name='fine dining' />
				<Text style={styles.sectionTitle}>
					Most Popular Restaurants
				</Text>
				<RestaurantCard name='sushi' />
				<RestaurantCard name='burger' />
				<Menu />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
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

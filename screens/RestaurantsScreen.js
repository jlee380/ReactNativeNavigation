import { View, Text, ScrollView, StyleSheet } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import React from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import Menu from '../components/Menu';

const RestaurantsScreen = ({ navigation }) => {
	// const restaurantsInfo = [
	// 	{name: 'sushi'},
	// 	{name: 'burger'},
	// 	{name: 'fine dining'},
	// 	{name: 'sushi'},
	// 	{name: 'burger'},
	// ]
	return (
		<View style={styles.container}>
			<Text style={GlobalStyle.screenTitle}>Restaurants Screen</Text>
			<ScrollView>
				{/* {restaurantsInfo.map((res) => {
						<RestaurantCard name={res.name} onPress={(res.name) => navigation.navigate('d'), {res.name}} />
					
				})} */}
				<RestaurantCard
					name='sushi'
					onPress={({ name }) =>
						navigation.navigate('RestaurantScreen', { name })
					}
				/>
				<RestaurantCard
					name='burger'
					onPress={({ name }) =>
						navigation.navigate('RestaurantScreen', { name })
					}
				/>
				<RestaurantCard
					name='fine dining'
					onPress={({ name }) =>
						navigation.navigate('RestaurantScreen', { name })
					}
				/>
				<RestaurantCard
					name='sushi'
					onPress={({ name }) =>
						navigation.navigate('RestaurantScreen', { name })
					}
				/>
				<RestaurantCard
					name='burger'
					onPress={({ name }) =>
						navigation.navigate('RestaurantScreen', { name })
					}
				/>
			</ScrollView>
			<Menu />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginTop: 24,
	},
});

export default RestaurantsScreen;

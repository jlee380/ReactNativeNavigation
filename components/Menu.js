import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Menu = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Navigation</Text>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('ExploreScreen');
				}}>
				<Text style={styles.link}>Explore</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('ProfileScreen');
				}}>
				<Text style={styles.link}>Profile</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('RestaurantsScreen');
				}}>
				<Text style={styles.link}>Restaurants</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	restaurantCard: {
		marginTop: 8,
		padding: 12,
		backgroundColor: '#efefef',
	},
	link: {
		fontSize: 16,
		marginTop: 8,
		color: '#097ade',
	},
	title: {
		fontSize: 10,
		fontWeight: 'bold',
	},
});

export default Menu;

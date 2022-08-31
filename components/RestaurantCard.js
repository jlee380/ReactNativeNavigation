import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const RestaurantCard = ({ name, onPress }) => {
	return (
		<TouchableOpacity onPress={() => onPress(name)}>
			<View>
				<Text style={styles.restaurantCard}>{name}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	restaurantCard: {
		marginTop: 8,
		padding: 12,
		backgroundColor: '#efefef',
	},
});

export default RestaurantCard;

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import GlobalStyle from '../utils/GlobalStyle';

const RestaurantScreen = ({ route }) => {
	return (
		<View style={styles.container}>
			<Text style={GlobalStyle.screenTitle}>{route.params.name}</Text>
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

/**
 * Created by Juergen Pichler on 28.07.2017
 * WhiteArrow GmbH, DE-85405 Nandlstadt
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Fancy extends Component {

	/**
	 * Render the Component the
	 * @returns {XML}
	 */
	render()
	{
		return <View styles={styles.container}>
			<Text>Fancy</Text>
		</View>;
	}
}

export default Fancy;


const styles = StyleSheet.create({
	container:
		{
			flex           : 1,
			backgroundColor: 'red',
			padding        : 40
		}
});
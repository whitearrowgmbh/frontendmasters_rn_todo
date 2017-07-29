/**
 * Created by Juergen Pichler on 29.07.2017
 * WhiteArrow GmbH, DE-85405 Nandlstadt
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Reddit extends Component {

	componentWillMount()
	{
		fetch('https://reddit.com/json', {
			Accept: 'application/json'
		})
			.then(res => res.json())
			.then(data => console.log(data));
	}

	/**
	 * Render the Component the
	 * @returns {XML}
	 */
	render()
	{
		return <View>
			<Text>Reddit</Text>
		</View>;
	}
}

export default Reddit;
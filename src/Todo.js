import React, {Component} from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableHighlight,
	Dimensions,
	StyleSheet
} from 'react-native';


const { height, width } = Dimensions.get('window');

class Todo extends Component {
	/**
	 * Constructor
	 */
	constructor()
	{
		super();

		this.state = {
			todos  : [],
			newTodo: ''
		}
	}

	onPressAdd = () => {
		this.setState({
			todos  : [...this.state.todos, this.state.newTodo],
			newTodo: ''
		});
	};

	/**
	 * Render the Component the
	 * @returns {XML}
	 */
	render()
	{
		return (
			<View style={styles.container}>
				<View style={styles.form}>
					<TextInput
						style={styles.textInput}
						value={this.state.newTodo}
						onChangeText={(text) => this.setState({ newTodo: text })}/>
					<TouchableHighlight onPress={this.onPressAdd}
										style={styles.touchableStyle}>
						<Text style={styles.buttonTextStyle}>add</Text>
					</TouchableHighlight>
				</View>
				{this.state.todos.map((todo, i) => (
					<View style={styles.todo}>
						<Text key={i}
							  style={styles.textStyle}>{todo}</Text>
					</View>))
				}
			</View>
		);
	}
}

export default Todo;


const styles = StyleSheet.create({
	container      :
		{
			flex   : 1,
			padding: 20
		},
	textInput      :
		{
			fontSize: 24,
			width   : 300
		},
	textStyle      :
		{
			fontSize: 18
		},
	buttonTextStyle:
		{
			alignItems: 'center',
			fontSize  : 24,
			fontWeight: 'bold'
		},
	touchableStyle :
		{
			borderWidth   : 1,
			justifyContent: 'center',
			alignItems    : 'center',
			borderColor   : 'blue',
			height        : 50
		},
	form           :
		{
			flexDirection: 'row',
			marginBottom : 60
		},
	todo           :
		{
			marginBottom     : 10,
			borderWidth      : 1,
			borderColor      : 'white',
			borderBottomColor: 'lightgrey'
		}


});
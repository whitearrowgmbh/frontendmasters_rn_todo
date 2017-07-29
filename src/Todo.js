import React, {Component} from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableHighlight,
	Dimensions,
	StyleSheet, Switch, TouchableOpacity
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
				<Switch/>
				<View style={styles.form}>
					<TextInput
						style={styles.input}
						value={this.state.newTodo}
						onChangeText={(text) => this.setState({ newTodo: text })}/>
					<TouchableOpacity onPress={this.onPressAdd}
									  style={styles.button}>
						<Text style={styles.buttonText}>add</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.todos}>
					{this.state.todos.map((todo, i) => (
						<View style={styles.todo}>
							<Text key={i}
								  style={styles.todoText}>{todo}</Text>
						</View>))
					}
				</View>
			</View>
		);
	}
}

export default Todo;


const styles = StyleSheet.create({
	container:
		{
			flex   : 1,
			padding: 20
		},
	input    :
		{
			fontSize: 24,
			flex    : 0.7
		},
	textStyle:
		{
			// fontSize: 18
		},
	button   :
		{
			flex          : 0.3,
			height        : 50,
			borderColor   : 'blue',
			borderWidth   : 1,
			borderRadius  : 3,
			justifyContent: 'center',
			alignItems    : 'center'
		},
	form     :
		{
			flexDirection: 'row'
		},
	todos    : {
		marginTop: 60
	},
	todo     :
		{
			marginBottom     : 10,
			borderBottomWidth: 1,
			borderBottomColor: 'lightgrey'
		},
	todoText :
		{
			fontSize: 24
		}
});
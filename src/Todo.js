import React, {Component} from 'react';
import {
	Text,
	View,
	TextInput,
	Dimensions,
	StyleSheet, TouchableOpacity, Switch
} from 'react-native';


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

	handleChange(text)
	{
		this.setState({ newTodo: text });
	}

	handlePress()
	{
		const todos = [...this.state.todos, this.state.newTodo];
		this.setState({ todos, newTodo: '' });
	}

	render()
	{
		return (
			<View style={styles.container}>
				<View style={styles.InputSection}>
					<TextInput
						style={styles.text_input}
						placeholder="Enter Todo"
						value={this.state.newTodo}
						onChangeText={this.handleChange.bind(this)}
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={this.handlePress.bind(this)}>
						<Text style={styles.buttonText}>make</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.ListSection}>
					{this.state.todos.map((todo, i) => (
						<View key={i}
							  style={styles.todo}>
							<Text style={styles.todoText}>{todo}</Text>
						</View>
					))}
				</View>
			</View>
		)
	}
}

export default Todo;


const styles = StyleSheet.create({
	container   : {
		flex         : 1,
		flexDirection: 'column',
		width        : 300
	},
	InputSection: {
		flex         : 1,
		flexDirection: 'row',
		alignItems   : 'flex-end'
	},
	text_input  : {
		flex    : 4,
		fontSize: 24
	},
	button      : {
		flex          : 1,
		borderWidth   : 1,
		height        : 50,
		borderColor   : 'blue',
		borderRadius  : 3,
		justifyContent: 'center',
		alignItems    : 'center'
	},
	buttonText  : {
		fontSize  : 24,
		fontWeight: 'bold'
	},
	ListSection : {
		marginTop: 60,
		flex     : 5,
	},
	todo        : {
		marginBottom     : 10,
		borderBottomWidth: 1,
		borderBottomColor: 'lightgrey'
	},
	todoText    : {
		fontSize: 24
	}
});

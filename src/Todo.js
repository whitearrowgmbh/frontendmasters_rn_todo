import React, {Component} from 'react';
import {Text, View, TextInput, TouchableHighlight} from 'react-native';


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
		this.setState({ todos: [...this.state.todos, this.state.newTodo], newTodo: '' });
	};

	/**
	 * Render the Component the
	 * @returns {XML}
	 */
	render()
	{
		return (
			<View>
				<Text>Todo:</Text>
				<TextInput value={this.state.newTodo}
						   onChangeText={(text) => this.setState({ newTodo: text })}/>
				<TouchableHighlight onPress={this.onPressAdd}>
					<Text>add</Text>
				</TouchableHighlight>
				<View>
					{this.state.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}
				</View>
			</View>
		);
	}
}

export default Todo;
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

	componentWillMount()
	{
		fetch('http://192.168.178.94:3000/todos', {
			'Accept': 'application/json'
		})
			.then(res => res.json())
			.then(todos => this.setState({ todos }));
	}

	onPressAdd = () => {
		fetch('http://192.178.168.94:3000/todos', {
			method : 'POST',
			body   : JSON.stringify({ name: this.state.newTodo }),
			headers:
				{
					'Content-Type': 'application/json'
				}
		})
			.then(res => res.json())
			.then(data => {
				this.setState({
					todos  : [...this.state.todos, data],
					newTodo: ''
				});
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


const
	styles = StyleSheet.create({
		container:
			{
				// flex   : 1,
				padding: 20
			},
		input    :
			{
				fontSize: 24,
				flexGrow: 3
			},
		textStyle:
			{
				// fontSize: 18
			},
		button   :
			{
				flexGrow      : 1,
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
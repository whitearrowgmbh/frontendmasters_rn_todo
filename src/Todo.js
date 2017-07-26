import React, {Component} from 'react';
import {Text, View, TextInput, TouchableHighlight, ListView} from 'react-native';


class Todo extends Component {
    /**
     * Constructor
     */
    constructor()
    {
        super();

        const ds = new ListViewDataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            todos: [],
            dataSource: ds.cloneWithRows([]),
            newTodo: ''
        }
    }

    onPressAdd = () => {
        this.setState({todos: [...this.state.todos, this.state.newTodo], newTodo: ''});
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
                           onChangeText={(text) => this.setState({newTodo: text})}/>
                <TouchableHighlight onPress={this.onPressAdd}>
                    <Text>add</Text>
                </TouchableHighlight>


            </View>
        );
    }
}

export default Todo;
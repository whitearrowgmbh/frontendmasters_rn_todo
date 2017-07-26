import React from 'react';
import {StyleSheet, View} from 'react-native';
import Todo from "./src/Todo";

export default class App extends React.Component {
    render()
    {
        return (
            <View style={styles.container}>
                <Todo/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 40
    },
});

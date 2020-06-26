import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'


export default class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            data: '...',
        }

    }

    _clickPlus() {
        fetch('http://localhost/api/product/list')
            .then((res) => res.json())
            .then((resJson) => {
                this.setState({
                    data: "121",
                })
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <View style={styles.main}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(userId) => this.setState({ userId })}
                    value={this.state.userId} />
                <TouchableOpacity
                    style={styles.plus}
                    onPress={() => { this._clickPlus() }}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <View style={styles.result}>
                    <Text>{this.state.data}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        margin: 30
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        marginBottom: 5,
        borderColor: '#c2c2c2'
    },
    plus: {
        padding: 20,
        backgroundColor: 'tomato',
    },
    result: {
        backgroundColor: 'white'
    }
})
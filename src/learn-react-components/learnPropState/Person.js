import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Person extends Component {
    constructor(props) {
        super(props);
        //Mặc định state sẽ được set ở đây
        this.state = { height: 0 };
    }
    _onClickCount() {
        //State sẽ thay đổi khi user click vào TouchableOpacity
        this.setState({
            height: this.state.height + 100,
        });
    };
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={() => {
                        this._onClickCount()
                    }
                    }>
                    <Text> {this.props.name}</Text>
                    <Text>{this.state.height}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: 'yellow',
        padding: 30,
        marginBottom: 20
    }
});
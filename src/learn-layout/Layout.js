import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.squads}></View>
                <View style={styles.squads}></View>
                <View style={styles.squads}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: Platform.OS === 'ios' ? 35 : 0,
        backgroundColor: 'yellow',
        flex: 1,
        //Flex direction mặc định là `column` , `row` xếp theo hàng ngang
        flexDirection: 'column'
    },
    squads: {
        backgroundColor: 'red',
        borderWidth: 1,
        height: 70,
        width: 70,
        flex: 1
    }
})


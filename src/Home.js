import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import ModalComponent from './learn-react-components/learnModal/ModalComponent'
import Person from './learn-react-components/learnPropState/Person'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <ModalComponent /> */}
                <Person name="Triệu" />
                <Person name="Trang " />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 35 : 0
    },
});

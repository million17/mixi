import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import ModalComponent from './learn-react-components/learnModal/ModalComponent'
import Person from './learn-react-components/learnPropState/Person'
import FormSubmit from './learn-react-components/learnInputSubmit/FormSubmit'
import { local } from './networking/Server'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <ModalComponent /> */}
                {/* <Person name="Triệu" />
                <Person name="Trang " /> */}
                <FormSubmit />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 35 : 0,
        flex: 1,
        backgroundColor: 'yellow',

    },
});

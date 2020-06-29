import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, AsyncStorage } from 'react-native';

export default class StorageApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    save = async () => {
        try {
            // await đợi khi chạy xong thì setItem vào storage
            await AsyncStorage.setItem(
                '@KEY:key',
                'FAST & FURIOUS 10'
            );
        } catch (error) {
            console.log(error)
        }
    }

    get = async () => {
        try {
            //GetItem của biết storage
            const getItem = await AsyncStorage.getItem('@KEY:key');
            if(getItem) {
                alert(getItem);
            }
            alert(getItem);
            
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View style={styles.main}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.save() }}
                >
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.get() }}>
                    <Text style={styles.text}>GET</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'yellow',
        padding: 30,
        width: 150,
        marginBottom: 20,
    },
    text: {
        color: 'yellow',
        textAlign: 'center'
    },
    main: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 35 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
});
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import MenuDrawer from 'react-native-side-drawer'

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    toggleOpen = () => {
        this.setState({ open: !this.state.open });
    };

    drawerContent = () => {
        return (
            <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
                <Text style={{
                    marginTop: Platform.OS === 'ios' ? 35 : 0
                }}>Close</Text>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View>
                <MenuDrawer
                    open={this.state.open}
                    drawerContent={this.drawerContent()}
                    drawerPercentage={45}
                    animationTime={250}
                    overlay={true}
                    opacity={0.4}
                >
                    <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
                        <Text>Open</Text>
                    </TouchableOpacity>
                </MenuDrawer>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        zIndex: 0
    },
    animatedBox: {
        flex: 1,
        backgroundColor: "#38C8EC",
        padding: 10
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F04812'
    }
})
import React, { Component } from 'react'
import { Text, View, Modal, Alert , TouchableHighlight} from 'react-native'


export default class ModalComponent extends Component {
    state = {
        modalVisible: false
    };

    setModalvisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { modalVisible } = this.state;
        return (
            <View>
                <Modal
                    // Slide trượt từ dưới lên trên ,Fade mở dần trong tầm nhìn, None k trượt 
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.')
                    }
                    }
                >
                    <View style={
                        {
                            flex: 1,
                            justifyContent: 'center',
                            backgroundColor: '#c2c3c3',
                            alignItems: 'center'
                        }
                    }>
                        <Text>Hello World !</Text>
                        <TouchableHighlight
                            onPress={() => {
                                this.setModalvisible(!modalVisible);
                            }}
                        >
                            <Text>Hide Modal</Text>

                        </TouchableHighlight>
                    </View>

                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalvisible(true);
                        console.log('Click show');
                    }}
                >
                    <Text>Show Modal</Text>

                </TouchableHighlight>
            </View>
        )
    }
}

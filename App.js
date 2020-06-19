/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Platform,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        marginTop: Platform.OS === 'ios' ? 34 : 0,
        color: 'white',
        fontSize: 22,
      }}>Mixis</Text>
    </View>
  );
};


export default App;

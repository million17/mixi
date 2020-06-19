/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Platform,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function DetailScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>Detail Screen</Text>
      <Button
        title="Go to Details Again ?"
        onPress={() => navigation.push('Detail Mixi')}
      />
      <Button
        title="Go to Home Mixi .."
        onPress={() => navigation.navigate('Home Mixi')}
      />
      <Button
        title="Go to Third Mixi .."
        onPress={() => navigation.navigate('Third Mixi')}
      />
      <Button
        title="Go to Back .."
        onPress={() => navigation.goBack()} />
    </View>
  );
}

function ThirdScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'tomato',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{ color: 'white', fontSize: 22 }}>Third Screen </Text>
      <Button
        title="Go to Back .."
        onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Click go to Details "
        onPress={() => navigation.navigate('Detail Mixi')} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Mixi">
        <Stack.Screen
          name="Home Mixi"
          component={HomeScreen}
          option={{ title: 'Overview' }} />
        <Stack.Screen name="Detail Mixi" component={DetailScreen} />
        <Stack.Screen name="Third Mixi" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
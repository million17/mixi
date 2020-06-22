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
  Image,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function DetailScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>Detail Screen</Text>
      {/* <Button
        title="Go to Details Again ?"
        onPress={() => navigation.push('Detail Mixi')}
      /> */}
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

      <Button
        title="Update title Header"
        onPress={() => {
          navigation.setOptions({ title: 'Update Header' })
        }}
      />
    </View>
  );
}

function ThirdScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Count Click"
          onPress={() => setCount(c => c + 1)}
        />
      ),
    })
  }, [navigation, setCount])


  return (
    <View style={{
      flex: 1,
      backgroundColor: 'tomato',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Count : {count}</Text>
      <Text style={{ color: 'white', fontSize: 22 }}>Third Screen </Text>
      <Button
        title="Go to Back .."
        onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Go to the TabScreen"
        onPress={() => navigation.navigate(
          'Tab Screen'
        )}
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
        onPress={() =>
          navigation.navigate('Detail Mixi', { name: "Custom Details " })
        } />
    </View>
  );
}

function LogoScreen() {
  return (
    <Image style={{ width: 40, height: 40 }} source={require('./src/image/logo.png')} />
  );
}

function TabScreen() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home Mixi" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home Mixi"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTitleStyle: {
            fontWeight: 'normal'
          }
        }}
      >
        <Stack.Screen
          name="Home Mixi"
          component={HomeScreen}
          options={{
            title: 'Overview',
            headerStyle: {
              backgroundColor: '#c2c2c2'
            },
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: 19
            }
          }} />
        <Stack.Screen
          name="Detail Mixi"
          component={DetailScreen}
          options={({ route }) =>
            ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Third Mixi"
          component={ThirdScreen}
          options={({ navigation, route }) => ({
            headerTitle: props => <LogoScreen {...props} />,
            headerBackTitleVisible: false
          })} />
        <Stack.Screen
          name="Tab Screen"
          component={TabScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
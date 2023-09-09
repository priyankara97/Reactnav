import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';
import Home from './Pages/Home';
import About from './Pages/About';



const Stack = createStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
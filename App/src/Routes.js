import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/Login/Login';
import Registration from './Screen/Registration/Registration';
import Home from './Screen/Dashboard/Home';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}  options={{ header: () => null }}/>
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Home" component={Home} options={{ header: () => null }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
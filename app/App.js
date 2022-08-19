import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import SplashScreen from "./Auth/Splash";
import LoginScreen from "./Auth/Login";
import SignUpScreen from "./Auth/SignUp";
import HomeScreen from "./Auth/HomeScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={"Root"}
            screenOptions={{
                header: () => null,
            }}
        >
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
            />

            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />


        </Stack.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}
export default App;
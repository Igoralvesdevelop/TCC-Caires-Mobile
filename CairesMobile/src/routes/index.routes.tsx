import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";

export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
        >

            <Stack.Screen
                name="Login"
                component={Login}

            />
        </Stack.Navigator>
    )
}
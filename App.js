import React from 'react';
import { ActivityIndicator, StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {ListContextProvider} from "./context";

import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    if (!isLoadingComplete) {
        window.setTimeout(() => setLoadingComplete(true), 2000);
        return <ActivityIndicator size='big' style={styles.loader} />
    }

    return (
        <ListContextProvider>
            <NavigationContainer>
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name="List" component={ListScreen} />
                    <Stack.Screen name="Detail" component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ListContextProvider>
    );
}


const styles = StyleSheet.create({
    loader: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    }
});

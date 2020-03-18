import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ListContext, useCurrentItem } from "../context";

/**
 * Ставим флаг айтему
 * @param state
 * @param id
 * @returns {state}
 */
const markPressed = (state, id) => {
    const idx = state.findIndex(({ id: stateId }) => stateId === id);
    state[idx].pressed = !state[idx].pressed;
    return state;
};

export default function DetailScreen({ navigation, route }) {
    const { itemId } = route.params;
    const item = useCurrentItem(itemId);
    const {state, setState} = React.useContext(ListContext);

    const onPress = () => {
        const newState = markPressed(state, itemId);
        setState(newState);
        return navigation.push("List");
    };

    return (
        <View style={styles.container}>
            <Text>Id: {item.id}</Text>
            <Text>Header: {item.header}</Text>
            <Text>Text: {item.text}</Text>
            <Button onPress={onPress} title='Press' style={styles.button} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    button: {
        width: '200px',
        height: '50px'
    }
});
import React from "react";
import {Text, TouchableWithoutFeedback} from "react-native";

export default function Item({ id, text, pressed, onPress, style }) {
    const backgroundColor = pressed ? '#FD7F4A' : '#ffffff';
    return (
        <TouchableWithoutFeedback
            onPress={() => onPress(id)}
        >
            <Text
                style={[style, { backgroundColor }]}
            >
                {text}
            </Text>
        </TouchableWithoutFeedback>
    )
}
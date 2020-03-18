import React from "react";
import { ScrollView, StyleSheet, FlatList } from "react-native";
import { ListContext } from "../context";
import Item from "../components/common/Item";


export default function ListScreen({ navigation }) {
    const {state: items} = React.useContext(ListContext);
    const onSelect = id => navigation.push("Detail", {
        itemId: id
    });
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <FlatList
                data={items}
                extraData={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={
                    ({item}) =>
                        <Item
                            id={item.id}
                            text={item.text}
                            header={item.header}
                            pressed={item.pressed}
                            onPress={onSelect}
                            style={styles.item}
                        />
                }
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center'
    },
    item: {
        backgroundColor: '#FD7F4A;',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});
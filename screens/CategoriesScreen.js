import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelectMeal={() => {
            props.navigation.navigate({
                routeName: "CategoryMeals",
                params: {
                categoryId: itemData.item.id,
                },
            });
            }}
        />
        );
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoriesScreen;
